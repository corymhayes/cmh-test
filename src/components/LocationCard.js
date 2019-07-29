import React, { Component } from "react";
import '../styles/CardStyles.css'
import sitepicture from '../site-location-picture.png'
import arrowdown from '../arrow-down-bold.png'
import { Link, withRouter } from 'react-router-dom'

class LocationCard extends Component {
  render() {
    return (
      <div className="card-body">
        <div className="card-body-img"><img src={sitepicture} alt="Site Location"/></div>

        <div className="card-info">
        <Link to="/locations/eagle"><div className="title">Eagle SWD</div></Link>
          <div className="location">US-87 Sterling City, TX</div>

          <div className="water-flow-meter">
            <div className="title">
              Water Flow Meter <span>(bbs/day)</span>
            </div>
            <div className="measure">
              <div className="amount">11,946</div>
              <img src={arrowdown} />
              <div className="changes">13.8%</div>
            </div>
          </div>

          <div className="status">
            <div className="header">Status</div>
            <ul>
              <li className="col-1 row-1"><div className="on" />T-Pump</li>
              <li className="col-1 row-2"><div className="off" />Low Pump Level</li>
              <li className="col-2 row-1"><div className="on" />High Pump Level</li>
              <li className="col-2 row-2"><div className="off" />Pump Vibration</li>
            </ul>
          </div>
        </div>

        {/* <div className="card-actions">
          <div>edit</div>
        </div> */}
      </div>
    );
  }
}

export default withRouter(LocationCard)