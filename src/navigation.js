import React from 'react';
import {Link, IndexLink} from 'react-router';

const Nav = () => {
  return(
    <div>
        <ul>
          <li>
          <a className="dont-show">React Time</a>
          </li>
          <li>
            <IndexLink to="/" className="show" activeStyle={{ fontWeight: 'bold' }}>Timer</IndexLink>
          </li>
          <li>
            <Link to="/countdown" className="show" activeStyle={{ fontWeight: 'bold' }}>Countdown</Link>
          </li>
          <li className="float-right">
            <a className="dont-show">Created by </a><a href="https://github.com/erneztox" target="_blank" className="show">erneztox</a>
          </li>
        </ul>
    </div>
  );
}

export default Nav;
