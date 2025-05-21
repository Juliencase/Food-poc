import React, { useState } from 'react';
import { Nutriments } from '@/src/models/product';

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';

// Type pour une ligne du tableau
type NutrimentRow = {
	key: string;
	label: string;
	value: number | undefined;
	unit: string | undefined;
	indent?: boolean;
};

// Fonction utilitaire pour générer les lignes
function getNutrimentRows(nutriments: Nutriments): NutrimentRow[] {
	return [
		{
			key: 'energy_kj',
			label: 'Énergie (kJ)',
			value: nutriments.energy_100g,
			unit: nutriments.energy_unit,
		},
		{
			key: 'energy_kcal',
			label: 'Énergie (kcal)',
			value: nutriments['energy-kcal_100g'],
			unit: nutriments['energy-kcal_unit'],
		},
		{
			key: 'fat',
			label: 'Matières grasses',
			value: nutriments.fat_100g,
			unit: nutriments.fat_unit,
		},
		{
			key: 'saturated-fat',
			label: 'dont acides gras saturés',
			value: nutriments['saturated-fat_100g'],
			unit: nutriments['saturated-fat_unit'],
			indent: true,
		},
		{
			key: 'carbohydrates',
			label: 'Glucides',
			value: nutriments.carbohydrates_100g,
			unit: nutriments.carbohydrates_unit,
		},
		{
			key: 'sugars',
			label: 'dont sucres',
			value: nutriments.sugars_100g,
			unit: nutriments.sugars_unit,
			indent: true,
		},
		{
			key: 'proteins',
			label: 'Protéines',
			value: nutriments.proteins_100g,
			unit: nutriments.proteins_unit,
		},
		{
			key: 'fiber',
			label: 'Fibres',
			value: nutriments.fiber_100g,
			unit: nutriments.fiber_unit,
		},
		{
			key: 'salt',
			label: 'Sel',
			value: nutriments.salt_100g,
			unit: nutriments.salt_unit,
		},
	];
}

// Fonction de calcul
function computeNutrimentValue(value: number | undefined, qty: string): string {
	const qtyNum = parseFloat(qty);
	if (
		!qty ||
		isNaN(qtyNum) ||
		qtyNum <= 0 ||
		value === undefined ||
		isNaN(value)
	) {
		return '-';
	}
	// On calcule le résultat avec 2 décimales
	const result = ((value * qtyNum) / 100).toFixed(2);
	// On enlève les zéros inutiles après la virgule
	return result.replace(/\.?0+$/, '');
}

export const NutrimentsFactComponent = ({
	nutriments,
}: {
	nutriments: Nutriments;
}) => {
	const [qty, setQty] = useState('100');
	const rows = getNutrimentRows(nutriments);

	return (
		<div>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Valeurs Nutritionnelles</TableHead>
						<TableHead>
							Pour&nbsp;
							<input
								type="number"
								min={1}
								value={qty}
								onChange={(e) => setQty(e.target.value)}
								style={{ width: 50 }}
							/>
							&nbsp;g/ml
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{rows.map(({ key, label, value, unit, indent }) => (
						<TableRow key={key}>
							<TableCell
								className={`font-medium${indent ? ' pl-6 italic text-gray' : ''}`}
							>
								{label}
							</TableCell>
							<TableCell className="text-center wrap-break-word">
								{computeNutrimentValue(value, qty)} {unit}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};
