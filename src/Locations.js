import React, {Component} from 'react'
import LocationCard from './components/LocationCard'

import './App.css';
import './Mobile.css';

export default class Locations extends Component{
  render(){
    return(
      <div className="main-content">
        <h1>Sites</h1>
        <div className="locations">
          <LocationCard />
          <LocationCard />
          <LocationCard />
        </div>
      </div>
    )
  }
}

