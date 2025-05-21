import Image from 'next/image';
import React, { useState } from 'react';

export const NovaComponent = ({ nova_score }: { nova_score: number }) => {
	const [imgError, setImgError] = useState(false);

	function getNovaGroupLabel(nova_score: number) {
		console.log(nova_score);
		switch (nova_score) {
			case 1:
				return {
					label: 'Aliments peu ou pas transformés',
					color: '#4CAF50',
					bg: 'rgba(76,175,80,0.15)',
				};
			case 2:
				return {
					label: 'Ingrédients culinaires transformés',
					color: '#FFEB3B',
					bg: 'rgba(255,235,59,0.15)',
				};
			case 3:
				return {
					label: 'Aliments transformés',
					color: '#FF9800',
					bg: 'rgba(255,152,0,0.15)',
				};
			case 4:
				return {
					label: 'Aliments ultra-transformés',
					color: '#F44336',
					bg: 'rgba(244,67,54,0.15)',
				};
			default:
				return {
					label: 'Aucune information disponible concernant le groupe NOVA',
					color: '#888',
					bg: '#f0f0f0',
				};
		}
	}

	const { label, color, bg } = getNovaGroupLabel(nova_score);

	return (
		<div className="flex items-center gap-4">
			{!imgError ? (
				<Image
					src={`https://static.openfoodfacts.org/images/attributes/dist/nova-group-${nova_score}.svg`}
					alt="Nova group"
					width={40}
					height={40}
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
						marginBottom: 2,
						marginTop: 2,
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
						NOVA
					</span>
					<span style={{ fontSize: '1.5rem', lineHeight: 1 }}>
						{nova_score || '?'}
					</span>
				</div>
			)}
			<span style={{ color }} className="font-semibold text-lg">
				{label}
			</span>
		</div>
	);
};
