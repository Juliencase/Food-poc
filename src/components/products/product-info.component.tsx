import { Product } from '@/src/models/product';
import Image from 'next/image';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';
import React from 'react';
import { NovaComponent } from '@/src/shared/components/nova.component';
import { NutriScoreComponent } from '@/src/shared/components/nutri-score.component';

export const ProductInfoComponent = ({ product }: { product: Product }) => {
	return (
		<div className="my-2">
			<p className="font-extrabold">{product.product_name_fr}</p>
			<p>
				<span className="font-bold">Marque : </span>
				<span className="italic">{product.brands}</span>
			</p>
			<p>
				<span className="font-semibold">Ingrédients : </span>
				<span className="italic">{product.ingredients_text_fr}</span>
			</p>
			<p>
				<span className="font-semibold">Origine : </span>
				<span>{product.origin}</span>
			</p>
			<NutriScoreComponent
				nutri_score={product.nutrition_grade_fr}
			></NutriScoreComponent>
			<NovaComponent nova_score={product.nova_group}></NovaComponent>

			<Popover>
				<PopoverTrigger className="flex justify-center">
					<Button>
						Voir le produit <Eye className="ml-1" />
					</Button>
				</PopoverTrigger>
				<PopoverContent>
					<div className="flex justify-center">
						<Image
							src={product.image_url}
							alt={product.product_name_fr}
							width="50"
							height="50"
						/>
					</div>
				</PopoverContent>
			</Popover>
		</div>
	);
};
