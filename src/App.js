import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './Home';
import Welcome from './Welcome';

const App = () => (
  <div className="App">
    <Router>
      <div>
        <Route exact path="/" component={Home}></Route>
        <Route path="/welcome" component={Welcome}></Route>
      </div>
    </Router>
  </div>
);

export default App;
