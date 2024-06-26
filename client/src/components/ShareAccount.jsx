import React, { useState } from 'react';
import axios from 'axios';

const ShareAccount = () => {
  const [formData, setFormData] = useState({
    email: '',
    account: ''
  });

  const { email, account } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/api/users/share`, formData, { withCredentials: true });
      alert('Account shared successfully');
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="email" name="email" value={email} onChange={onChange} placeholder="Email of user to share with" required />
      <input type="text" name="account" value={account} onChange={onChange} placeholder="Account to share" required />
      <button type="submit">Share Account</button>
    </form>
  );
};

export default ShareAccount;
