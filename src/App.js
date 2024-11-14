/*==================================================
src/App.js

This is the top-level component of the app.
It contains the top-level state.
==================================================*/
import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Import other components
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Credits from './components/Credits';
import Debits from './components/Debits';

class App extends Component {
  constructor() {
    super();
    this.state = {
      accountBalance: 1234567.89,
      credits: [],    
      debits: [],     
      currentUser: {
        userName: 'Joe Smith',
        memberSince: '11/22/99',
      }
    };
  }

  async componentDidMount() {
    try {
      const creditsResponse = await fetch('https://johnnylaicode.github.io/api/credits.json');
      const credits = await creditsResponse.json();
      const debitsResponse = await fetch('https://johnnylaicode.github.io/api/debits.json');
      const debits = await debitsResponse.json();   
      
      const accountBalance = this.calculateBalance(credits, debits);
      
      this.setState({ credits, debits, accountBalance });
    } catch (error) {
      console.error("Error fetching data", error);
    }
  }

  calculateBalance = (credits, debits) => {
    const totalCredits = credits.reduce((sum, credit) => sum + credit.amount, 0);
    const totalDebits = debits.reduce((sum, debit) => sum + debit.amount, 0);
    return parseFloat((totalCredits - totalDebits).toFixed(2));
  }

  addCredit = (description, amount) => {
    const newCredit = {
      description,
      amount: parseFloat(amount),
      date: new Date().toISOString().split('T')[0],
    };

    this.setState((prevState) => {
      const updatedCredits = [...prevState.credits, newCredit];
      const updatedBalance = prevState.accountBalance + newCredit.amount;
      return { credits: updatedCredits, accountBalance: updatedBalance };
    });
  }; 

  addDebit = (description, amount) => {
    const newDebit = {
      description,
      amount: parseFloat(amount),
      date: new Date().toISOString().split('T')[0]
    };
    
    this.setState(prevState => {
      const updatedDebits = [...prevState.debits, newDebit];
      return {
        debits: updatedDebits,
        accountBalance: this.calculateBalance(prevState.credits, updatedDebits)
      };
    });
  };  

  mockLogIn = (logInInfo) => {  
    const newUser = {...this.state.currentUser};
    newUser.userName = logInInfo.userName;
    this.setState({currentUser: newUser})
  }

  render() {
    return (
      <Router basename="/bank-of-react">
        <div>
          <Route exact path="/" render={() => <Home accountBalance={this.state.accountBalance} />} />
          <Route exact path="/userProfile" render={() => (
            <UserProfile 
              userName={this.state.currentUser.userName} 
              memberSince={this.state.currentUser.memberSince} 
            />
          )} />
          <Route exact path="/login" render={() => (
            <LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />
          )} />
          <Route exact path="/credits" render={() => (
            <Credits 
              credits={this.state.credits}  
              addCredit={this.addCredit} 
              accountBalance={this.state.accountBalance} 
            />
          )} />
          <Route exact path="/debits" render={() => (
            <Debits 
              debits={this.state.debits}  
              addDebit={this.addDebit} 
              accountBalance={this.state.accountBalance} 
            />
          )} />
        </div>
      </Router>
    );
  }
  
}

export default App;
