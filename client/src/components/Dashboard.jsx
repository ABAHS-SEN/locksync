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
    <div className='text-4xl flex flex-col gap-4 '>
      <h1>Dashboard</h1>
      <h2>Logged in as: {userEmail}</h2>
      <h3>Users account:</h3>
      <ul>
        {sharedAccounts.map((account, index) => (
          <li key={index}>{account}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;