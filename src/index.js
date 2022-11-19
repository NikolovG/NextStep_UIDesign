import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Documents from './views/documents'
import Login from './views/login'
import TempRows from './views/temp-rows'
import Help from './views/help'
import Profile from './views/profile'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Documents} exact path="/documents" />
        <Route component={Login} exact path="/" />
        <Route component={TempRows} exact path="/temp-rows" />
        <Route component={Help} exact path="/help" />
        <Route component={Profile} exact path="/profile" />
        <Route component={Home} exact path="/home" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
