import React, {Component} from 'react'

import './App.css';
import './Mobile.css';

import hamburger from './menu.png'

export default class MobileMenu extends Component{
  constructor(props){
    super(props)
    this.state = {
      menuClick: false
    }

    this.menuSidebar = this.menuSidebar.bind(this);
  }

  menuSidebar(){
    this.setState({menuClick: !this.state.menuClick})
  }
  
  render(){
    return(
      <div>
      {
        !this.state.menuClick ?
          <div className="menu-icon" onClick={this.menuSidebar}><img src={hamburger} alt="hamburger menu"/></div> :
          <div className="menu-icon" onClick={this.menuSidebar}><img src={hamburger} alt="hamburger menu"/>
            <div class="mobile-menu-frame">
              <ul>
                <li><a className="mobile-menu-link" href="#">Home</a></li>
                <li><a className="mobile-menu-link" href="#">Dashboard</a></li>
                <li><a className="mobile-menu-link" href="#">Sites</a></li>
              </ul>
            </div>
          </div>
      }
      </div>
    )
  }
}

