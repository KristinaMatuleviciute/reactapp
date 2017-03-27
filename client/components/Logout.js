
'use strict'

import React, { Component } from 'react';
import AuthService from '../services/AuthService';

class Logout extends Component {
  constructor() {
    super();
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout(e) {
    e.preventDefault();
    AuthService.logout();
  }
  render() {
    return (
      <div>
      {'Logout here'}
      <form>
      <button onClick={this.handleLogout}>{'Log out'}</button>
      </form>
      </div>
    );
  }
}

export default Logout;
