import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Receipt } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-white border-r border-gray-200 fixed left-0 top-0">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-indigo-600">NayePankh</h2>
      </div>
      <nav className="mt-6">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center px-6 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 ${
              isActive ? 'bg-indigo-50 text-indigo-600' : ''
            }`
          }
        >
          <LayoutDashboard className="w-5 h-5 mr-3" />
          Dashboard
        </NavLink>
        <NavLink
          to="/transactions"
          className={({ isActive }) =>
            `flex items-center px-6 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 ${
              isActive ? 'bg-indigo-50 text-indigo-600' : ''
            }`
          }
        >
          <Receipt className="w-5 h-5 mr-3" />
          Transactions
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;