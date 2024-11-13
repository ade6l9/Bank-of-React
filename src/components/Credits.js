/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
// src/components/Credits.js

import React, { useState } from 'react';

const Credits = ({ credits, addCredit, accountBalance }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return; // Basic validation
    addCredit(description, parseFloat(amount));
    setDescription('');
    setAmount('');
  };

  // Inline style objects
  const containerStyle = {
    textAlign: 'center',
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#ffffff',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  };

  const formStyle = {
    marginBottom: '20px',
  };

  const inputStyle = {
    marginRight: '10px',
    padding: '5px',
    borderRadius: '5px',
    border: '1px solid #ddd',
  };

  const buttonStyle = {
    padding: '5px 10px',
    borderRadius: '5px',
    backgroundColor: '#0073e6',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  };

  const creditItemStyle = {
    marginBottom: '10px',
    fontSize: '1em',
    color: '#333',
  };

  const balanceStyle = {
    fontSize: '1.5em',
    fontWeight: 'bold',
    color: '#28a745',
    marginBottom: '20px',
  };

  const linkStyle = {
    color: '#0073e6',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      <h1>Credits</h1>
      <div style={balanceStyle}>Account Balance: ${accountBalance.toFixed(2)}</div>
      
      <form onSubmit={handleSubmit} style={formStyle}>
        <input 
          type="text" 
          placeholder="Description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          style={inputStyle}
        />
        <input 
          type="number" 
          placeholder="Amount" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Add Credit</button>
      </form>
      
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {credits.map((credit, index) => (
          <li key={index} style={creditItemStyle}>
            <strong>{credit.description}</strong> - ${credit.amount.toFixed(2)} <br />
            Date: {credit.date}
          </li>
        ))}
      </ul>
      
      <a href="/" style={linkStyle}>Return to Home</a>
    </div>
  );
};

export default Credits;
