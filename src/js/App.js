import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import { Home, ProjectFull } from './views';
import Header from './components/header';
import Footer from './components/footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logo: '',
      footerText: ''
    };
  }

  componentDidMount() {
    const API_URL = 'http://localhost/lom/wp-json';
    axios.get(`${API_URL}/acf/v2/options`)
      .then(res => {
        const { acf } = res.data;
        this.setState({
          logo: acf.logo
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="app">
        <Header logo={this.state.logo} />
        <main className="pbot15">
          <BrowserRouter>
          	<Switch>
          		<Route path="/projects/:id" component={ProjectFull} />
          		<Route path="/" component={Home} />
          	</Switch>
          </BrowserRouter>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
