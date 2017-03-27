
'use strict'

import AppDispatcher from '../dispatchers/AppDispatcher.js';
import {LOGIN_USER, LOGOUT_USER} from '../constants/LoginConstants.js';
import RouterContainer from '../services/RouterContainer'
import Routes from '../routes/Routes';
import { browserHistory } from 'react-router'


export default {
  loginUser: (jwt, id, role_id, company_id, isp_id ) => {
    var savedJwt = localStorage.getItem('jwt');
    var savedId = localStorage.getItem('id');

    AppDispatcher.dispatch({
      actionType: LOGIN_USER,
      jwt: jwt,
      id: id,

    });

    if (savedJwt !== jwt) {

      localStorage.setItem('jwt', jwt);
      localStorage.setItem('id', id);

    }
  },
  logoutUser: () => {
    //RouterContainer.get().transitionTo('/login');
    window.location = '/';
    localStorage.removeItem('jwt');
    AppDispatcher.dispatch({
      actionType: LOGOUT_USER
      //this.props.dispatch(pushPath('/'));
    });
  }
}
