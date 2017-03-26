'use strict';

import React from 'react';
import { Nav, Button } from 'react-bootstrap'
import EditTable from './EditTable'

export default class Row extends React.Component {
  constructor(props) {
    super(props)
  }
  handleRemove(props) {
    this.props.onDelete( this.props.item );
    return false
  }
  viewAdmins(props) {
    this.props.onViewAdmins( this.props.item.id );
    return false
  }
  render (){
    return (
      <tr>
      <td>{this.props.item.user.name}</td>
      <td>{this.props.item.user.surname}</td>
      <td>{this.props.item.user.email}</td>
      <td>{this.props.item.user.phone}</td>
      <td>edit</td>
      <td><Button bsStyle="danger" style={{"marginTop": "0px"}} onClick={this.handleRemove.bind(this)}><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></Button></td>
      </tr>
    )
  }
}
