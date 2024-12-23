export interface User {
  id: string;
  name: string;
  email: string;
  referralCode: string;
  totalDonations: number;
}

export interface Transaction {
  id: string;
  donorName: string;
  amount: number;
  date: string;
  referralCode: string;
}