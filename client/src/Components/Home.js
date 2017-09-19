import React, { Component } from 'react';
import axios from 'axios'; */
import './App.css';

import FaceForm from './components/FaceForm';
import FaceList from './components/FaceFeed';
import Result from './components/Result';
import ImgForm from './components/ImgForm'


class Home extends Component {

  constructor() {
    super();
    this.state = {
      apiData: [],
      scores: [],
      result:'Yes',
      happy: 'false',
      mad: 'false',
      url: '',
      //user_id: '',

    }
    //this.calculateResult = this.calculateResult.bind(this)
    // *****since we don't have an API I'm going to comment this out

    this.handleinputHappyChange = this.handleinputHappyChange.bind(this);
    this.handleInputMadChange = this.handleInputMadChange.bind(this);

    this.handleInputURLChange = this.handleInputURLchange.bind(this);
    // for now we're gonna have a user manually input URL data and not
    // submit from a URL, we're not gonna change the state of result, witout API

    //this.handleInputURLSubmit = this.handleInputURLSubmit.bind(this);
    // *** since we don't  have an API I'm gonna comment this out for now
    this.handleInputFormSubmit = this.handleInputFormSubmit.bind(this);
  }

  /*calculateResult(){

  } */

  handleInputURLChange (event)  {
    this.setState({
      url: event.target.value
    });
  }

   handleInputHappyChange(event) {
    this.setState({
      inputHappyValue: event.target.value
    });
  }

  handleInputMadChange(event) {
    this.setState({
      inputMadValue: event.target.value
    });
  }


 handleInputSubmit(event) {
    event.preventDefault();
    console.log(this.state.url)
    console.log(this.state.result)
    console.log(this.state.inputMadValue)

    axios.post('http://localhost:3001/api/scores', {
      happy: this.state.inputMadValue,
      mad: this.state.inputHappyValue,
      url: this.state.inputURLValue,
      result: this.state.result
      //user_id: this.state.user_id
    })
    .then(res => {

      if (res.data.quote.id !== undefined) {
        const newQuote = {
          content: res.data.quote.content,
          author: res.data.quote.author,
          genre_type: res.data.quote.genre_type,

        }
        /*  just what we discussed yesterday how to set state as an aray */
        this.setState((prevState) => {
          return {
            quotes: prevState.quotes.concat(newQuote),
          }
        })
      }
    }).catch(err => console.log(err));
  }












  render() {
    return (
      <div className="App">
      <p>hello world</p>
      </div>

    );
  }
}

export default Home;
