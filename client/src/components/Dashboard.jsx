// components/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [userEmail, setUserEmail] = useState('');
  const [sharedAccounts, setSharedAccounts] = useState([]);

  useEffect(() => {
    const fetchSharedAccounts = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/users/shared`, { withCredentials: true });
        setUserEmail(res.data.user);
        setSharedAccounts(res.data.sharedAccounts);
      } catch (error) {
        console.error(error.response.data);
      }
    };

    fetchSharedAccounts();
  }, []);

  return (
    <div className="bg-slate-900 py-16 text-white px-8 min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        
        {/* Dashboard Header */}
        <h1 className="text-5xl font-bold mb-8">Dashboard</h1>
        
        {/* User Email Display */}
        <div className="text-2xl mb-6">
          <span className="font-semibold">Logged in as:</span> {userEmail}
        </div>
        
        {/* Shared Accounts Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Users' Account</h2>
          <ul className="list-disc pl-6">
            {sharedAccounts.length > 0 ? (
              sharedAccounts.map((account, index) => (
                <li key={index} className="text-xl mb-2">{account}</li>
              ))
            ) : (
              <li className="text-xl">No shared accounts available</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
