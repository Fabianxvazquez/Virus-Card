import React from 'react';
import './App.css';
import {Route, Switch } from 'react-router-dom'
import Home from './Home'
import About from './About'
import NoMatch from './NoMatch';
import {Container} from 'semantic-ui-react'
import Navbar from './NavBar'

function App() {
  return (
    <>
    <Container>
    <Navbar/>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/About' component={About} />
      <Route component={NoMatch} />
    </Switch>
    </Container>
    
    </>
  );
}

export default App;

