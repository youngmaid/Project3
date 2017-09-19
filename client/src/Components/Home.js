import React, { Component } from 'react';
/*import axios from 'axios'; */
import './App.css';

//import FaceForm from './components/FaceForm';
//import FaceList from './components/FaceFeed';
import Result from './components/Result';
import ImgForm from './components/ImgForm'
 */
class Home extends Component {

  constructor() {
    super();
    this.state = {
      apiData: [],
      scores: [],
      result:'',
      happy: false,
      mad: false,
      url: '',
      name: '',

    }
    this.calculateResult = this.calculateResult.bind(this)

    this.handleinputHappyChange = this.handleinputHappyChange.bind(this);
    this.handleInputMadChange = this.handleInputMadChange.bind(this);

    this.handleInputURLChange = this.handleInputURLchange.bind(this);

    this.handleInputURLSubmit = this.handleInputURLSubmit.bind(this)
    this.handleInputFormSubmit = this.handleInputFormSubmit.bind(this);
  }


  handleInputURLchange ()  {


  } */













  render() {
    return (
      <div className="App">
      <p>hello world</p>
      </div>

    );
  }
}

export default Home;
