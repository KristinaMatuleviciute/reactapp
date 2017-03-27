
'use strict'

import React, { Component, PropTypes } from 'react';
import Logout from './Logout';
import LoginStore from '../stores/LoginStore'
import { Route, RouteHandler, Link } from 'react-router';
import AuthService from '../services/AuthService'
import { Nav, Button, NavItem, Navbar, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';




export default class Header extends Component {

  static propTypes = {
    userLoggedIn: PropTypes.bool.isRequired
  };

  logout(e) {
    e.preventDefault();
    AuthService.logout();
  }

  render () {
    if (!this.props.userLoggedIn) {
      return (

        <Navbar style={{"height": "100px"}}>
        <Navbar.Header>
        <Navbar.Brand>

        </Navbar.Brand>
        <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>

        <Nav pullRight>
        <LinkContainer to="login">
        <NavItem eventKey={1}>Login</NavItem>
        </LinkContainer>
        </Nav>

        </Navbar.Collapse>
        </Navbar>
        )
      } else if (this.props.userLoggedIn){
        return (

          <Navbar style={{ backgroundColor: '#EFE6E6'}}>
          <Navbar.Header>
          <Navbar.Brand>
          </Navbar.Brand>
          <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
          <Nav pullRight>
          <LinkContainer to="/table">
          <NavItem eventKey={1}>Contacts</NavItem>
          </LinkContainer>
          <LinkContainer to="/gallery">
          <NavItem eventKey={2}>Gallery</NavItem>
          </LinkContainer>
          <NavItem onClick={this.logout} eventKey={3}>Logout</NavItem>
          </Nav>

          </Navbar.Collapse>
          </Navbar>
          )

      }

    }
  }
