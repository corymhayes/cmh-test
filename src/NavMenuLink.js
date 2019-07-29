import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'

import './App.css';

export default class NavMenuLink extends Component{
  render(){
    return(
      <div>
        <NavLink className="nav-link" to="/locations">{this.props.linkText}</NavLink>
      </div>
    )
  }
}

