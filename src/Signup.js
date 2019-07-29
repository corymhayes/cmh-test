import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './App.css';
import './Mobile.css';

import logo from './logo-web.png'

export default class Signup extends Component {

  constructor(props){
    super(props)
    this.state = {
      password: "",
      confirmPassword: "",
      passwordsMatch: true
    }

    this.passwordInput = this.passwordInput.bind(this);
    this.confirmInput = this.confirmInput.bind(this);
    this.passwordCompare = this.passwordCompare.bind(this);
  }
  
  passwordInput(e){
    this.setState({password: e.target.value});
  }

  confirmInput(e){
    this.setState({confirmPassword: e.target.value})
  }

  passwordCompare(){
    if(this.state.password === this.state.confirmPassword){
      return true
    } else {
      return false
    }
  }

  
  render() {
    return (  
      <div className="signup-container">
        <div className="signup-frame">
          <img src={logo} alt="company logo"/>
          <p className="signup-welcome-tag">Welcome, please sign up for you account.</p>
          <div className="names">
            <input 
              className="firstname-input" 
              placeholder="first name" 
            />
            <input 
              className="lastname-input" 
              placeholder="last name" 
            />
          </div>
          <input type="email" className="email-input" placeholder="email" />
          <input 
            type="password"
            className="signup-password-input"
            placeholder="password"
            onChange={ this.passwordInput } 
          />
          <input 
            type="password"
            className="confirmpass-input"
            placeholder="confirm password"
            onChange={ this.confirmInput }
          />
          {
            this.state.passwordsMatch ?
              <div className="confirmpass-confirm"></div> :
              <div className="confirmpass-error">Passwords do not match</div>
          }
          <button 
            className="signup-signup-button" 
            onClick={
              () => this.passwordCompare() ? 
                 this.setState({passwordsMatch: true}): 
                 this.setState({passwordsMatch: false})
            }
          >Sign up</button>
          <p className="sign-in-link">Already have an account? <Link to="/login">Sign in</Link></p>
        </div>
      </div>
    );
  }
}
