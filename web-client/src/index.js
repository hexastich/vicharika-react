import React from 'react'
import  { createRoot } from 'react-dom/client'
import { BrowserRouter as Router,Route,Switch, Redirect } from 'react-router-dom'

import './index.css'
import Home from './views/home'
import About from './views/about';
import NotFound from './views/not-found'
import Complanints from './components/complaints'
import Login from './components/login'
import Register from './components/register'

const App = () => {
 const {REACT_APP_NAME} = process.env
 console.log('App=============>>'+REACT_APP_NAME);
 console.log('App=============>>'+process.env.REACT_APP_VERSION);
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

const container = document.getElementById('app')
const root = createRoot(container);
root.render(<App />)
