/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Credits = ({ credits, addCredit, accountBalance }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && amount) {
      addCredit(description, amount);
      setDescription('');
      setAmount('');
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  const containerStyle = {
    maxWidth: '700px',
    margin: '20px auto',
    padding: '20px',
    background: 'linear-gradient(135deg, #f0f2f5, #e8eaed)',
    borderRadius: '12px',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
    fontFamily: "'Arial', sans-serif",
  };

  const headingStyle = {
    fontSize: '2em',
    color: '#333',
    marginBottom: '20px',
    textAlign: 'center',
  };

  const balanceStyle = {
    fontSize: '1.2em',
    fontWeight: 'bold',
    color: '#4CAF50',
    textAlign: 'center',
    marginBottom: '20px',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginBottom: '30px',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
    maxWidth: '500px',  // Reduce the width of the form
    margin: '0 auto',   // Center the form
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '1em',
    borderRadius: '6px',
    border: '1px solid #ddd',
  };

  const buttonStyle = {
    padding: '12px',
    fontSize: '1em',
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#0073e6',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  };

  const listStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  };

  const cardStyle = {
    padding: '15px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const descriptionStyle = {
    fontWeight: 'bold',
    fontSize: '1.1em',
    flex: '1',
    textAlign: 'left',  // Align descriptions to the left
  };

  const amountStyle = {
    color: '#0073e6',
    fontWeight: 'bold',
    fontSize: '1.1em',
    marginRight: '15px',
  };

  const dateStyle = {
    color: '#666',
    fontSize: '0.9em',
  };

  const linkStyle = {
    color: '#0073e6',
    textDecoration: 'none',
    fontWeight: '600',
    display: 'block',
    textAlign: 'center',
    marginTop: '20px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Credits</h1>
      <p style={balanceStyle}>Account Balance: ${accountBalance.toFixed(2)}</p>

      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={inputStyle}
          required
        />
        <button type="submit" style={buttonStyle}>Add Credit</button>
      </form>

      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Credits List</h2>
      <div style={listStyle}>
        {credits.map((credit, index) => (
          <div key={index} style={cardStyle}>
            <span style={descriptionStyle}>{credit.description}</span>
            <span style={amountStyle}>${credit.amount.toFixed(2)}</span>
            <span style={dateStyle}>{formatDate(credit.date)}</span>
          </div>
        ))}
      </div>

      <Link to="/" style={linkStyle}>Return to Home</Link>
    </div>
  );
};

export default Credits;
