export interface ProductResponse {
	code: string;
	errors: any[];
	product: Product;
	status: string;
	warnings: any[];
}

export interface Product {
	_id: string;
	_keywords: string[];
	additives_n: number;
	additives_original_tags: string[];
	additives_tags: string[];
	allergens: string;
	allergens_from_ingredients: string;
	allergens_from_user: string;
	allergens_hierarchy: string[];
	allergens_tags: string[];
	brands: string;
	brands_old: string;
	brands_tags: string[];
	categories: string;
	categories_hierarchy: string[];
	categories_lc: string;
	categories_old: string;
	categories_properties: Record<string, string>;
	categories_properties_tags: string[];
	categories_tags: string[];
	category_properties: Record<string, any>;
	code: string;
	compared_to_category: string;
	complete: number;
	completeness: number;
	correctors_tags: string[];
	countries: string;
	countries_hierarchy: string[];
	countries_lc: string;
	countries_tags: string[];
	created_t: number;
	creator: string;
	data_quality_info_tags: string[];
	data_quality_tags: string[];
	data_quality_warnings_tags: string[];
	ecoscore_data: EcoscoreData;
	ecoscore_grade: string;
	ecoscore_score: number;
	ecoscore_tags: string[];
	editors_tags: string[];
	expiration_date: string;
	food_groups: string;
	food_groups_tags: string[];
	fruits_vegetables_nuts_100g_estimate: number;
	generic_name: string;
	generic_name_fr: string;
	id: string;
	image_front_small_url: string;
	image_front_thumb_url: string;
	image_front_url: string;
	image_ingredients_small_url: string;
	image_ingredients_thumb_url: string;
	image_ingredients_url: string;
	image_nutrition_small_url: string;
	image_nutrition_thumb_url: string;
	image_nutrition_url: string;
	image_small_url: string;
	image_thumb_url: string;
	image_url: string;
	images: Record<string, any>;
	ingredients: Ingredient[];
	ingredients_analysis: Record<string, any>;
	ingredients_analysis_tags: string[];
	ingredients_debug: string[];
	ingredients_from_or_that_may_be_from_palm_oil_n: number;
	ingredients_from_palm_oil_n: number;
	ingredients_from_palm_oil_tags: string[];
	ingredients_hierarchy: string[];
	ingredients_ids_debug: string[];
	ingredients_lc: string;
	ingredients_n: number;
	ingredients_n_tags: string[];
	ingredients_non_nutritive_sweeteners_n: number;
	ingredients_original_tags: string[];
	ingredients_percent_analysis: number;
	ingredients_sweeteners_n: number;
	ingredients_tags: string[];
	ingredients_text: string;
	ingredients_text_debug: string;
	ingredients_text_fr: string;
	ingredients_text_with_allergens: string;
	ingredients_text_with_allergens_fr: string;
	ingredients_that_may_be_from_palm_oil_n: number;
	ingredients_that_may_be_from_palm_oil_tags: string[];
	ingredients_with_specified_percent_n: number;
	ingredients_with_specified_percent_sum: number;
	ingredients_with_unspecified_percent_n: number;
	ingredients_with_unspecified_percent_sum: number;
	ingredients_without_ciqual_codes: any[];
	ingredients_without_ciqual_codes_n: number;
	ingredients_without_ecobalyse_ids: any[];
	ingredients_without_ecobalyse_ids_n: number;
	interface_version_created: string;
	interface_version_modified: string;
	known_ingredients_n: number;
	labels: string;
	labels_hierarchy: string[];
	labels_lc: string;
	labels_old: string;
	labels_tags: string[];
	lang: string;
	languages: Record<string, number>;
	languages_codes: Record<string, number>;
	languages_hierarchy: string[];
	languages_tags: string[];
	last_edit_dates_tags: string[];
	last_editor: string;
	last_image_dates_tags: string[];
	last_image_t: number;
	last_modified_by: string;
	last_modified_t: number;
	last_updated_t: number;
	lc: string;
	manufacturing_places: string;
	manufacturing_places_tags: string[];
	max_imgid: string;
	misc_tags: string[];
	nova_group: number;
	nova_groups: string;
	nova_groups_tags: string[];
	nutrient_levels: Record<string, string>;
	nutrient_levels_tags: string[];
	nutriments: Nutriments;
	nutriments_estimated: Record<string, number>;
	nutriscore: Record<string, any>;
	nutriscore_data: Record<string, any>;
	nutriscore_grade: string;
	nutriscore_score: number;
	nutriscore_score_opposite: number;
	nutriscore_tags: string[];
	nutriscore_version: string;
	nutrition_data: string;
	nutrition_data_per: string;
	nutrition_data_prepared_per: string;
	nutrition_grade_fr: string;
	nutrition_grades: string;
	nutrition_grades_tags: string[];
	nutrition_score_beverage: number;
	origin: string;
	origins: string;
	origins_hierarchy: string[];
	origins_lc: string;
	origins_old: string;
	origins_tags: string[];
	packaging: string;
	packaging_hierarchy: string[];
	packaging_lc: string;
	packaging_materials_tags: string[];
	packaging_old: string;
	packaging_old_before_taxonomization: string;
	packaging_recycling_tags: string[];
	packaging_shapes_tags: string[];
	packaging_tags: string[];
	packagings: Packaging[];
	packagings_materials: Record<string, any>;
	packagings_n: number;
	photographers_tags: string[];
	pnns_groups_1: string;
	pnns_groups_1_tags: string[];
	pnns_groups_2: string;
	pnns_groups_2_tags: string[];
	popularity_key: number;
	popularity_tags: string[];
	product_name: string;
	product_name_fr: string;
	product_quantity: string;
	product_quantity_unit: string;
	product_type: string;
	purchase_places: string;
	purchase_places_tags: string[];
	quantity: string;
	quantity_debug_tags: string[];
	removed_countries_tags: string[];
	rev: number;
	scans_n: number;
	schema_version: number;
	selected_images: Record<string, any>;
	serving_quantity: string;
	serving_quantity_unit: string;
	serving_size: string;
	serving_size_debug_tags: string[];
	sortkey: number;
	states: string;
	states_hierarchy: string[];
	states_tags: string[];
	stores: string;
	stores_tags: string[];
	traces: string;
	traces_debug_tags: string[];
	traces_from_ingredients: string;
	traces_from_user: string;
	traces_hierarchy: string[];
	traces_tags: string[];
	unique_scans_n: number;
	unknown_ingredients_n: number;
	unknown_nutrients_tags: string[];
	update_key: string;
	weighers_tags: string[];
}

export interface Ingredient {
	ciqual_food_code: string;
	ecobalyse_code: string;
	id: string;
	is_in_taxonomy: number;
	percent_estimate: number;
	percent_max: number;
	percent_min: number;
	text: string;
	vegan: string;
	vegetarian: string;
}

export interface Packaging {
	food_contact: number;
	material: { id: string };
	shape: { id: string };
}

// export interface Nutriments {
// 	carbohydrates: number;
// 	carbohydrates_100g: number;
// 	carbohydrates_serving: number;
// 	carbohydrates_unit: string;
// 	carbohydrates_value: number;
// 	energy: number;
// 	energy_100g: number;
// 	energy_serving: number;
// 	energy_unit: string;
// 	energy_value: number;
// 	'energy-kcal': number;
// 	'energy-kcal_100g': number;
// 	'energy-kcal_unit': number;
// 	'energy-kcal_value': number;
// 	'energy-kcal_value_computed': number;
// 	fat: number;
// 	fat_100g: number;
// 	fat_serving: number;
// 	fat_unit: string;
// 	fat_value: number;
// 	fiber: number;
// 	fiber_100g: number;
// 	fiber_serving: number;
// 	fiber_unit: string;
// 	fiber_value: number;
// 	proteins: number;
// 	proteins_100g: number;
// 	proteins_serving: number;
// 	proteins_unit: string;
// 	proteins_value: number;
// 	salt: number;
// 	salt_100g: number;
// 	salt_serving: number;
// 	salt_unit: string;
// 	salt_value: number;
// 	saturated_fat: number;
// 	saturated_fat_100g: number;
// 	saturated_fat_serving: number;
// 	saturated_fat_unit: string;
// 	saturated_fat_value: number;
// 	sodium: number;
// 	sodium_100g: number;
// 	sodium_serving: number;
// 	sodium_unit: string;
// 	sodium_value: number;
// 	sugars: number;
// 	sugars_100g: number;
// 	sugars_serving: number;
// 	sugars_unit: string;
// 	sugars_value: number;
// }

export interface Nutriments {
	energy_100g: number; // kJ pour 100g
	'energy-kcal_100g': number; // kcal pour 100g
	fat_100g: number; // matières grasses pour 100g
	'saturated-fat_100g': number; // acides gras saturés pour 100g
	carbohydrates_100g: number; // glucides pour 100g
	sugars_100g: number; // sucres pour 100g
	proteins_100g: number; // protéines pour 100g
	salt_100g: number; // sel pour 100g
	fiber_100g: number; // fibres pour 100g

	energy_serving: number; // kJ par portion (15g)
	'energy-kcal_serving': number; // kcal par portion (15g)
	fat_serving: number; // matières grasses par portion
	'saturated-fat_serving': number; // acides gras saturés par portion
	carbohydrates_serving: number; // glucides par portion
	sugars_serving: number; // sucres par portion
	proteins_serving: number; // protéines par portion
	salt_serving: number; // sel par portion

	energy_unit: string; // "kJ"
	'energy-kcal_unit': string; // "kcal"
	fat_unit: string; // "g"
	'saturated-fat_unit': string; // "g"
	carbohydrates_unit: string; // "g"
	sugars_unit: string; // "g"
	proteins_unit: string; // "g"
	salt_unit: string; // "g"
	fiber_unit: string; // "g"
}

export interface EcoscoreData {
	adjustments: any;
	agribalyse: any;
	grade: string;
	grades: Record<string, string>;
	missing: Record<string, number>;
	missing_data_warning: number;
	score: number;
	scores: Record<string, number>;
	status: string;
}
