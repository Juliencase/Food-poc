// nutrimentsRows.ts

export const nutrimentsRows = (nutriments: any) => [
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
