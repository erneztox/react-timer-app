import React, { Component } from 'react';
import Clock from './clock.js'
import Control from './control.js'

class Timer extends Component {
  constructor(){
    super();
    this.state = {
      count: 0,
      timerStatus: 'stopped'
    }
  }
  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.timerStatus !== prevState.timerStatus){
      switch (this.state.timerStatus) {
        case 'started':
          this.startTimer()
          break;
        case 'stopped':
          this.setState({count: 0}); // eslint-disable-next-line
        case 'paused':
          clearInterval(this.timer)
          this.timer = undefined;
          break;
          default:;
      }
    }
  }
  componentWillUnmount = () => {
    clearInterval(this.timer)
    this.timer = undefined;
  }
  startTimer = () => {
    this.timer = setInterval(() => {
      let newCount = this.state.count + 1;
      this.setState({
        count: newCount
      });
    }, 1000);
  }
  handleSetCount = () => {
    this.setState({
      timerStatus: 'started'
    });
  }
  handleStatusChange = (newStatus) => {
    this.setState({timerStatus: newStatus});
  }
  render(){
    let {count, timerStatus} = this.state;
    return (
      <div>
        <h3>Timer App</h3>
        <div className="clock clock-text">
          <Clock totalSeconds={count}/>
        </div>
        <Control countStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    );
  }
}

export default Timer;
