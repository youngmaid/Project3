import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Score extends Component {
  render() {
    console.log(this.props.score.happy)
    return (
      <div className="my-score">
        <h3>{this.props.score.happy}</h3>
        <h3>{this.props.score.mad}</h3>
        <h3>{this.props.score.url}</h3>
        <h3>{this.props.score.result}</h3>
        <h3>{this.props.score.name}</h3>
        <Link to={`/api/scores/${this.props.score.id}`}>See score </Link>
      </div>
    );
  };
}

export default Score;

