'use client';
import React, { useEffect, useState } from 'react';
import { NutrimentsCardComponent } from '@/src/components/nutriments/nutriments-card.component';
import { Product } from '@/src/models/product';
import { LoginComponent } from '@/src/components/login/login.component';
import { ScannerComponent } from '@/src/components/scanner/scanner.component';

const BarcodeScanner = () => {
	const [barcode, setBarCode] = useState<string>();
	const [product, setProduct] = useState<Product | null>(null);
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

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

				if (data.status === 'success') {
					setProduct(data.product);
					setError('');
				} else {
					setError('Aucune information trouvée pour ce produit');
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
			<ScannerComponent setBarcode={setBarCode} />

			{isLoading && <p>Chargement...</p>}

			{error && <p className="error">{error}</p>}
			<LoginComponent></LoginComponent>
			{product && (
				<div className="product-info">
					<h2>{product.product_name_fr}</h2>
					<img
						src={product.image_url}
						alt={product.product_name_fr}
						style={{ maxWidth: '200px' }}
					/>
					<p>Marque : {product.brands}</p>
					{product.nutriscore_grade && (
						<p>Nutri-Score : {product.nutriscore_grade.toUpperCase()}</p>
					)}
					<h3>Ingrédients :</h3>
					<p>
						{product.ingredients_text_fr ||
							product.ingredients_text ||
							'Non spécifié'}
					</p>
					<NutrimentsCardComponent product={product}></NutrimentsCardComponent>
					<button
						onClick={() => {
							setBarCode(undefined);
							setProduct(null);
						}}
						style={{ marginTop: '1rem' }}
					>
						Scanner un nouveau produit
					</button>
				</div>
			)}
		</div>
	);
};

export default BarcodeScanner;
