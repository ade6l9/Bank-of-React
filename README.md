# Bank of React

This project is a **single-page banking application** built with **React** that demonstrates the use of **client-side routing** using **React Router**. The application allows users to view and manage their account balance, add credits and debits, and navigate between different pages in the app seamlessly.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [API Endpoints](#api-endpoints)
- [Future Improvements](#future-improvements)

---

## Features

- **Home Page**: Displays the account balance and links to other pages.
- **User Profile**: Shows the user's profile information including their name and membership date.
- **Login**: Allows users to input their username to simulate a login and redirects to the User Profile.
- **Credits**: Users can add credits with a description and amount. Credits are saved, and the balance updates accordingly.
- **Debits**: Users can add debits with a description and amount. Debits are saved, and the balance updates accordingly.
- **Persistent Data**: Credit and debit entries, as well as the updated account balance, persist across page navigations.

---

## Project Structure

```plaintext
src
│
├── components
│   ├── Home.js          # Home page component
│   ├── UserProfile.js   # User Profile page component
│   ├── LogIn.js         # Login page component
│   ├── Credits.js       # Credits page component
│   ├── Debits.js        # Debits page component
│   └── AccountBalance.js # Displays the account balance on various pages
│
├── App.js               # Main application component, handles routing and state
└── index.js             # Entry point for React application
