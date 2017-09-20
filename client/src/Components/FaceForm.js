import React, { Component } from "react";
import axios from 'axios';
import InputForm from './InputForm';


class FaceForm extends Component {

 constructor() {
    super();
    this.state = {

      scores: [],
      result: 0,
      inputHappyValue: 'false',
      inputMadValue: 'false',
      inputURLValue: '',
      user_id: '',

    }

    this.handleInputHappyChange = this.handleInputHappyChange.bind(this);
    this.handleInputMadChange = this.handleInputMadChange.bind(this);
    this.handleInputURLChange = this.handleInputURLChange.bind(this);
    this.handleInputFormSubmit = this.handleInputFormSubmit.bind(this);
    this.handleInputResultChange = this.handleInputResultChange.bind(this);
    this.handleInputUserChange = this.handleInputUserChange.bind(this);
  }

  handleInputURLChange (event)  {
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


  handleInputResultChange(event) {
    this.setState({
      result: event.target.value
    });
  }

  handleInputUserChange(event) {
    this.setState({
      user_id: event.target.value
    });
  }

   handleInputFormSubmit(event) {
    event.preventDefault();
    console.log(this.state.inputURLValue)
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
      url: res.data.scores.url,
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
}

render() {
    return (
      <div className="App">
      <InputForm handleInputFormSubmit={this.handleInputFormSubmit}
                 inputMadValue={this.state.inputMadValue}
                 handleInputMadChange={this.handleInputMadChange}
                 inputHappyValue={this.state.inputHappyValue}
                 handleInputHappyChange={this.handleInputHappyChange}
                 inputURLValue={this.state.inputURLValue}
                 handleInputURLChange={this.handleInputURLChange}
                 handleInputResultChange={this.handleInputResultChange}
                 result={this.state.result}
                 handleInputUserChange={this.handleInputUserChange}
                 user_id={this.state.user_id}
      />
      </div>
    );
  }
}

export default FaceForm;
