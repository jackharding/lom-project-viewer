import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home, ProjectFull } from './views'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      	<Switch>
      		<Route path="/projects/:id" component={ProjectFull} />
      		<Route path="/" component={Home} />
      	</Switch>
      </BrowserRouter>
    );
  }
}

export default App;
