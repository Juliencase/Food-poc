import { Product } from '@/src/models/product';
import { ProductInfoComponent } from '@/src/components/products/product-info.component';
import { NutrimentsFactComponent } from '@/src/components/nutriments/nutriments-fact.component';
import React from 'react';

export const ProductComponent = ({ product }: { product: Product }) => {
	return (
		<div className="flex flex-wrap justify-evenly">
			<div
				className="
          w-full md:w-auto
          bg-blue-100 md:bg-transparent
          m-2 p-4 rounded
        "
			>
				<ProductInfoComponent product={product} />
			</div>

			<div className="w-full md:w-auto bg-primary md:bg-transparent m-2 p-4 rounded flex justify-center">
				<NutrimentsFactComponent nutriments={product.nutriments} />
			</div>
		</div>
	);
};
