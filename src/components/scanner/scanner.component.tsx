'use client';

import React, { useEffect, useRef, useState } from 'react';
import { CameraOff } from 'lucide-react';
import { BrowserMultiFormatReader } from '@zxing/library';

interface ScannerComponentProps {
	setBarcode: (barcode: string) => void;
}

export const ScannerComponent = ({ setBarcode }: ScannerComponentProps) => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const codeReader = useRef<BrowserMultiFormatReader | null>(null);
	const [error, setError] = useState<any | null>(null);

	useEffect(() => {
		const current = videoRef.current;
		codeReader.current = new BrowserMultiFormatReader();

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
							if (result) {
								setBarcode(result.getText());
							}
							if (err) {
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
				</div>
			) : (
				<video ref={videoRef} className="w-full" muted playsInline />
			)}
		</div>
	);
};
