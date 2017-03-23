'use strict';

import React from 'react';
import Row from './Row';
import Jsonic from 'jsonic';
import { Nav, Button, NavItem, Checkbox, Navbar, NavDropdown, MenuItem, Table, Modal, PageHeader, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

export default class ContantTable extends React.Component {
  constructor() {
    super();
    this.state = { name: '', surname:'', id: '', showModal: false, items: [] };
    this.close = this.close.bind(this);
    this.open= this.open.bind(this);
    this.handleRemove= this.handleRemove.bind(this);
    this.loadData = this.loadData.bind(this);
  }

  loadData(){
    //var id = localStorage.getItem('id');
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3010/submit',
      dataType: 'json',
      success: (data) =>{
        console.log('resdata', data)
         if (this.loadInterval != false){
           this.setState({items:data});
           console.log('4:', JSON.stringify(items))
        }
      },
      error: (xhr, status, err) => {
      //  console.log('err', err )
      }
    });
  }

   close() {
        if (this.loadInterval != false){
          this.setState({ showModal: false });
        }
      }

   open() {
        if (this.loadInterval != false){
          this.setState({ showModal: true });
        }
      }

    componentDidMount() {
       this.loadData();
       this.loadInterval = setInterval(this.loadData, 2000);

      }

    componentWillUnmount () {
        clearInterval(this.loadInterval);
      }

    handleSubmit (event) {
      event.preventDefault();
      var name = this.state.name;
      var surname = this.state.surname;
      var id = Date();
      var total = {id, name, surname};
      var goodJson = Jsonic(total);
      $.ajax({
        type: 'POST',
        url: '/submit',
        data: goodJson,
        success: function(data){
          console.log('submited data', JSON.stringify(data));
        },
        error: (xhr, status, err) => {
          console.error('we have an error: ', status, err.toString());
        }
      })
      if (this.loadInterval != false){
        this.setState({  id: '', name: '', surname: ''});
        this.setState({ showModal: false });
      }
      this.loadData();
      this.forceUpdate();
      window.location = '/#/table';

    }

    handleChange (name, event) {
        var change = {};
        change[name] = event.target.value;
        if (this.loadInterval != false){
          this.setState(change);
        }
      }

    handleRemove(item) {
        var id = item.id
        if(confirm('Are you sure you want to delete  ' + item.name + ' ?')){
          $.ajax({
            type: 'DELETE',
            url: '/server/delete/'+id,
            data: id,
            success: function(data){

            },
            error: (xhr, status, err) => {
              var responseText = jQuery.parseJSON(xhr.responseText);
              console.error('we have an error: ', status, err.toString());
            }
          });
        //  this.loadData();
          this.forceUpdate();
          window.location = '/#/table';
        }
      }

        render () {
          var rows = [];
          var that = this;
          var items = this.state.items;
          console.log('iii', items)
          items.forEach(function(item){
            console.log('2222', JSON.stringify(item.user.id));
            rows.push(<Row key={JSON.stringify(item.user.id)} item={item} onDelete={that.handleRemove}/>);
          });
          var total = this.state.name + ' ' +  this.state.surname;
          return (<div>
              <div>
            <h1>users</h1>
             {this.state.item}
              </div>
            <Table className="tableSmall table-striped ">
            <thead>
            <tr>
            <td colSpan="5" ><b>Users</b><Button bsStyle="info"  className="btn pull-right" id="add"
            onClick={this.open} > <span className="glyphicon glyphicon-plus" aria-hidden="true"></span></Button> </td>
            </tr>
            <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Edit</th>
            <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {rows}
            </tbody>
            </Table>
            <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
            <Modal.Title>Add </Modal.Title>
            </Modal.Header>
            <Modal.Body style = {{ "display": "relative"}}>
            <div>
            <div style={{"display" : "inline"}}>
            <form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlId="formBasicText" role="form" >

            <ControlLabel>Name</ControlLabel>
            <FormControl
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Enter Name"
            onChange={this.handleChange.bind(this, 'name')}
            required = {true}
            />

            <ControlLabel>Surname: </ControlLabel>
            <FormControl type="text" name="surname"
            value={this.state.surname}
            placeholder="Enter surname"
            onChange={this.handleChange.bind(this, 'surname')}
            required = {true}/><br/>

            <Button bsStyle="info" type="submit"   >Add </Button>
            </FormGroup>

            </form>

            </div>
            </div>
            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
            </Modal>
            </div>
          )
        }
      }
