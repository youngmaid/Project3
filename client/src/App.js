import React, { Component } from 'react';
import './App.css';
import {Route, Redirect, Switch} from 'react-router-dom';
import axios from 'axios';



import Home from './components/Home';
import FaceForm from './components/FaceForm';
import About from './components/About';
import ScoreList from './components/ScoreList';
import SingleScore from './components/SingleScore';
import Hero from './components/Hero';


import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import tokenService from './services/TokenServices';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      scores: [],
      auth:  !!tokenService.read(),
    };
    this.handleLoginForm = this.handleLoginForm.bind(this);
    this.getScores = this.getScores.bind(this);
  }


  componentDidMount() {
    this.state.auth && this.getScores();
  }

  async getScores() {
    try {
      const res = await axios.get('http://localhost:3001/api/scores', {
        headers: {
          'Authorization': `Bearer ${tokenService.read()}`,
        },
      });
      this.setState({ scores: res.data.data });
    } catch (e) {
      this.setState({ scores: [] });
    }
  }

  async handleLoginForm(formData) {
    try {
      const { data: { token } } = await axios.post('http://localhost:3001/auth', formData);
      tokenService.save(token);
      this.setState({ auth: true });
      this.getScores();
    } catch (e) {
      this.setState({ auth: false });
    }
  }

  render() {
    return (
      <div className="scores">
      <Header />
        <main>
        <Hero handleLoginForm={this.handleLoginForm} isLoggedIn={this.state.auth} />
        <section className="container">
          {this.state.auth && <ScoreList scores={this.state.scores} />}
        </section>
          <Switch>
            <Route exact path='/api/scores/:id' component={SingleScore} />
            <Route exact path='/api/scores' component={ScoreList} />
            <Route exact path='/' component={FaceForm} />
            <Route exact path='/add' component={Home} />
            <Route exact path='/about' component={About} />
            <Redirect to='/' />
          </Switch>
        </main>

      </div>
    );
  }
}

export default App;

