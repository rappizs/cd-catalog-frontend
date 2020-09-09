import React from 'react';
import './App.css';
import ViewDiscs from './components/discs/pages/ViewDiscs';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import ViewArtists from './components/artists/pages/ViewArtists';
import ViewStyles from './components/styles/pages/ViewStyles';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container-fluid">
          <Switch>
            <Redirect exact from="/" to="/discs" />
            <Route path="/discs" render={() => <ViewDiscs />} />
            <Route path="/artists" render={() => <ViewArtists />} />
            <Route path="/styles" render={() => <ViewStyles />} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
