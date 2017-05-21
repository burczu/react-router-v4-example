import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home';
import About from './About';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/1">About</Link>
            </li>
          </ul>

          <Route exact path="/" component={Home} />
          <Route path="/about/:id" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
