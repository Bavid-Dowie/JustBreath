import React from 'react';
import HomeScreen from './components/HomeScreen';
import MainNav from './components/MainNav';
import Profile from './components/Profile';
import BreathBoard from './components/BreathBoard';
import './App.css';
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";

const routing = (
  <Router>
    <div>
      <Route exact path='/' component={HomeScreen} />
      <Route exact path='/profile' component={Profile} />
      {/* <Route exact path='/homescreen' component={HomeScreen} /> */}
    </div>
  </Router>
)

function App() {
  return (
    <div className="App">
      <Profile />
    </div>
  );
}

export default App;
