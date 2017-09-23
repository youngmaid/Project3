import React, { Component } from 'react';

import axios from 'axios';

import Score from './partials/Score';
import Loading from './partials/Loading';
import SingleScore from './SingleScore';


class ScoreList extends Component {
  constructor() {
    super();
    this.state = {
      scores: [],
      result: '',
      inputHappyValue: '',
      inputMadValue: '',
      inputURLValue: '',
      user_id: '',
      scoreListDataReceived: false,
  }

this.getAllScores = this.getAllScores.bind(this);

}
  componentDidMount(){
 this.getAllScores()
}

getAllScores() {
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

handleScoreEdit(event) {
  event.preventDefault();
}

  renderScoreList() {
    if (this.state.scoreListDataReceived === true) {
      return this.state.scores.map((score) => {
        return <Score score={score} key={score.id}
        history={this.props.history}/>
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


