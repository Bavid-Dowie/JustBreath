import React from 'react';
import './App.css';
import Nav from './components/Nav';
// import Homepage from './components/Homepage';
// import Agreement from './components/Agreement';
// import CreateUser from './components/CreateUser';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import Community from './components/Community';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <header>
        Just Breath
      </header>

      <body>
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/community' component={Community} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </body>

      <footer>
        <Nav />
      </footer>

    </div>
    </Router>
  );
}

const Homepage = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;
