import React, {Component} from 'react'
import Avatar from './Avatar'
import MobileMenu from './MobileMenu'
import MenuDropdown from './AccountMenuDropdown'

import './App.css';

export default class UserBar extends Component{
  render(){
    return(
      <div className="user-bar">
        <MobileMenu />
        <Avatar avatarImage="https://randomuser.me/api/portraits/men/3.jpg" />
        <MenuDropdown />
        <div className="username">Mike Henderson</div>
      </div>
    )
  }
}

