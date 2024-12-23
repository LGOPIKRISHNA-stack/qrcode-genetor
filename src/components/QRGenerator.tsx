import React, { useState, useRef } from 'react';
import QRCode from 'qrcode.react';
import { Download } from 'lucide-react';

const QRGenerator = () => {
  const [text, setText] = useState('');
  const qrRef = useRef<HTMLDivElement>(null);

  const downloadQRCode = () => {
    if (!qrRef.current) return;
    
    const canvas = qrRef.current.querySelector('canvas');
    if (!canvas) return;

    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = image;
    link.download = 'qrcode.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Generate QR Code</h2>
      <div className="space-y-4">
        <div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text or URL"
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        {text && (
          <div className="flex flex-col items-center space-y-4">
            <div ref={qrRef} className="p-4 bg-white rounded-lg">
              <QRCode value={text} size={200} level="H" />
            </div>
            
            <button
              onClick={downloadQRCode}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              <Download className="w-5 h-5 mr-2" />
              Download QR Code
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QRGenerator;