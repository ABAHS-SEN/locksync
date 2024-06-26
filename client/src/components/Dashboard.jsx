import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [sharedAccounts, setSharedAccounts] = useState([]);

  useEffect(() => {
    const fetchSharedAccounts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users/shared', { withCredentials: true });
        setSharedAccounts(response.data.sharedAccounts);
      } catch (error) {
        console.error(error.response.data);
      }
    };

    fetchSharedAccounts();
  }, []);

  const revokeAccess = async (account) => {
    try {
      await axios.post('http://localhost:5000/api/users/revoke', { account }, { withCredentials: true });
      setSharedAccounts(sharedAccounts.filter(acc => acc !== account));
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Shared Accounts</h2>
      <ul>
        {sharedAccounts.map(account => (
          <li key={account}>
            {account}
            <button onClick={() => revokeAccess(account)}>Revoke Access</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
