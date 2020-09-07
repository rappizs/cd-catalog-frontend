import React from 'react';
import logo from './logo.svg';
import './App.css';
import ViewDisks from './components/disks/pages/ViewDisks';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/nav/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container-fluid">
          <Switch>
            <Route path="/disks" render={() => <ViewDisks />} />
            <Route path="/disks/:id" render={() => <ViewDisks />} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
