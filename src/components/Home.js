import React, { Component } from 'react';
import { VictoryPie, VictoryContainer, VictoryLabel } from 'victory';

// import '../App.css';
// import '../Mobile.css';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alarmLevel: 12,
      currentLevel: 4.17,
    };
  }

  render() {
    return (
      <div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center', marginBottom: 50 }}>
        <h3 style={{ position: 'relative', right: 0, marginLeft: 50, alignSelf: 'flex-start' }}>East Tank</h3>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 250,
            height: 250
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <h1 style={{ fontSize: 40, fontWeight: 'bold', margin: 0 }}>
              4.17
            </h1>
            <h3 style={{ marginTop: 30 }}>/ 12.00</h3>
          </div>
          <svg
            style={{ position: 'absolute' }}
            width='300'
            height='300'
            viewBox='0 0 300 300'
          >
            <VictoryPie
              containerComponent={<VictoryContainer responsive={false} />}
              data={[
                { x: ' ', y: this.state.alarmLevel - this.state.currentLevel },
                { x: ' ', y: this.state.currentLevel },
              ]}
              colorScale={['rgba(0,0,0,.25)', '#ffc857']}
              innerRadius={90}
              startAngle={145}
              endAngle={-145}
              standalone={false}
              width={300}
              height={300}
            />
          </svg>
        </div>

        <div style={{ display: 'flex', flexFlow: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
          <span style={{ marginBottom: 10 }}>Transfer Pump</span>

          <div style={{ display: 'grid', gridTemplateRows: `${50}% ${1}fr`, gridTemplateColumns: `repeat(${3}, ${1}fr)`, placeItems: 'center' }}>
            <h3>Status</h3><h3>Pressure</h3><h3>On/Off</h3>
            <span>stopped</span><span>176.18</span><span>6.00/4.00</span>
          </div>
        </div>

       
      </div>
    );
  }
}
