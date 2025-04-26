"use client";
import React, {useRef, useEffect, useState} from 'react';
import {BrowserMultiFormatReader, NotFoundException} from '@zxing/library';
import {NutrimentsCardComponent} from "@/src/components/nutriments/nutriments-card.component";
import {Product} from "@/src/models/product";


const BarcodeScanner = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const codeReader = useRef<BrowserMultiFormatReader | null>(null);
    const [barcode, setBarCode] = useState<string>();
    const [product, setProduct] = useState<Product | null>(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // Initialisation du scanner
    useEffect(() => {
        codeReader.current = new BrowserMultiFormatReader();

        const startScanning = async () => {
            if (videoRef.current) {
                try {
                    await codeReader.current!.decodeFromConstraints(
                        {
                            audio: false,
                            video: {facingMode: 'environment'}
                        },
                        videoRef.current,
                        (result, err) => {
                            if (result) {
                                setBarCode(result.getText());
                            }
                            if (err && !(err instanceof NotFoundException)) {
                                console.error('Erreur de décodage:', err);
                            }
                        }
                    );
                } catch (err) {
                    console.error('Erreur d\'accès à la caméra:', err);
                }
            }
        };

        startScanning();

        return () => {
            codeReader.current?.reset();
            if (videoRef.current?.srcObject) {
                (videoRef.current.srcObject as MediaStream).getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    // Appel API OpenFoodFacts
    useEffect(() => {
        const fetchProduct = async () => {
            if (!barcode) return;

            setIsLoading(true);
            try {
                const response = await fetch(
                    `https://world.openfoodfacts.org/api/v3/product/${barcode}.json`
                );

                if (!response.ok) throw new Error('Produit non trouvé');

                const data = await response.json();

                if (data.status === "success") {
                    setProduct(data.product);
                    setError("");
                } else {
                    setError("Aucune information trouvée pour ce produit");
                }

            } catch (err: Error | unknown) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                setError(err.message || 'Erreur de recherche');
            } finally {
                setIsLoading(false);
            }
        };

        fetchProduct();
    }, [barcode]);

    return (
        <div>
            <video
                ref={videoRef}
                style={{
                    width: "100%",
                    maxWidth: "600px",
                    display: barcode ? 'none' : 'block'
                }}
                muted
                playsInline
            />

            {isLoading && <p>Chargement...</p>}

            {error && <p className="error">{error}</p>}

            {product && (
                <div className="product-info">
                    <h2>{product.product_name_fr}</h2>
                    <img
                        src={product.image_url}
                        alt={product.product_name_fr}
                        style={{maxWidth: "200px"}}
                    />
                    <p>Marque : {product.brands}</p>
                    {product.nutriscore_grade && (
                        <p>Nutri-Score : {product.nutriscore_grade.toUpperCase()}</p>
                    )}
                    <h3>Ingrédients :</h3>
                    <p>{product.ingredients_text_fr || product.ingredients_text || 'Non spécifié'}</p>
                    <NutrimentsCardComponent product={product}></NutrimentsCardComponent>
                    <button
                        onClick={() => {
                            setBarCode(undefined);
                            setProduct(null);
                        }}
                        style={{marginTop: "1rem"}}
                    >
                        Scanner un nouveau produit
                    </button>
                </div>
            )}
        </div>
    );
};

export default BarcodeScanner;
