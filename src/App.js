import React, { Component } from 'react';
import './App.css';
import {Route, Switch } from 'react-router-dom'
import Home from './Home'
import About from './About'
import NoMatch from './NoMatch';
import {Container, Header} from 'semantic-ui-react'
import Navbar from './Navbar'
import Virus from './Virus'

export default class App extends Component {
  state = {}
  render () {
  return (
    <>
      <Container>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Virus" component={Virus} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </>
  );
  }
}

