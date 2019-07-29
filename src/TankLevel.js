import React, { Component } from "react";
import { VictoryBar } from "victory";

import "./tank-levels.css";

class TankLevel extends Component {
  render() {
    return (
      <div className="tank-level-body">
        <div className="title">{this.props.title}</div>
        <div className="measurement">
          <div className="amount">11,946</div>
          <div className="change">13.2%</div>
        </div>
        <div className="graph">
          <VictoryBar data={this.props.chartData} x="quarter" y="amount" />
        </div>
      </div>
    );
  }
}

export default TankLevel;
