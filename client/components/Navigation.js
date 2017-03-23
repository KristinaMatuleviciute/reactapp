'use strict'

import React, { Component, PropTypes } from 'react';
import Home from './Index';
import Profile from './Profile';
import List from './ContactTable';
import { Route, RouteHandler, Link } from 'react-router';
import { Nav, Button, NavItem, Navbar, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Navigation extends Component {
  static propTypes = { };
  render () {
      return (
        <Navbar style={{ backgroundColor: '#BAE7CB'}}>
        <Navbar.Header>
        <Navbar.Brand>
        </Navbar.Brand>
        <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav pullLeft>
        <LinkContainer to="index">
        <NavItem style={{backgroundColor: '#BAE7CB', width: '150px'}} eventKey={1}>
        <h2>Home</h2>
        </NavItem>
        </LinkContainer>
        </Nav>
        <Nav pullLeft>
        <LinkContainer to="profile">
        <NavItem style={{backgroundColor: '#BAE7CB', width: '150px'}} eventKey={2}>
        <h2>Contacts</h2>
        </NavItem>
        </LinkContainer>
        </Nav>
        <Nav pullLeft>
        <LinkContainer to="gallery">
        <NavItem style={{backgroundColor: '#BAE7CB', width: '150px'}} eventKey={3}>
        <h2>Gallery</h2>
        </NavItem>
        </LinkContainer>
        </Nav>
        <Nav pullLeft>
        <LinkContainer to="table">
        <NavItem style={{backgroundColor: '#BAE7CB', width: '150px'}} eventKey={3}>
        <h2>List</h2>
        </NavItem>
        </LinkContainer>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
        )
      }
    }
