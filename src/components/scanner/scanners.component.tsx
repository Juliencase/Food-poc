import { useState } from 'react';
import BarcodeScanner from 'react-qr-barcode-scanner';

function App() {
	const [data, setData] = useState('Not Found');

	return (
		<>
			<BarcodeScanner
				width={500}
				height={500}
				onUpdate={(err, result) => {
					if (result) setData(result.getText());
					else setData('Not Found');
				}}
			/>
			<p>{data}</p>
		</>
	);
}

export default App;
