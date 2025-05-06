'use client';

import React, { useEffect, useRef, useState } from 'react';
import { CameraOff } from 'lucide-react';
import {
	BrowserMultiFormatReader,
	BarcodeFormat,
	DecodeHintType,
} from '@zxing/library';
import { Button } from '@/components/ui/button';

interface ScannerComponentProps {
	setBarcode: (barcode: string) => void;
}

export const ScannerComponent = ({ setBarcode }: ScannerComponentProps) => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const codeReader = useRef<BrowserMultiFormatReader | null>(null);
	const [error, setError] = useState<any | null>(null);
	const [isScanning, setIsScanning] = useState(false); // Ajout de l'état isScanning

	const startScanner = () => {
		setIsScanning(true);
	};

	const stopScanner = () => {
		setIsScanning(false);
		if (videoRef.current?.srcObject) {
			(videoRef.current.srcObject as MediaStream)
				.getTracks()
				.forEach((track) => track.stop()); // Arrêter la vidéo
		}
	};

	const startScanning = async () => {
		const current = videoRef.current;

		if (!current) return;

		try {
			current.srcObject = await navigator.mediaDevices.getUserMedia({
				video: {
					facingMode: 'environment',
					width: { ideal: 1280 },
					height: { ideal: 720 },
				},
				audio: false,
			});

			current.onloadedmetadata = () => {
				current
					.play()
					.then(() => {
						codeReader.current?.decodeContinuously(current, (result, err) => {
							if (result) {
								setBarcode(result.getText());
								stopScanner();
							}

							if (
								err &&
								![
									'NotFoundException',
									'ChecksumException',
									'FormatException',
								].includes(err.name)
							) {
								console.error('Erreur:', err);
								setError(err);
								stopScanner();
							}
						});
					})
					.catch((err) => {
						console.error('Erreur lors du démarrage de la vidéo:', err);
						setError(err);
						stopScanner();
					});
			};
		} catch (err) {
			console.error("Erreur d'accès à la caméra:", err);
			setError(err);
		}
	};

	useEffect(() => {
		if (!codeReader.current) {
			const hints = new Map();
			hints.set(DecodeHintType.POSSIBLE_FORMATS, [
				BarcodeFormat.CODE_128,
				BarcodeFormat.EAN_13,
				BarcodeFormat.EAN_8,
				BarcodeFormat.CODE_39,
			]);

			codeReader.current = new BrowserMultiFormatReader(hints);
		}

		// Nettoyage au démontage du composant
		return () => {
			codeReader.current?.reset();
			if (videoRef.current?.srcObject) {
				(videoRef.current.srcObject as MediaStream)
					.getTracks()
					.forEach((track) => track.stop());
			}
		};
	}, []);

	useEffect(() => {
		if (isScanning) {
			startScanning();
		}
	}, [isScanning]);

	return (
		<div className="bg-stone-100 flex items-center justify-center p-2">
			{error ? (
				<div>
					<CameraOff />
					<div className="text-red-500 text-xs">
						{error.message || String(error)}
					</div>
				</div>
			) : (
				<>
					{isScanning && (
						<video ref={videoRef} className="aspect-video" muted playsInline />
					)}
					{!isScanning && (
						<Button onClick={startScanner} className="m-2">
							Scanner un produit
						</Button>
					)}
				</>
			)}
		</div>
	);
};
