import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Score extends Component {

  render() {
    return (
      <div className="my-score">
      <div id='imgList'>
        <img src={this.props.score.url} />
      </div>
        <h3 className="scoreItem">{this.props.score.result}</h3>
        <h3 className="scoreItem">{this.props.score.happy}</h3>
        <h3 className="scoreItem">{this.props.score.mad}</h3>
        <Link id="scoreLink" to={`/api/scores/${this.props.score.id}`}>See score details</Link>

      </div>
    );
  };
}

export default Score;

