// src/components/AuthenticatedPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import LoginPage from './LoginPage';
import Tg from '../TG/Tg';

const TA = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleLogin = (username) => {
    setUser(username);
    // Redirect to '/tollplaza' after successful login
    navigate('/tollplaza');
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user}!</h1>
          <button onClick={handleLogout}>Logout</button>
          <Tg />
        </div>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
};

export default TA;
