/*==================================================
src/components/UserProfile.js

The UserProfile component is used to demonstrate the use of Route and Link.
Note: You don't need to work on this file for the Assignment.
==================================================*/
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class UserProfile extends Component {
  render() {
    // Main container style with a centered layout
    const containerStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #f4f6f8, #e8eaed)',
      fontFamily: "'Playfair Display', serif",
      padding: '20px',
    };

    // Profile card style with shadow and padding for a professional look
    const profileCardStyle = {
      width: '100%',
      maxWidth: '400px',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.15)',
      padding: '30px',
      textAlign: 'center',
    };

    const headingStyle = {
      fontSize: '2em',
      color: '#333333',
      marginBottom: '20px',
    };

    // Styling for user details to separate sections
    const infoContainerStyle = {
      marginBottom: '20px',
      padding: '15px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
    };

    const labelStyle = {
      fontWeight: 'bold',
      color: '#6c63ff',  // Purple accent color for labels
      fontSize: '1.1em',
    };

    const textStyle = {
      fontSize: '1.1em',
      color: '#333',
      margin: '8px 0',
    };

    // Link style to resemble a button
    const linkStyle = {
      display: 'inline-block',
      color: '#ffffff',
      backgroundColor: '#0073e6',
      textDecoration: 'none',
      fontWeight: '600',
      fontSize: '1.1em',
      padding: '10px 20px',
      borderRadius: '8px',
      marginTop: '20px',
      transition: 'background-color 0.3s ease',
    };

    return (
      <div style={containerStyle}>
        <div style={profileCardStyle}>
          <h1 style={headingStyle}>User Profile</h1>

          <div style={infoContainerStyle}>
            <p style={labelStyle}>Username</p>
            <p style={textStyle}>{this.props.userName}</p>
          </div>

          <div style={infoContainerStyle}>
            <p style={labelStyle}>Member Since</p>
            <p style={textStyle}>{this.props.memberSince}</p>
          </div>

          <Link to="/" style={linkStyle}>Return to Home</Link>
        </div>
      </div>
    );
  }
}

export default UserProfile;
