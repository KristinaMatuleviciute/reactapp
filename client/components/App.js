
'use strict';

import React, { Component, PropTypes } from 'react';
import LoginStore from '../stores/LoginStore'
import { Route, RouteHandler, Link } from 'react-router';
import AuthService from '../services/AuthService'
import Header from '../components/Header'

export default class AuthenticatedApp extends React.Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };
  constructor() {
    super();
    this.state = this._getLoginState();
  }
  componentDidMount() {
    this.changeListener = this._onChange.bind(this);
    LoginStore.addChangeListener(this.changeListener);
  }
  componentWillUnmount() {
    LoginStore.removeChangeListener(this.changeListener);
  }
  _getLoginState() {
    return {
      userLoggedIn: LoginStore.isLoggedIn()
    };
  }
  _onChange() {
    this.setState(this._getLoginState());
  }
  logout(e) {
    e.preventDefault();
    this.context.router.transitionTo('/');
    AuthService.logout();
  }
  render() {
    return (
      <div className='navbar navbar-head navbar-fixed-top' role='navigation'>
      <Header userLoggedIn={this.state.userLoggedIn} />
      {this.props.children}
      </div>
    );
  }
}
