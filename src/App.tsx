import React from 'react';
import QRGenerator from './components/QRGenerator';
import QRScanner from './components/QRScanner';
import { QrCode } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <QrCode className="w-12 h-12 text-blue-600 mx-auto" />
          <h1 className="mt-4 text-3xl font-bold text-gray-900">
            QR Code Generator & Scanner
          </h1>
          <p className="mt-2 text-gray-600">
            Generate QR codes or scan existing ones
          </p>
        </div>

        <div className="space-y-8">
          <QRGenerator />
          <QRScanner />
        </div>
      </div>
    </div>
  );
}

export default App;