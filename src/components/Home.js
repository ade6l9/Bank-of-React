/*==================================================
src/components/Home.js

The Home component is used to demonstrate the use of Link.
==================================================*/
import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

const Home = ({ accountBalance }) => {
  // Styling for the main container with a gradient background
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #e0e5ec, #f4f6f8)',
    fontFamily: "'Playfair Display', serif",
    padding: '20px',
  };

  // Dashboard box styling with a light shadow and padding
  const dashboardStyle = {
    maxWidth: '500px',
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
    padding: '30px',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '2.2em',
    color: '#333333',
    marginBottom: '20px',
  };

  // Adding a contrasting section for the balance display
  const balanceContainerStyle = {
    marginBottom: '30px',
    padding: '20px',
    backgroundColor: '#eceff1', // Light gray background for contrast
    borderRadius: '10px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
  };

  const balanceTextStyle = {
    fontSize: '1.5em',
    color: '#333',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const amountStyle = {
    fontSize: '2.5em',
    color: '#4CAF50', // Green color for the balance amount
    fontWeight: 'bold',
  };

  // Styling links as buttons for a modern dashboard look
  const navLinksStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  };

  const linkStyle = {
    color: '#ffffff',
    backgroundColor: '#0073e6',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '1.1em',
    padding: '10px 0',
    borderRadius: '8px',
    textAlign: 'center',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div style={containerStyle}>
      <div style={dashboardStyle}>
        <h1 style={headingStyle}>Welcome to Your Bank Account</h1>

        <div style={balanceContainerStyle}>
          <p style={balanceTextStyle}>Current Account Balance</p>
          <p style={amountStyle}>${accountBalance.toFixed(2)}</p>
        </div>

        <div style={navLinksStyle}>
          <Link to="/userProfile" style={linkStyle}>View Profile</Link>
          <Link to="/login" style={linkStyle}>Login</Link>
          <Link to="/credits" style={linkStyle}>Credits</Link>
          <Link to="/debits" style={linkStyle}>Debits</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
