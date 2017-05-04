'use strict';

import React from 'react';
import { Nav, Button } from 'react-bootstrap'
import EditTable from './EditTable'
import Profile from './Profile'

export default class Row extends React.Component {
  constructor(props) {
    super(props)
  }
  handleRemove(props) {
    this.props.onDelete( this.props.item );
    return false
  }
  viewProfile(props) {
    this.props.onViewprofile( this.props.item._id );
    return false
  }
  render (){
    return (
      <tr>
      <td><Button bsStyle="info" style={{"marginTop": "0px"}} onClick={this.viewProfile.bind(this)}><span>{this.props.item.name}</span></Button></td>
      <td>{this.props.item.address}</td>
      <td>{this.props.item.phone_number}</td>
      <td>{this.props.item.email}</td>
      <td>{this.props.item.age}</td>
      <td><EditTable item={this.props.item}/></td>
      <td><Button bsStyle="danger" style={{"marginTop": "0px"}} onClick={this.handleRemove.bind(this)}><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></Button></td>
      </tr>
    )
  }
}
