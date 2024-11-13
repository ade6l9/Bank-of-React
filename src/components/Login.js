/*==================================================
src/components/Login.js

The LogIn component is used to demonstrate the use of Redirect.
Note: You don't need to work on this file for the Assignment.
==================================================*/
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {Link} from 'react-router-dom';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        userName: this.props.user.userName,
        password: ''
      },
      redirect: false
    };
  }

  handleChange = (e) => {
    const updatedUser = { ...this.state.user };
    updatedUser.userName = e.target.value;
    this.setState({ user: updatedUser });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.mockLogIn(this.state.user);
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/userProfile" />;
    }

    // Inline styles for a polished login form
    const containerStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #f0f2f5, #e8eaed)',
      fontFamily: "'Arial', sans-serif",
      padding: '20px',
    };

    const formStyle = {
      width: '100%',
      maxWidth: '400px',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
      padding: '30px',
      textAlign: 'center',
    };

    const headingStyle = {
      fontSize: '2em',
      color: '#333333',
      marginBottom: '20px',
    };

    const inputContainerStyle = {
      marginBottom: '15px',
      textAlign: 'left',
    };

    const labelStyle = {
      fontWeight: 'bold',
      color: '#555',
      display: 'block',
      marginBottom: '5px',
    };

    const inputStyle = {
      width: '100%',
      padding: '10px',
      fontSize: '1em',
      borderRadius: '6px',
      border: '1px solid #ddd',
      boxSizing: 'border-box',
      outline: 'none',
    };

    const buttonStyle = {
      width: '100%',
      padding: '12px',
      fontSize: '1.1em',
      fontWeight: 'bold',
      color: '#ffffff',
      backgroundColor: '#0073e6',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      marginTop: '20px',
      transition: 'background-color 0.3s ease',
    };

    const linkStyle = {
      color: '#0073e6',
      textDecoration: 'none',
      fontSize: '1em',
      marginTop: '15px',
      display: 'inline-block',
    };

    return (
      <div style={containerStyle}>
        <form onSubmit={this.handleSubmit} style={formStyle}>
          <h1 style={headingStyle}>Login</h1>
          
          <div style={inputContainerStyle}>
            <label style={labelStyle}>User Name</label>
            <input
              type="text"
              name="userName"
              defaultValue={this.props.user.userName}
              onChange={this.handleChange}
              style={inputStyle}
            />
          </div>
          
          <div style={inputContainerStyle}>
            <label style={labelStyle}>Password</label>
            <input
              type="password"
              name="password"
              style={inputStyle}
            />
          </div>
          
          <button style={buttonStyle}>Log In</button>
          
          <Link to="/" style={linkStyle}>Return to Home</Link>
        </form>
      </div>
    );
  }
}

export default LogIn;
