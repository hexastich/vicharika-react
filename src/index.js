import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router,Route,Switch, Redirect } from 'react-router-dom'

import './index.css'
import Home from './views/home'
import About from './views/about';
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={About} exact path="/About" />
        <Route component={NotFound} exact path="/not-found" />
        <Redirect to="**" />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('app'))
