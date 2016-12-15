import React, { Component } from 'react';

class Control extends Component {
  onStatusChange = (newStatus) => {
    this.props.onStatusChange(newStatus);
  }
  renderStartStopButtons = (countStatus) => {
    if (countStatus === 'started'){
      return <button onClick={() => this.onStatusChange('paused')}>Pause</button>
    } else if (countStatus === 'paused'){
      return <button onClick={() => this.onStatusChange('started')}>Start</button>
    }
  }
  render() {
    let {countStatus} = this.props
    return(
      <div>
        {this.renderStartStopButtons(countStatus)}
        <button onClick={() => this.onStatusChange('stopped')}>Clear</button>
      </div>
    )
  }
}


export default Control;
