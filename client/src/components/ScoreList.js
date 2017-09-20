import React, { Component } from 'react';

import axios from 'axios';

import Score from './partials/Score';
import Loading from './partials/Loading';

class ScoreList extends Component {
  constructor() {
    super();
    this.state = {
      scores: [],
      scoreListDataReceived: false,
    }
  }


  componentDidMount(){
  axios.get('http://localhost:3001/api/scores')
  .then(res => {
    this.setState(prevState => {
      return {
        scores: res.data.data.scores,
        scoreListDataReceived: true,
      }
    });
  });
}
  renderScoreList() {
    if (this.state.scoreListDataReceived === true) {
      return this.state.scores.map((score) => {
        return <Score score={score} key={score.id} />
      });
    } else return <Loading />
  }

  render() {
    return (
      <div className="scorelist">
        {this.renderScoreList()}
      </div>
    );
  };
}

export default ScoreList;


