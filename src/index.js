import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router,Route,Switch, Redirect } from 'react-router-dom'

import './index.css'
import Home from './views/home'
import About from './views/about';
import NotFound from './views/not-found'
import Complanints from './components/complaints'
import Login from './components/login'
import Register from './components/register'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={About} exact path="/About" />
        <Route component={Complanints} exact path="/complanints"/>
        <Route component={Login} exact path="/login" />
        <Route component={Register} exact path="/register" />
        <Route component={NotFound} exact path="/not-found" />
        <Redirect to="**" />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('app'))
