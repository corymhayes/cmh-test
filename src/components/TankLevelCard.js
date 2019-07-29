import React, {Component} from 'react'
import arrowdown from '../arrow-down-bold.png'

import '../App.css';
import '../Mobile.css';

export default class LocationDetails extends Component{
  render(){
    return(
      <div className="tank-level-card-frame">
        <div className="title">
          Water Flow Meter
        </div>
        <div className="measure">
          <div className="amount">11,946</div>
          <img src={arrowdown} />
          <div className="changes">13.8%</div>
        </div>
        <div className="graph">
          THIS IS GRAPH
        </div>
      </div>
    )
  }
}
