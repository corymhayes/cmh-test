import React, {Component} from 'react'

import './App.css';
import downArrow from './chevron-down.png'

export default class AccountMenuDropdown extends Component{
  constructor(props){
    super(props)
    this.state = {
      dropdownClick: false
    }

    this.accountMenuDropdown = this.accountMenuDropdown.bind(this);
  }

  accountMenuDropdown(){
    this.setState({dropdownClick: !this.state.dropdownClick})
  }
  
  render(){
    return(
      <div>
      {
        !this.state.dropdownClick ?
          <div className="dropdownIcon" onMouseEnter={this.accountMenuDropdown}><img src={downArrow} alt="down arrow"/></div> :
          <div className="dropdownIcon" onMouseLeave={this.accountMenuDropdown}><img src={downArrow} alt="down arrow"/>
            <div className="menu-dropdown">
              <a href="#">Link</a>
              <a href="#">Dashboard</a>
            </div>
          </div>
      }
      </div>
    )
  }
}

