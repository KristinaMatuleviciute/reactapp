'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import createHistory from 'history/lib/createHashHistory'
import App from '../components/App'
import RouterContainer from '../services/RouterContainer'
import LoginActions from '../actions/LoginActions'
import Layout from '../components/Layout';
import Index from '../components/Index';
import Profile from '../components/Profile';
import Gallery from '../components/Gallery';
import ContactTable from '../components/ContactTable';
import EditTable from '../components/EditTable';
import Login from '../components/Login'


const requireAuth = (nextState, replace, callback) => {
  const jwt = localStorage.getItem('jwt');
  if (!jwt) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
  callback()
}
var Routes = (
  <Router history={hashHistory}>
  <Route path='/' component={App}>
  <IndexRoute component={Login} />
  <Route path='login' component={Login} />
  <Route path='index' name='index' component={Index} onEnter={requireAuth}></Route>
  <Route path='profile' name='profile' component={Profile} onEnter={requireAuth}></Route>
  <Route path='gallery' name='gallery' component={Gallery} onEnter={requireAuth} ></Route>
  <Route path='edittable' name='edittable' component={EditTable} onEnter={requireAuth}></Route>
  <Route path='table' name='table' component={ContactTable} onEnter={requireAuth}></Route>
  </Route>
  </Router>
);

export default Routes;
