import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from '../../history';

import MainPage from '../../containers/Pages/MainPage';
import Doctors from '../../containers/Pages/Doctors';
import Question from '../../containers/Pages/Question/Question';
import Directory from '../../containers/Pages/Directory/Directory';
import Disease from '../../containers/Pages/Disease/Disease';
import PlantSearch from '../../containers/Pages/PlantSearch/PlantSearch';
import Plant from '../../containers/Pages/Plant/Plant';

const ROUTES = [
  {
    path: '/plant',
    component: PlantSearch
  },
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/doctors',
    component: Doctors
  },
  {
    path: '/question',
    component: Question
  },
  {
    path: '/directory',
    component: Directory
  },
  {
    path: '/disease/:id',
    component: Disease
  },
  {
    path: '/plant/:id',
    component: Plant
  }

];

class AppRouter extends Component {
  render () {
    const defaultRoute = (<Redirect to={'/'} />);
    const routes = ROUTES.map((route, i) => {
      return (
        <Route
          exact
          path={route.path}
          component={route.component}
          key={i}
          {...route.props}
        />
      );
    });

    return (
      <Router history={history}>
        <Switch>
          {routes}
          {defaultRoute}
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;