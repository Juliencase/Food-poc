import React, { useState } from 'react';
import Image from 'next/image';

export const NutriScoreComponent = ({
	nutri_score,
}: {
	nutri_score: string;
}) => {
	const [imgError, setImgError] = useState(false);

	function getNutriScoreLabel(nutri_score: string) {
		switch (nutri_score) {
			case 'a':
				return {
					label: 'Nutri-score A',
					color: '#4CAF50',
					bg: 'rgba(76,175,80,0.15)',
				};
			case 'b':
				return {
					label: 'Nutri-score B',
					color: '#FFEB3B',
					bg: 'rgba(255,235,59,0.15)',
				};
			case 'c':
				return {
					label: 'Nutri-score C',
					color: '#FF9800',
					bg: 'rgba(255,152,0,0.15)',
				};
			case 'd':
				return {
					label: 'Nutri-score D',
					color: '#FF5722',
					bg: 'rgba(255,87,34,0.15)',
				};
			case 'e':
				return {
					label: 'Nutri-score E',
					color: '#F44336',
					bg: 'rgba(244,67,54,0.15)',
				};
			default:
				return {
					label: 'Aucune information disponible concernant le nutri-score',
					color: '#888',
					bg: '#f0f0f0',
				};
		}
	}

	const { label, color, bg } = getNutriScoreLabel(nutri_score);

	return (
		<div className="flex items-center gap-4">
			{!imgError ? (
				<Image
					src={`https://static.openfoodfacts.org/images/attributes/dist/nutriscore-${nutri_score}-new-fr.svg`}
					alt="Nutri-score"
					width={64}
					height={64}
					onError={() => setImgError(true)}
				/>
			) : (
				<div
					style={{
						width: 64,
						height: 64,
						borderRadius: 16,
						background: bg,
						border: `2px solid ${color}`,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						color: color,
						fontWeight: 'bold',
						fontSize: '2.2rem',
						boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
					}}
				>
					<span
						style={{
							fontSize: '0.9rem',
							fontWeight: 600,
							letterSpacing: '0.05em',
							color: color,
							opacity: 0.8,
							marginBottom: 2,
						}}
					>
						NUTRI
					</span>
					<span style={{ fontSize: '1.5rem', lineHeight: 1 }}>
						{nutri_score ? nutri_score.toUpperCase() : '?'}
					</span>
				</div>
			)}
			<span style={{ color }} className="font-semibold text-lg">
				{label}
			</span>
		</div>
	);
};

export default NutriScoreComponent;
