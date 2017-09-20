import React, { Component } from 'react';
import axios from 'axios';


import Result from './Result';
import ImgForm from './ImgForm';



class Home extends Component {

  constructor() {
    super();
    this.state = {
      apiData: [],
      result: 0,
    }
  }

  render() {
    return (
      <div className="Home">
          <p>result:{this.state.result}</p>
          <p>testing</p>
          <p>happy:{this.state.happy}</p>

      </div>
    );
  }
}


export default Home;
