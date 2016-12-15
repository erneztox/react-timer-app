import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Timer from './timer.js';
import Count from './countdown.js';
import './index.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const AllApp = () => (
    <Router history={browserHistory}>
      <Route path="/" component={App} >
      <Route path="countdown" component={Count}/>
      <IndexRoute component={Timer}/>
    </Route>
  </Router>
);


ReactDOM.render(
  <AllApp />,
  document.getElementById('root')
);
