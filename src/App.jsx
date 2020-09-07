import React from 'react';
import logo from './logo.svg';
import './App.css';
import ViewDiscs from './components/discs/pages/ViewDiscs';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/nav/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container-fluid">
          <Switch>
            <Route path="/disks" render={() => <ViewDiscs />} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
