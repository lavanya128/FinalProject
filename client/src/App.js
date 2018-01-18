import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Container} from './components/Grid'
import Main from './pages/Main';
import Saved from './pages/Saved';




const App = () => (
  <Router>
    <Container >
       <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/Saved" component={Saved} />
      </Switch>
    </Container>
  </Router>
);

export default App;
