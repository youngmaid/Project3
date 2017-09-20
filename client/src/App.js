import React, { Component } from 'react';
import './App.css';
import {Route, Redirect, Switch} from 'react-router-dom';


import Home from './Components/Home';
import FaceList from './Components/FaceList'
import FaceForm from './Components/FaceForm'
import About from './Components/About'


class App extends Component {
  render() {
    return (
      <div className="faces">
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
