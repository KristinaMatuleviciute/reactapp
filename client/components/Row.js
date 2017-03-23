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
      <td>{this.props.item.name}</td>
      <td>{this.props.item.surname}</td>
      <td><EditTable item={this.props.item}/></td>
      <td><Button className="btn btn-secondary" style={{"marginTop": "0px"}} onClick={this.handleRemove.bind(this)}><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></Button></td>
      </tr>
    )
  }
}
