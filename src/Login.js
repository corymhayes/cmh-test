import React, { Component } from 'react';

import './App.css';
import './Mobile.css';

import logo from './logo-web.png'

export default class Login extends Component {
  render() {
    return (
      
      <div className="login-container">
        <div className="login-frame">
          <img src={logo} alt="company logo"/>
          <p className="welcome-tag">Welcome back, please login to you account</p>
          <input className="username-input" placeholder="username" />
          <input type="password" className="password-input" placeholder="password" />
          <div className="login-options">
            <div className="remember-check">
              <input type="checkbox" /><label>Remember me</label>
            </div>
            <a href="#">Forgot password?</a>
          </div>
          <div className="login-buttons">
            <button className="login-button">Login</button>
            <button className="signup-button">Sign up</button>
          </div>
        </div>
      </div>
    );
  }
}
