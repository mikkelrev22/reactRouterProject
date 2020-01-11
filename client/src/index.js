import React from 'react'
import ReactDOM from 'react-dom'
import LandingPage from './components/LandingPage.jsx'
import AppLayout from './components/LandingPage.jsx'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

const App = () => {
  return (<div>
    <h1>Protected Page</h1>
    <Route exact path="/" component={LandingPage}/>
    <Route exact path="/app" component={AppLayout}/>
  </div>)
}

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('app')) 