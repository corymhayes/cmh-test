import React, { Component } from 'react';
import firebase from './firebase.js'
// import TankLevel from './TankLevel.js'
import UserBar from './UserBar'
import Sidebar from './Sidebar'
import LogoSidebar from './LogoSidebar'
import Eagle from './components/Eagle'
import Locations from './Locations'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'
import Home from './components/Home'
import Login from './Login'

import './App.css';
import './Mobile.css';

import logo from './logo-web.png'

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      location: [],
      tankLevels: []
    }
  }
  
  componentDidMount() {
    const site = firebase.database().ref('eagle/tank-levels/east');
    site.on("value", (snapshot) => {
      let eagleswd = snapshot.val();
      let newLocationState = [];
      eagleswd.date.forEach((foo, index) => {
        newLocationState.push({date: foo, amount: eagleswd.amount.shift(index)})
      })
      this.setState({
        tankLevels: newLocationState
      })
    });
  }

  render() {
    return (
      
      <div className="container">
        <Home />
        <Home />
        {/* <LogoSidebar logoImage={logo} />
        <Sidebar />
        <UserBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/location" component={Locations} />
          <Route exact path="/locations/eagle" component={Eagle} />
        </Switch> */}
        {/* <TankLevel title="West Tank" chartData={this.state.tankLevels}/> */}

      </div>
    );
  }
}

export default App;
