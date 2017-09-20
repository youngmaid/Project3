import React, { Component } from 'react';
import axios from 'axios';


import Result from './Result';
import ImgForm from './ImgForm';



class Home extends Component {

  constructor() {
    super();
    this.state = {
      apiData: [],
      //scores: [],
      result: 0,
      //happy: 'false',
      //mad: 'false',
      //url: ''
      //user_id: '',


    }


    /// I'm commenting all of the form submit stuff out cause I'm moving
    // it to the form component.


    //this.calculateResult = this.calculateResult.bind(this)
    // *****since we don't have an API I'm going to comment this out


    //this.handleInputHappyChange = this.handleInputHappyChange.bind(this);
    //this.handleInputMadChange = this.handleInputMadChange.bind(this);

    //this.handleInputURLChange = this.handleInputURLChange.bind(this);
    // for now we're gonna have a user manually input URL data and not
    // submit from a URL, we're not gonna change the state of result, witout API

    //this.handleInputURLSubmit = this.handleInputURLSubmit.bind(this);
    // *** since we don't  have an API I'm gonna comment this out for now
    //this.handleInputFormSubmit = this.handleInputFormSubmit.bind(this);
  }

  /*calculateResult(){

  } */

  /*handleInputURLChange (event)  {
    this.setState({
      inputURLValue: event.target.value
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


 handleInputFormSubmit(event) {
    event.preventDefault();
    console.log(this.state.url)
    console.log(this.state.result)
    console.log(this.state.inputMadValue)

    axios.post('http://localhost:3001/api/scores', {
      happy: this.state.inputMadValue,
      mad: this.state.inputHappyValue,
      url: this.state.inputURLValue,
      result: this.state.result,
      user_id: this.state.user_id,
    })
    .then(res => {

    console.log(res.data);

      {
      const newScore = {
      happy: res.data.scores.happy,
      mad: res.data.scores.mad,
      url: res. data.scores.url,
      result: res.data.scores.result,
      name: res.data.scores.name,



      }

      this.setState((prevState) => {
        return {
          scores: prevState.scores.concat(newScore),
        }
      })
    }
  }).catch(err => console.log(err));
} */

// for testing purposes
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

  //render() {
   // return (
    //  <div className="Home">
     //     <FaceForm handleformSubmit={this.handleInputFormSubmit}
       //              handleinputURLChange={this.handleinputURLChange}
       //              handleinputHappyChange={this.handleinputHappyChange}
        //             handleInputMadChange={this.handleInputMadChange}
          //           />
         // <Scores scores={this.state.scores}/>

      //</div>
   // );
 // }
//}



export default Home;
