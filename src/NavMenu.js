import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import './App.css';

export default class NavMenu extends Component{
  render(){
    return(
      <nav className="nav-menu">
        <NavLink className="nav-link" to="/">Home</NavLink>
        <NavLink className="nav-link" to="/location">Sites</NavLink>
      </nav>
    )
  }
}

