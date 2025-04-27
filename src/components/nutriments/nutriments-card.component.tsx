import { Product } from '@/src/models/product';

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import React from 'react';
import { NutrimentsFactComponent } from '@/src/components/nutriments/nutriments-fact.component';

export const NutrimentsCardComponent = ({ product }: { product: Product }) => {
	return (
		<>
			<Card className="p-3 m-3">
				<CardHeader>
					<CardTitle>{product.product_name_fr}</CardTitle>
					<CardDescription>Marque : {product.brands}</CardDescription>
					<CardDescription className="flex justify-center">
						<img
							src={product.image_url}
							alt={product.product_name_fr}
							style={{ maxWidth: '200px' }}
						/>
					</CardDescription>
				</CardHeader>
				<CardContent>
					<p>Card Content</p>
				</CardContent>
				<CardFooter>
					<p>Card Footer</p>
				</CardFooter>
			</Card>
			<NutrimentsFactComponent
				nutriments={product.nutriments}
			></NutrimentsFactComponent>
		</>
	);
};
