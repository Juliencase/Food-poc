import { Product } from '@/src/models/product';
import Image from 'next/image';

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';

import React from 'react';
import { NutrimentsFactComponent } from '@/src/components/nutriments/nutriments-fact.component';
import { Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const NutrimentsComponent = ({ product }: { product: Product }) => {
	function getNovaGroupLabel(nova_group: number) {
		switch (nova_group) {
			case 1:
				return 'Aliments peu ou pas transformés';
			case 2:
				return 'Ingrédients culinaires transformés';
			case 3:
				return 'Aliments transformés';
			case 4:
				return 'Aliments ultra-transformés';
			default:
				return 'Aucune information disponible concernant le groupe NOVA';
		}
	}

	return (
		<>
			<div className="flex flex-wrap justify-evenly">
				<div className="my-2">
					<p>{product.product_name_fr}</p>
					<p>Marque : {product.brands}</p>
					<p>Ingrédients : {product.ingredients_text_fr}</p>
					<p>Origine : {product.origin}</p>
					<p className="my-2">
						<Image
							src={`https://static.openfoodfacts.org/images/attributes/dist/nutriscore-${product.nutrition_grade_fr}-new-fr.svg`}
							alt="Nutri-score"
							width="100"
							height="100"
						/>
					</p>
					<p>
						<Image
							src={`https://static.openfoodfacts.org/images/attributes/dist/nova-group-${product.nova_group}.svg`}
							alt="Nova group"
							width="50"
							height="50"
						/>
						{getNovaGroupLabel(product.nova_group)}
					</p>

					<Popover>
						<PopoverTrigger className="flex">
							<Button>
								Voir le produit <Eye className="ml-1" />
							</Button>
						</PopoverTrigger>
						<PopoverContent>
							<div className="flex justify-center">
								<Image
									src={product.image_url}
									alt={product.product_name_fr}
									style={{ maxWidth: '200px' }}
									width="50"
									height="50"
								/>
							</div>
						</PopoverContent>
					</Popover>
				</div>
				<div>
					<NutrimentsFactComponent
						nutriments={product.nutriments}
					></NutrimentsFactComponent>
				</div>
			</div>
		</>
	);
};
