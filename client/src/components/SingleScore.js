import React, { Component } from 'react';

import Loading from './partials/Loading';
import axios from 'axios';


class SingleScore extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isEditing: false,
        editVal: null,
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
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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

  handleDelete() {
    axios.delete(`http://localhost:3001/api/scores/${this.state.id}`)
  }

  handleEdit() {
    this.setState({
      isEditing: true,
    })
  }

  handleCancel() {
    this.setState({
      isEditing: false
    });
  }

  handleSave(event) {
    event.preventDefault();
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.put(`http://localhost:3001/api/scores/${this.state.id}`,
    {
      happy: this.state.score.happy,
      mad: this.state.score.mad,
      url: this.state.score.url,
      result: this.state.score.result,
      user_id: this.state.score.user_id,
    })
    .then(res => {
    console.log(res.data);
    }).catch(err => console.log(err));
  }


  handleChange(event) {
    this.setState({
      score: { ...this.state.score, [event.target.name]: event.target.value }
    })
  }

renderScore() {
    if (this.state.scoreDataReceived === true) {
      return (

        <form onSubmit={this.handleSubmit}>
        <div className="my-score">
        <h3>{this.state.isEditing ? <input onChange={this.handleChange} name="happy" type="text" value={this.state.score.happy}/> : this.state.score.happy}</h3>
        <h3>{this.state.isEditing ? <input onChange={this.handleChange} name="mad" type="text" value={this.state.score.mad}/> : this.state.score.mad}</h3>
        <h3>{this.state.isEditing ? <input onChange={this.handleChange} name="url" type="text" value={this.state.score.url}/> : this.state.score.url}</h3>
        <h3>{this.state.isEditing ? <input onChange={this.handleChange} name="result" type="text" value={this.state.score.result}/> : this.state.score.result}</h3>

        <label> {this.state.isEditing ?

         <select value={this.state.score.user_id} onChange={this.handleChange} name="user_id" type="num">
          <option value='1'>Julia</option>
          <option value='2'>Ann</option>
          <option value='3'>Jess</option>
          <option value='4'>Norma</option>
          <option value='5'>Mike</option>
          <option value='6'>Jane</option>
          <option value='7'>Tom</option>
         </select> : this.state.score.name}
        </label>

        </div>
        {this.state.isEditing ? <button type="submit">Save</button> : ''}
        {this.state.isEditing ? <button onClick={this.handleDelete}>Delete</button> : ''}
        </form>

      );
    } else return <Loading />;
  }

  renderButtons() {
    if(this.state.isEditing === false){
    return (
      <span>
        <button onClick={this.handleEdit}>Edit</button>
        <button onClick={this.handleDelete}>Delete</button>
      </span>
    )
  }
  }


  render() {
    return (
      <div className="single-score">
        {this.renderScore()}
        {this.renderButtons()}
      </div>
    );
  };
}

export default SingleScore;



// <label>
//         //   Name
//         //   <select value={this.state.score.user_id} onChange={this.handleChange}>
//         //     <option value='1'>Julia</option>
//         //     <option value='2'>Ann</option>
//         //     <option value='3'>Jess</option>
//         //     <option value='4'>Norma</option>
//         //     <option value='5'>Mike</option>
//         //     <option value='6'>Jane</option>
//         //     <option value='7'>Tom</option>
//         //   </select>
//         // </label>









