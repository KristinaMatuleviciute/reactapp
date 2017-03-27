
// importing REACT and REACT-DOM -our rendering engine
import React from 'react'
import ReactDOM from 'react-dom'
// importing react routes
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import './index.html'
import './assets/css/main.styl'
// importin path components

import AuthenticatedApp from './components/AuthenticatedApp'
import AuthenticatedComponent from './components/AuthenticatedComponent'
import Login from './components/Login';
import App from './components/App';
import RouterContainer from './services/RouterContainer';
import LoginActions from './actions/LoginActions';
import Routes from './routes/Routes';



const app = document.getElementById('app')

const jwt = localStorage.getItem('jwt');
if(jwt) {
  LoginActions.loginUser(jwt);
}

ReactDOM.render(Routes, app);
