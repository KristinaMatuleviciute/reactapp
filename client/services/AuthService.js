'use strict'

import request from 'reqwest';
import when from 'when';
import {LOGIN_URL, SIGNUP_URL} from '../constants/LoginConstants';
import LoginActions from '../actions/LoginActions';

class AuthService {

  login(name, password) {
    var goodJson={
      name: name,
      password: password
    };
    return this.handleAuth(when(request({
      url: 'http://localhost:8080/api/users/login/',
      method: 'POST',
      crossOrigin: true,
      type: 'json',
      data: goodJson,
      success: function(data){
        console.log('hi')
      },
      error: (xhr, status, err) => {
        //console.log("We got an error here");
        console.log("error", err)
        if (status === 404){
          console.log("wrong details", err)
        }
        //alert('Error: ' + responseText.message)
      }
    })));
  }

  logout() {
    LoginActions.logoutUser();
  }


  handleAuth(loginPromise) {
    return loginPromise
    .then((response) => {
      const jwt = response.token;
      const id = response.user.id;
      LoginActions.loginUser(jwt, id);
      return true;
    });
  }
}

export default new AuthService()
