import React, { Component } from 'react';

class CountForm extends Component {
  onSubmit = (e) => {
    e.preventDefault();
    let strSeconds = this.refs.seconds.value;

    if (strSeconds.match(/^[0-9]*$/)){
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  }
  render() {
    return(
      <div>
        <form ref="form" onSubmit={this.onSubmit}>
          <input type="number" min="0" max="10000" ref="seconds" placeholder="enter time in seconds"/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}


export default CountForm;
