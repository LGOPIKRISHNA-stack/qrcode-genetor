import React from 'react';
import DashboardStats from '../components/DashboardStats';

// Mock user data - replace with actual API call
const user = {
  name: 'John Doe',
  referralCode: 'NPF123',
  totalDonations: 25000
};

const Dashboard = () => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {user.name}!
        </h1>
        <p className="mt-2 text-gray-600">
          Track your fundraising progress and share your campaign
        </p>
      </div>

      <DashboardStats
        totalDonations={user.totalDonations}
        referralCode={user.referralCode}
      />
    </div>
  );
};

export default Dashboard;