import React, {Component} from 'react'
import './App.css';

export default class Avatar extends Component{
  render(){
    return(
      <div>
        <img src={this.props.avatarImage} className="avatar" alt="avatar" />
      </div>
    )
  }
}

