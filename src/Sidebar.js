import React, {Component} from 'react'
import NavMenu from './NavMenu'

import './App.css';

export default class Sidebar extends Component{
  render(){
    return(
      <div className="sidebar">
        <NavMenu />
      </div>
    )
  }
}

