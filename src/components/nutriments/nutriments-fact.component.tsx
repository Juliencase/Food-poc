import { Nutriments } from '@/src/models/product';

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';

export const NutrimentsFactComponent = ({
	nutriments,
}: {
	nutriments: Nutriments;
}) => {
	return (
		<>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="w-10">Valeurs Nutritionelles</TableHead>
						<TableHead className="w-10">Pour 100g / 100 ml</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow key="energy_kj">
						<TableCell className="font-medium">Énergie (kJ)</TableCell>
						<TableCell>
							{nutriments.energy_100g} {nutriments.energy_unit}
						</TableCell>
					</TableRow>

					<TableRow key="energy_kcal">
						<TableCell className="font-medium">Énergie (kcal)</TableCell>
						<TableCell>
							{nutriments['energy-kcal_100g']} {nutriments['energy-kcal_unit']}
						</TableCell>
					</TableRow>

					<TableRow key="fat">
						<TableCell className="font-medium">Matières grasses</TableCell>
						<TableCell>
							{nutriments.fat_100g} {nutriments.fat_unit}
						</TableCell>
					</TableRow>

					<TableRow key="saturated-fat">
						<TableCell className="pl-4 text-gray-500">
							dont acides gras saturés
						</TableCell>
						<TableCell>
							{nutriments['saturated-fat_100g']}{' '}
							{nutriments['saturated-fat_unit']}
						</TableCell>
					</TableRow>

					<TableRow key="carbohydrates">
						<TableCell className="font-medium">Glucides</TableCell>
						<TableCell>
							{nutriments.carbohydrates_100g} {nutriments.carbohydrates_unit}
						</TableCell>
					</TableRow>

					<TableRow key="sugars">
						<TableCell className="pl-4 text-gray-500">dont sucres</TableCell>
						<TableCell>
							{nutriments.sugars_100g} {nutriments.sugars_unit}
						</TableCell>
					</TableRow>
					<TableRow key="proteins">
						<TableCell className="font-medium">Protéines</TableCell>
						<TableCell>
							{nutriments.proteins_100g} {nutriments.proteins_unit}
						</TableCell>
					</TableRow>

					<TableRow key="fiber">
						<TableCell className="font-medium">Fibres</TableCell>
						<TableCell>
							{nutriments.fiber_100g} {nutriments.fiber_unit}
						</TableCell>
					</TableRow>

					<TableRow key="salt">
						<TableCell className="font-medium">Sel</TableCell>
						<TableCell>
							{nutriments.salt_100g} {nutriments.salt_unit}
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</>
	);
};
