import React from 'react';
import HomePage from './HomePage';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

export default class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      userLoggedIn: false,
      isRegister: false
    }
  }

  setIsRegister = (value) => {
    this.setState({
      isRegister: value
    })
  }

  setUserLoggedIn = (value) => {
    this.setState({
      userLoggedIn: value
    })
  }

 render() {
   const { userLoggedIn, isRegister } = this.state
   return (
     <>
      <p> Home </p>
      { 
        userLoggedIn ? <HomePage/> : (isRegister ? <RegisterForm setIsRegister={this.setIsRegister}/> : <LoginForm setIsRegister={this.setIsRegister} setUserLoggedIn={this.setUserLoggedIn}/>)}
     </>
   )
 }
}