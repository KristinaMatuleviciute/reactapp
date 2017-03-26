'use strict'

import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const priorities = [];
const priorityTypes = [
  'son',
  'daughter',
  'wife',
  'husband',
  'partner',
  'grandmother',
  'granfather',
  'friend'
   ];


function addJobs(quantity) {
  const startId = priorities.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    priorities.push({
      id: id,
      name: 'Kelly ',
      relation: 'friend',
      phone: '0851725344',
      address: '23 Viemount, Waterford',
      birthday: '22 04 1977'
    });
  }
}

addJobs(1);

function onAfterDeleteRow(rowKeys) {
  alert('The rowkey you drop: ' + rowKeys);
}
const options = {
  afterDeleteRow: onAfterDeleteRow,
};

const selectRowProp = {
  mode: 'checkbox',
  clickToSelect: true,
  onSelect: onRowSelect
};

const cellEditProp = {
  mode: 'click'
};

function onRowSelect(row, isSelected, e) {
  let rowStr = '';
  for (const prop in row) {
    rowStr += prop + ': "' + row[prop] + '"';
  }
  console.log(rowStr);
}

export default class Profile extends React.Component {

  render() {
    return (
      <div className="container">
      <BootstrapTable data={priorities} selectRow={selectRowProp} ref='table' cellEdit={ cellEditProp } insertRow={ true } deleteRow={ true } exportCSV={ true } options={ options } striped hover condensed>
          <TableHeaderColumn dataField='name' isKey={ true } editable={ { type: 'textarea' } }>Name</TableHeaderColumn>
          <TableHeaderColumn dataField='relation' editable={ { type: 'select', options: { values: priorityTypes } } }>Relation</TableHeaderColumn>
          <TableHeaderColumn dataField='phone' editable={ { type: 'textarea' } }>Phone</TableHeaderColumn>
          <TableHeaderColumn dataField='address' editable={ { type: 'textarea' } }>Adress</TableHeaderColumn>
          <TableHeaderColumn dataField='birthday' editable={ { type: 'textarea' } }>Birthday</TableHeaderColumn>
      </BootstrapTable>
     </div>
    );
  }
}
