/*==================================================
src/components/Debits.js

The Debits component contains information for Debits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Debits = ({ debits, addDebit, accountBalance }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && amount) {
      addDebit(description, amount);
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
    color: '#d9534f', // Red color to indicate debits
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
    maxWidth: '500px',
    margin: '0 auto',
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
    backgroundColor: '#d9534f', // Red button for debit
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
    textAlign: 'left',
  };

  const amountStyle = {
    color: '#d9534f',
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
      <h1 style={headingStyle}>Debits</h1>
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
        <button type="submit" style={buttonStyle}>Add Debit</button>
      </form>

      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Debits List</h2>
      <div style={listStyle}>
        {debits.map((debit, index) => (
          <div key={index} style={cardStyle}>
            <span style={descriptionStyle}>{debit.description}</span>
            <span style={amountStyle}>${debit.amount.toFixed(2)}</span>
            <span style={dateStyle}>{formatDate(debit.date)}</span>
          </div>
        ))}
      </div>

      <Link to="/" style={linkStyle}>Return to Home</Link>
    </div>
  );
};

export default Debits;
