import React, { Component } from 'react';
import axios from 'axios';
import ImgForm from './ImgForm'
import calculateResult from './../calculateResult';
import LoadingRBF from './partials/LoadingRBF'
import ImageRender from './ImageRender'




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


    }

    this.handleinputImgChange = this.handleinputImgChange.bind(this);
    this.handleImgSubmit = this.handleImgSubmit.bind(this);
  }


handleinputImgChange(event) {
  this.setState({
    inputimg: event.target.value
  });
};

handleImgSubmit(event) {
  console.log(this.state.inputimg)
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
  this.setState({showLoader: false})
  console.log(err)
  });




};
















    render() {
      const imageClass = this.state.faceBorder ? "border" : "";
      const showimg = this.state.showImg ? < ImageRender className={imageClass} img={this.state.inputimg} /> : null;

      const loader = this.state.showLoader? < LoadingRBF/> : null;



      let resultcontainer = ''
      if (this.state.result === ''){
        resultcontainer = null
      } else {
        resultcontainer = (<p>Your RBF score: {this.state.result}</p>)
      }
    return (
        <div>
          <h3>Hi! Welcome to RBF Detector!</h3>
          <ImgForm handleImgSubmit={this.handleImgSubmit}
                     handleinputImgChange={this.handleinputImgChange}
                     inputimg={this.state.inputimg}
                     />
          {resultcontainer}
          <p>{this.state.sentence}</p>
          {loader}
          {showimg}
        </div>

    );
  }
}



export default Home;






