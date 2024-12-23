import React, { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { ScanLine } from 'lucide-react';

const QRScanner = () => {
  const [scanResult, setScanResult] = useState<string>('');
  const [fileInput, setFileInput] = useState<HTMLInputElement | null>(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    }, false);

    scanner.render(onScanSuccess, onScanError);

    setFileInput(document.querySelector('#qr-input-file'));

    return () => {
      scanner.clear();
    };
  }, []);

  const onScanSuccess = (decodedText: string) => {
    setScanResult(decodedText);
  };

  const onScanError = (error: any) => {
    console.warn(error);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const html5QrcodeScanner = new Html5QrcodeScanner('reader', { fps: 5 }, false);
      html5QrcodeScanner.scanFile(file, true)
        .then(decodedText => {
          setScanResult(decodedText);
        })
        .catch(err => {
          console.error('Error scanning file:', err);
        });
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Scan QR Code</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload QR Code Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
          />
        </div>

        <div className="border-t pt-6">
          <div className="flex items-center space-x-2 mb-4">
            <ScanLine className="w-5 h-5 text-blue-600" />
            <span className="font-medium">Or scan using camera</span>
          </div>
          <div id="reader" className="w-full"></div>
        </div>

        {scanResult && (
          <div className="mt-4 p-4 bg-gray-50 rounded-md">
            <h3 className="text-lg font-medium mb-2">Scan Result:</h3>
            <p className="text-gray-800 break-all">{scanResult}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QRScanner;