'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Index from './components/Index';
import Profile from './components/Profile';
import Gallery from './components/Gallery';
import Layout from './components/Layout';
import ContactTable from './components/ContactTable';

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Index}></IndexRoute>
      <Route path='index' name='index' component={Index}></Route>
      <Route path='profile' name='profile' component={Profile}></Route>
      <Route path='gallery' name='gallery' component={Gallery}></Route>
      <Route path='table' name='table' component={ContactTable}></Route>
    </Route>
  </Router>,
app)
