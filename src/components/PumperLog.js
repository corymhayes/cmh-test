import React, {Component} from 'react'

import '../App.css';
import '../Mobile.css';

export default class PumperLog extends Component{
  render(){
    return(
      <div className="pumper-log">
        <h2>Pumper Log</h2>
        <table>
          <thead>
            <tr>
              <td>Driver</td>
              <td>Company</td>
              <td>Date</td>
              <td>Start Time</td>
              <td>Finish Time</td>
              <td>Volume</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cory Hayes</td>
              <td>JCT Systems</td>
              <td>Oct 31</td>
              <td>13:48</td>
              <td>14:31</td>
              <td>1,974</td>
            </tr>
            <tr>
              <td>Eric Houston</td>
              <td>Tucker Water</td>
              <td>Oct 31</td>
              <td>14:10</td>
              <td>14:58</td>
              <td>2,078</td>
            </tr>
            <tr>
              <td>Milton Smith</td>
              <td>Fasken</td>
              <td>Oct 31</td>
              <td>15:21</td>
              <td>16:09</td>
              <td>1,542</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
