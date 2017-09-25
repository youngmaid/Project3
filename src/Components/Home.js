import React, { Component } from 'react';
import axios from 'axios';
import ImgForm from './ImgForm';
import calculateResult from './../calculateResult';
import LoadingRBF from './partials/LoadingRBF';
import ImageRender from './ImageRender';
import InputForm from './InputForm';
import ScoreList from './ScoreList';


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
        result: '',
        inputimg: '',
        sentence: '',
        showLoader: false,
        showImg: false,
        faceBorder: false,
        scores: [],
        inputHappyValue: '',
        inputMadValue: '',
        inputURLValue: '',
        user_id: '',
        scoreListDataReceived: false,
      }
      this.handleInputHappyChange = this.handleInputHappyChange.bind(this);
      this.handleInputMadChange = this.handleInputMadChange.bind(this);
      this.handleInputURLChange = this.handleInputURLChange.bind(this);
      this.handleInputFormSubmit = this.handleInputFormSubmit.bind(this);
      this.handleinputImgChange = this.handleinputImgChange.bind(this);
      this.handleImgSubmit = this.handleImgSubmit.bind(this);
      this.handleInputUserChange = this.handleInputUserChange.bind(this);
      this.handleInputResultChange = this.handleInputResultChange.bind(this);
      this.reload = this.reload.bind(this);
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

  handleinputImgChange(event) {
    this.setState({
      inputimg: event.target.value
    });
  };

  handleInputResultChange(event) {
    this.setState({
      result: event.target.value
    });
  }

  reload() {
  window.location.reload()
  }

  handleImgSubmit(event) {
    event.preventDefault();
    this.setState ({
      showLoader: true,
      showImg: true
    })
    axios.post('http://localhost:3001/api/scores/test', {
      inputurl: this.state.inputimg
    }).then(res => {
      this.setState ({
        showLoader: false,
        faceBorder: true
      })
      console.log(res.data.data)
      const result = calculateResult(res.data.data)
       console.log(result)
      this.setState({
        result: result[0],
        sentence: result[1]
      })
    }).catch(err => {
    this.setState({showLoader: false, sentence: "Unable to Process. Please upload a valid photo URL of a human face."})
    console.log(err)
    })
  }

  handleInputUserChange(event) {
    this.setState({
    user_id: event.target.value
    });
  }

  handleInputFormSubmit(event) {
    event.preventDefault();

    axios.post('http://localhost:3001/api/scores', {
      happy: this.state.inputMadValue,
      mad: this.state.inputHappyValue,
      url: this.state.inputimg,
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
    const imageClass = this.state.faceBorder ? "border" : "";
    const showimg = this.state.showImg ? < ImageRender className={imageClass} img={this.state.inputimg} /> : null;
    const loader = this.state.showLoader ? < LoadingRBF/> : null;

    let resultcontainer = ''
    if (this.state.result === ''){
          resultcontainer = null
      } else {
          resultcontainer = (<p>Your RBF score: {this.state.result}</p>)
     }
    return (
    <div>
      <div>
        <h3>Hi! Welcome to RBF Detector!</h3>
          <ImgForm handleImgSubmit={this.handleImgSubmit}
                   handleinputImgChange={this.handleinputImgChange}
                   inputimg={this.state.inputimg}/>
        {resultcontainer}
        <p>{this.state.sentence}</p>
        {loader}
        {showimg}
        <button onClick={this.reload}>click here to reload</button>
      </div>
      <div className="App">
        <InputForm handleInputFormSubmit={this.handleInputFormSubmit}
                   inputMadValue={this.state.inputMadValue}
                   handleInputMadChange={this.handleInputMadChange}
                   inputHappyValue={this.state.inputHappyValue}
                   handleInputHappyChange={this.handleInputHappyChange}
                   inputURLValue={this.state.inputURLValue}
                   handleInputURLChange={this.handleInputURLChange}
                   result={this.state.result}
                   handleInputUserChange={this.handleInputUserChange}
                   user_id={this.state.user_id}
                   inputimg={this.state.inputimg}/>
      </div>
    </div>
   );
  }
}

export default Home;






