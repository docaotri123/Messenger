import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

import Header from './components/Header'


firebase.initializeApp({
  apiKey: "AIzaSyAY1dTpsBuGa_WCd0WvqxlDDznhfbpj-mw",
  authDomain: "message-a627a.firebaseapp.com"
})

class App extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }


  render() {
    return (
      <div className="App">
        {
          this.state.isSignedIn ? 
          <div className="container-fluid">
            <Header></Header>
          </div> :
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        }
      </div>
    );
  }
}

export default App;
