import React, {Component} from 'react'

import './App.css';

export default class LogoSidebar extends Component{
  render(){
    return(
      <div className="logo">
        <img src={this.props.logoImage} alt="company logo" />
      </div>
    )
  }
}

