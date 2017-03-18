'use strict'

import React, { Component, PropTypes } from 'react';
import Home from './Index';
import Profile from './Profile';
import { Route, RouteHandler, Link } from 'react-router';
import { Nav, Button, NavItem, Navbar, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Navigation extends Component {
  static propTypes = { };
  render () {
      return (
        <Navbar style={{"height": "100px",backgroundColor: '#BAE7CB'}}>
        <Navbar.Header>
        <Navbar.Brand>
        </Navbar.Brand>
        <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav pullLeft>
        <LinkContainer to="index">
        <NavItem style={{"width": "200px"}} eventKey={1}>
        <h2>Home</h2>
        </NavItem>
        </LinkContainer>
        </Nav>
        <Nav pullLeft>
        <LinkContainer to="profile">
        <NavItem style={{"width": "200px"}} eventKey={2}>
        <h2>Profile</h2>
        </NavItem>
        </LinkContainer>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
        )
      }
    }
