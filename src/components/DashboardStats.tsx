import React from 'react';
import { Share2, Copy, Share } from 'lucide-react';
import toast from 'react-hot-toast';

interface DashboardStatsProps {
  totalDonations: number;
  referralCode: string;
}

const DashboardStats: React.FC<DashboardStatsProps> = ({
  totalDonations,
  referralCode,
}) => {
  const donationLink = `${window.location.origin}/donate/${referralCode}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(donationLink);
    toast.success('Donation link copied to clipboard!');
  };

  const shareOnWhatsApp = () => {
    const message = `Hi, I am raising funds for NayePankh Foundation. Please support me by donating through this link ${donationLink} and make a difference!`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-medium text-gray-900">Goal Achieved</h3>
        <p className="mt-2 text-3xl font-bold text-indigo-600">
          ₹{totalDonations.toLocaleString()}
        </p>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-medium text-gray-900">Your Referral Code</h3>
        <p className="mt-2 text-2xl font-mono text-indigo-600">{referralCode}</p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={copyToClipboard}
          className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Copy className="w-5 h-5 mr-2" />
          Copy Donation Link
        </button>
        <button
          onClick={shareOnWhatsApp}
          className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          <Share2 className="w-5 h-5 mr-2" />
          Share on WhatsApp
        </button>
      </div>
    </div>
  );
};

export default DashboardStats;