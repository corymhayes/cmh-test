import React, {Component} from 'react'
import TankLevelCard from './TankLevelCard'
import BigGraph from './BigGraph'
import PumperLog from './PumperLog'
import {withRouter} from 'react-router-dom'

import '../App.css';
import '../Mobile.css';

class Eagle extends Component{
  render(){
    return(
      <div className="main-content">
        <h1>Eagle SWD</h1>
        <h2>Tank Levels</h2>

        <div className="tank-levels">
          <TankLevelCard />
          <TankLevelCard />
          <TankLevelCard />
        </div>

        <h2>Oil Volumes</h2>
        <BigGraph />

        <PumperLog />

      </div>
    )
  }
}

export default withRouter(Eagle)