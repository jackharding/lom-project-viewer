import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Particles from 'react-particles-js';

import { Home, ProjectFull, ProjectList } from './views';
import particleSettings from './particleSettings';
import Nav from './components/nav';
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

        const loading = document.getElementById('app-loading');
        loading.style.display = 'none';
      })
      .catch(err => {
        console.log(err);
      });

      function handleFirstTab(e) {
          if(e.keyCode===9){
              document.body.classList.add('user-is-tabbing');
              window.removeEventListener('keydown',handleFirstTab);
          }
      }
      window.addEventListener('keydown', handleFirstTab);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <div className="top">
            <Header logo={this.state.logo} />
            <Nav />
            <main className="pbot15">
              <Switch>
                <Route path="/projects/:id" component={ProjectFull} />
            		<Route path="/projects" component={ProjectList} />
            		<Route path="/" component={Home} />
              </Switch>
            </main>
          </div>
          <Footer />
          <Particles className="bg" params={particleSettings} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
