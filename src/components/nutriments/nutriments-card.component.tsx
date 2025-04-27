import { Product } from '@/src/models/product';

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';

import React from 'react';
import { NutrimentsFactComponent } from '@/src/components/nutriments/nutriments-fact.component';
import { Eye } from 'lucide-react';

export const NutrimentsCardComponent = ({ product }: { product: Product }) => {
	return (
		<>
			<Card className="p-3 m-3">
				<CardHeader>
					<CardTitle>{product.product_name_fr}</CardTitle>
					<CardDescription>Marque : {product.brands}</CardDescription>
					<CardDescription></CardDescription>
					<Popover>
						<PopoverTrigger className="flex">
							Voir le produit <Eye className="ml-1" />
						</PopoverTrigger>
						<PopoverContent>
							<div>
								<img
									src={product.image_url}
									alt={product.product_name_fr}
									style={{ maxWidth: '200px' }}
								/>
							</div>
						</PopoverContent>
					</Popover>
				</CardHeader>
				<CardContent>
					<NutrimentsFactComponent
						nutriments={product.nutriments}
					></NutrimentsFactComponent>
				</CardContent>
				<CardFooter>
					<p>Card Footer</p>
				</CardFooter>
			</Card>
		</>
	);
};
