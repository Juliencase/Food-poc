import { Nutriments } from '@/src/models/product';

import {
	Table,
	TableBody,
	TableCaption,
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
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className="w-10">clé</TableHead>
					<TableHead className="w-10">valeur</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{Object.keys(nutriments).map((nutriment: string) => (
					<TableRow key={nutriment}>
						<TableCell className="font-medium">{nutriment}</TableCell>
						<TableCell className="font-medium">
							{nutriments[nutriment as keyof Nutriments]}
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};
