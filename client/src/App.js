import React, { Component } from 'react';
import './App.css';
import {Route, Redirect, Switch} from 'react-router-dom';


import Home from './components/Home';
import FaceList from './components/QuoteList'
import FaceForm from './components/FaceForm'
import About from './components/About'


class App extends Component {
  render() {
    return (
      <div className="quotes">
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/About' component={About} />
            <Route exact path="/bishfaces" component={FaceList} />
            <Route exact path="/Add" component={FaceForm} />
            <Redirect to='/' />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
