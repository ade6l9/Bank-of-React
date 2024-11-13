# Bank of React

This project is a **simple banking application** built with **React** that demonstrates the use of **client-side routing** using **React Router**. The application allows users to view and manage their account balance, add credits and debits, and navigate between different pages in the app seamlessly.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Deployment](#deployment)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [API Endpoints](#api-endpoints)
- [Future Improvements](#future-improvements)
- [Github Pages](#github-pages)
- [Contributor](#contributor)

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
```
---
## Installation

To run this project locally, follow these steps:

1. Clone the Repository:
    ```bash
   git clone https://github.com/your-username/bank-of-react.git

2. Navigate to the Project Directory:
    ```bash
    cd bank-of-react

3. Install Dependencies:
    ```bash
    npm install
4. Start the Application:
    ```bash
    npm start

The app will be available at http://localhost:3000 in your browser.

---
## Deployment

This project is deployed on GitHub Pages. To deploy your own version, follow these steps:
1. Rub the build command:
    ```bash
    npm run build
2. Deploy the build folder to Github Pages:
    ```bash
    npm run deploy

After deploying, your application will be available at https://your-username.github.io/bank-of-react.
---
## Usage

1. Home Page: Displays the account balance. From here, you can navigate to the User Profile, Credits, or Debits page.
2. User Profile: Shows the logged-in user's information.
3. Login: Enter your username, which updates the user profile. On successful login, you'll be redirected to the User Profile page.
4. Credits: Add a credit with a description and amount. The credit will be saved, and the balance updates accordingly. The added credits remain visible when returning to the Credits page.
5. Debits: Add a debit with a description and amount. The debit will be saved, and the balance updates accordingly. The added debits remain visible when returning to the Debits page.

---
## Technologies Used

- JavaScript: Core language for building the application's functionality.
- React: Front-end library for building user interfaces.
- React Router: Library for handling client-side routing.
- CSS: Custom styling for components, with responsive and modern design elements.

--- 
## API Endpoints

The application uses the following external API endpoints to fetch initial credit and debit data:

- Credits Endpoint: https://johnnylaicode.github.io/api/credits.json
- Debits Endpoint: https://johnnylaicode.github.io/api/debits.json
Data from these endpoints is fetched upon loading the app, and the values are integrated into the account balance calculation.

---
## Future Improvements

- Data Persistence: Implement a backend database to store credits, debits, and user information persistently.
- Authentication: Add a proper authentication system to handle user logins securely.
- Advanced Styling: Enhance styling further with animations and better layout for improved user experience.

---
## Github Pages


---
## Contributor
Adelina Dautovic <br>
Github: ade6l9
