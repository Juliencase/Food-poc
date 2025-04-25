"use client";
import React, { useState, useEffect } from "react";
import BarcodeScanner from "react-qr-barcode-scanner";



export default function App() {
    const [barcode, setBarcode] = useState("");
    const [product, setProduct] = useState<Product | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [stopStream, setStopStream] = useState(false);

    interface Product {
        product_name_fr: string;
        image_url: string;
        brands: string;
        nutriscore_grade?: string;
        ingredients_text_fr?: string;
        ingredients_text?: string;
    }

    useEffect(() => {
        if (!barcode) return;

        const fetchProduct = async () => {
            setIsLoading(true);
            try {
                console.log("Fetching product with barcode:", barcode);
                console.log(`https://world.openfoodfacts.org/api/v3/product/${barcode}.json`);
                const response = await fetch(
                    `https://world.openfoodfacts.org/api/v3/product/${barcode}.json`
                );

                if (!response.ok) throw new Error('Produit non trouvé');

                const data = await response.json();
                console.log("data :", data);

                if (data.status === "success") {
                    setProduct(data.product);
                } else {
                    setError("Aucune information trouvée pour ce produit");
                }
            } catch (err: Error | unknown) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProduct();
    }, [barcode]);

    return (
        <div className="container">
            {!barcode && !stopStream && (
                <BarcodeScanner
                    width={600}
                    height={600}
                    onUpdate={(_, result) => {
                        if (result) {
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-expect-error
                            setBarcode(result.text);
                            setStopStream(true);
                        }
                    }}
                />
            )}

            {barcode}

            {isLoading && <p>Chargement des informations...</p>}

            {error && <p className="error">Erreur : {error}</p>}

            {!!product && (
                <div className="product-info">
                    <h2>{product.product_name_fr}</h2>
                    <img src={product.image_url} alt={product.product_name_fr} />
                    <p>Marque : {product.brands}</p>
                    {product.nutriscore_grade && (
                        <p>Nutri-Score : {product.nutriscore_grade.toUpperCase()}</p>
                    )}
                    <h3>Ingrédients :</h3>
                    <p>{product.ingredients_text_fr || product.ingredients_text}</p>
                </div>
            )}

            {stopStream && (
                <button
                    onClick={() => {
                        setBarcode("");
                        setProduct(null);
                        setError("");
                        setStopStream(false);
                    }}
                >
                    Scanner un nouveau produit
                </button>
            )}
        </div>
    );
}
