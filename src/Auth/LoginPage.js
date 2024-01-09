// src/components/LoginPage.js
import React from 'react';
import LoginForm from './LoginForm';

const LoginPage = ({ onLogin }) => {
  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm onLogin={onLogin} />
    </div>
  );
};

export default LoginPage;
