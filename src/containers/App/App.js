import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import 'bootstrap/dist/css/bootstrap.min.css';

import Router from '../../components/Router';

import '../../styles/index.css';

class App extends Component {
  render () {
    return (
      <Router />
    );
  }
}

const exportedApp = process.env.NODE_ENV === 'development' ? hot(module)(App) : App;

export default withRouter(exportedApp);
