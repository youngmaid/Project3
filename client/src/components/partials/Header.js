import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/api/scores'>Faces</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/add'>Form</Link></li>
        </ul>
      </nav>
      );
  };
}

export default Header;
