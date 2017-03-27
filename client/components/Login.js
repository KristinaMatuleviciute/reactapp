'use strict'

import React from 'react'
import IsJSON from 'is-json'
import Jsonic from 'jsonic'
import img from '../assets/img/icon-signin.svg'
import Auth from '../services/AuthService'
import Button from 'react-bootstrap/lib/Button'
import img2 from '../assets/img/beach.jpg'

export default class Login extends React.Component {
  constructor() {
    super()
    this.state = { name: '', items: [] }
    this.state = { password: '', items: [] }
  }

  handleSubmit(e) {
    e.preventDefault();
    var name = this.state.name
    var password = this.state.password
    Auth.login(this.state.name, this.state.password)
    .catch(function(err, xhr, status) {
      alert( "User " + err.responseText)
      //alert( "Unssuccessful login. Please, check your details and try again")
    });
  }

  handleChange (name, event) {
    var change = {}
    change[name] = event.target.value
    this.setState(change)
  }

  render () {
    var total = this.state.name + ' ' +  this.state.password;
    return  <div className='loginForm' style={{backgroundImage: 'url(' + img2 + ')',
     padding: '50px', width: '50%'}}>
    <h1>Please Log In:</h1>
    <form onSubmit={this.handleSubmit.bind(this)}>

    <b>Username(email):</b><br/>
    <input  type="email" name="name"
    placeholder = " email"
    required={true}
    onChange={this.handleChange.bind(this, 'name')} value={this.state.name} /><br/>

    <b>Password:</b> <br/>
    <input name="password" type="password"
    placeholder = " password"
    required={true}
    onChange={this.handleChange.bind(this, 'password')} value={this.state.password} /><br/>
    <Button type="submit" bsStyle="primary"> Sign in </Button>
    </form>
    </div>;
  }
}
