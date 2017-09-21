import React, { Component } from 'react';

import Loading from './partials/Loading';
import axios from 'axios';


class SingleScore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
        score: {
        happy: '',
        mad: '',
        url: '',
        result: '',
        user_id: '',
      },
      scoreDataReceived: false,
    }
  }

  componentDidMount(){
  axios.get(`http://localhost:3001/api/scores/${this.state.id}`)
  .then(res => {
    this.setState(prevState => {
      return {
        score: res.data.data.score,
        scoreDataReceived: true,
      }
    });
  });
}


updateScore(event) {
  let updatedScore = Object.assign({}, this.state.score)
  updatedScore['url'] = event.target.value;
  this.setState({
    score: updatedScore,
  })
}

renderScore() {
    if (this.state.scoreDataReceived === true) {
      return (
        <div>
        <div className="my-score">
        <h3>{this.state.score.happy}</h3>
        <h3>{this.state.score.mad}</h3>
        <h3>{this.state.score.url}</h3>
        <h3>{this.state.score.result}</h3>
        <h3>{this.state.score.name}</h3>
        </div>
        </div>
      );
    } else return <Loading />;
  }


  render() {
    return (
      <div className="single-score">
        {this.renderScore()}
      </div>
    );
  };
}

export default SingleScore;
