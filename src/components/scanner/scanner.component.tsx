'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';
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
	const webcamRef = useRef<Webcam>(null);
	const codeReader = useRef<BrowserMultiFormatReader | null>(null);
	const [error, setError] = useState<any | null>(null);
	const [isScanning, setIsScanning] = useState(false);

	// Fonction pour démarrer le scan
	const startScanner = () => {
		setError(null);
		setIsScanning(true);
	};

	// Fonction pour arrêter le scan
	const stopScanner = useCallback(() => {
		setIsScanning(false);
		codeReader.current?.reset();
		if (webcamRef.current?.video?.srcObject) {
			(webcamRef.current.video.srcObject as MediaStream)
				.getTracks()
				.forEach((track) => track.stop());
		}
	}, []);

	// Fonction principale de scan
	const startScanning = useCallback(async () => {
		if (!codeReader.current) return;

		const videoElement = document.getElementById(
			'barcode-video'
		) as HTMLVideoElement;
		if (!videoElement) {
			setError(new Error('Élément vidéo introuvable'));
			stopScanner();
			return;
		}

		try {
			const result =
				await codeReader.current.decodeFromVideoElement(videoElement);
			setBarcode(result.getText());
			stopScanner();
		} catch (err) {
			setError(err);
			stopScanner();
		}
	}, [setBarcode, stopScanner]);

	// Initialisation du lecteur et nettoyage
	useEffect(() => {
		if (!codeReader.current) {
			const hints = new Map();
			hints.set(DecodeHintType.POSSIBLE_FORMATS, [
				BarcodeFormat.CODE_128,
				BarcodeFormat.EAN_13,
				BarcodeFormat.EAN_8,
				BarcodeFormat.CODE_39,
				BarcodeFormat.QR_CODE,
			]);
			codeReader.current = new BrowserMultiFormatReader(hints, 500);
		}
		return () => {
			codeReader.current?.reset();
			stopScanner();
		};
	}, []);

	// Lance le scan quand isScanning passe à true
	useEffect(() => {
		if (isScanning) {
			startScanning();
		} else {
			stopScanner();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isScanning, startScanning]);

	return (
		<div className="bg-stone-100 flex flex-col items-center justify-center p-4 rounded-md">
			{error ? (
				<div className="flex flex-col items-center">
					<CameraOff size={48} />
					<div className="text-red-500 text-xs mt-2">
						{error.message || String(error)}
					</div>
					<Button onClick={startScanner} className="m-2">
						Réessayer
					</Button>
				</div>
			) : (
				<>
					{isScanning && (
						<Webcam
							ref={webcamRef}
							id="barcode-video"
							className="aspect-video border border-gray-400 rounded"
							muted
							playsInline
						/>
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
