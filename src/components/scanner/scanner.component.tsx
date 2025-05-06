'use client';

import React, { useEffect, useRef, useState } from 'react';
import { CameraOff } from 'lucide-react';
import {
	BrowserMultiFormatReader,
	BarcodeFormat,
	DecodeHintType,
} from '@zxing/library';

interface ScannerComponentProps {
	setBarcode: (barcode: string) => void;
}

export const ScannerComponent = ({ setBarcode }: ScannerComponentProps) => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const codeReader = useRef<BrowserMultiFormatReader | null>(null);
	const [error, setError] = useState<any | null>(null);

	useEffect(() => {
		navigator.mediaDevices
			.getUserMedia({ video: true })
			.then((stream) => {
				console.log('Caméra accessible:', stream);
			})
			.catch((err) => {
				console.error('Caméra inaccessible:', err);
			});

		const current = videoRef.current;

		const hints = new Map();
		hints.set(DecodeHintType.POSSIBLE_FORMATS, [
			BarcodeFormat.CODE_128,
			BarcodeFormat.EAN_13,
			BarcodeFormat.EAN_8,
			BarcodeFormat.CODE_39,
			BarcodeFormat.UPC_A,
		]);

		codeReader.current = new BrowserMultiFormatReader(hints, 500);

		let isActive = true;

		const startScanning = async () => {
			if (current) {
				try {
					await codeReader.current!.decodeFromConstraints(
						{
							audio: false,
							video: { facingMode: 'environment' },
						},
						current,
						(result, err) => {
							if (!isActive) return;
							if (result) {
								setBarcode(result.getText());
								codeReader.current?.reset();
								isActive = false;
							}
							if (
								err &&
								!(
									err.name === 'NotFoundException' ||
									err.name === 'ChecksumException' ||
									err.name === 'FormatException'
								)
							) {
								console.error('Erreur:', err);
								setError(err);
							}
						}
					);
				} catch (err) {
					console.error("Erreur d'accès à la caméra:", err);
					setError(err);
				}
			}
		};

		startScanning();

		return () => {
			isActive = false;
			codeReader.current?.reset();
			if (current?.srcObject) {
				(current.srcObject as MediaStream)
					.getTracks()
					.forEach((track) => track.stop());
			}
		};
	}, [setBarcode]);

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
				<video ref={videoRef} className="aspect-video" muted playsInline />
			)}
		</div>
	);
};
