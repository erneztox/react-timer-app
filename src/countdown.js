import React, { Component } from 'react';
import Clock from './clock.js'
import CountForm from './countdownForm.js'
import Control from './control.js'

class Count extends Component {
  constructor(){
    super();
    this.state = {
      count: 0,
      countStatus: 'stopped'
    }
  }
  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.countStatus !== prevState.countStatus){
      switch (this.state.countStatus) {
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
      let newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
      if (newCount === 0){
        this.setState({countStatus: 'stopped'});
      }
    }, 1000);
  }
  handleSetCount = (seconds) => {
    this.setState({
      count: seconds,
      countStatus: 'started'
    });
  }
  handleStatusChange = (newStatus) => {
    this.setState({countStatus: newStatus});
  }
  render(){
    let count = this.state.count;
    let countStatus = this.state.countStatus;
    return(
      <div>
        <h3>Countdown App</h3>
        <div className="clock clock-text">
          <Clock totalSeconds={count} />
        </div>
        {countStatus !== 'stopped' ? <Control countStatus={countStatus} onStatusChange={this.handleStatusChange} /> :  <CountForm onSetCountdown={this.handleSetCount}/>}
      </div>
    );
  }
}

export default Count;
