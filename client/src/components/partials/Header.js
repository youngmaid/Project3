import React, { Component } from 'react';
import { Link } from 'react-router-dom';
/*import background from '../images/background.png'; */

class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul id="navfont">
            <li><Link to='/api/scores'>Faces</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/add'>Form</Link></li>
          </ul>
        </nav>
      </div>
      );
  };
}

export default Header;

// <li><Link to='/'>Home</Link></li>
//<div>
  //<img src={background} id="background-pic" alt="background"/>
 //</div>
