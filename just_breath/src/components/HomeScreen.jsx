import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Profile from '../components/Profile';
import '../styles/styles.scss';

class HomeScreen extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Link to='/profile'>Profile</Link>
        </div>
      </BrowserRouter>
    )
  }
}

export default HomeScreen;