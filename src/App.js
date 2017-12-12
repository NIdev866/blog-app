import React, { Component } from 'react';
import './App.css';
import Signin from './components/signin'
import Homepage from './components/homepage'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      usernameEntered: null,
      allUsers: null
    }
  }
  getAllUsers(allUsers){
    this.setState({allUsers})
  }
  render() {
    if(localStorage.getItem("loggedIn")){
      return(
        <Homepage 
          allUsers={this.state.allUsers}
        />        
      )
    }
    else{
      return (
        <Signin 
          getAllUsers={this.getAllUsers.bind(this)}
          allUsers={this.state.allUsers}
        />
      )
    }
  }
}

export default App;
