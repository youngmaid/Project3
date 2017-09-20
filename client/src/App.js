import React, { Component } from 'react';
import './App.css';
import {Route, Redirect, Switch} from 'react-router-dom';


// import Home from './components/Home';
import ScoreList from './components/ScoreList';
// import FaceForm from './components/FaceForm';
// import About from './components/About';
// import Header from './components/partials/Header';
// import Footer from './components/partials/Footer';




class App extends Component {
  render() {
    return (
      <div className="scores">

        <main>
          <Switch>
            <Route exact path='/scores' component={ScoreList} />

          </Switch>
        </main>

      </div>
    );
  }
}

export default App;

// <Route exact path='/' component={Home} />
//             <Route exact path='/about' component={About} />
//             <Route exact path='/add' component={FaceForm} />
// <Redirect to='/' />
