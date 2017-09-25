import React, { Component } from 'react';
import './App.css';
import {Route, Redirect, Switch} from 'react-router-dom';



import Home from './components/Home';
import FaceForm from './components/FaceForm';
import About from './components/About';
import ScoreList from './components/ScoreList';
import SingleScore from './components/SingleScore';

import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import tokenService from './services/TokenServices';


class App extends Component {
  render() {
    return (
      <div className="scores">
      <Header />
        <main>
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

