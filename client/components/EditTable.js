'use strict';

import React from 'react';
import Row from './Row';
import Jsonic from 'jsonic';
import { Nav, Button, NavItem, Checkbox, Navbar, NavDropdown, MenuItem, Table, Modal, PageHeader, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

export default class ContantTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', address:'', id: '', phone_number: '', email: '', age: '', showModal: false, items: [] };
    this.state.id = props.item._id;
    this.state.name = props.item.name || '';
    this.state.address = props.item.address || '';
    this.state.email= props.item.email || '';
    this.state.age = props.item.age || '';
    this.state.phone_number = props.item.phone_number;
    this.close = this.close.bind(this);
    this.open= this.open.bind(this);
    this.loadData = this.loadData.bind(this);
  }

  loadData(){
    $.ajax({
      type: 'GET',
      url: 'http://localhost:8080/api/contacts/',
      dataType: 'json',
      success: (data) =>{
         if (this.loadInterval != false){
           this.setState({items:data});
        }
      },
      error: (xhr, status, err) => {
         console.log('err', err )
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

    handleEdit (event) {
      event.preventDefault();
      var name = this.state.name;
      var address = this.state.address;
      var phone_number = this.state.phone_number;
      var email = this.state.email;
      var age = this.state.age;
      var id = this.state.id;
      var total = { name, address, phone_number, email, age};
      var goodJson = Jsonic(total);
      $.ajax({
        type: 'PUT',
        url: 'http://localhost:8080/api/contacts/'+id,
        data: goodJson,
        success: function(data){
          console.log('submited data', JSON.stringify(data));
        },
        error: (xhr, status, err) => {
          console.error('we have an error: ', status, err.toString());
        }
      })
      if (this.loadInterval != false){
        this.setState({ name: '', address: '', phone_number:'', email:'', age:''});
        this.setState({ showModal: false });
      }
      alert('You successfuly updated Contact \n '+  name)
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
        render () {
          var rows = [];
          var that = this;
          var items = this.state.items;

          if (items !== null){
            for (let item of items){

            rows.push(<Row key={item._id} item={item} onDelete={that.handleRemove}/>);
          };
        }
          //var total = this.state.name + ' ' +  this.state.address;
          return <div>

            <Button className="btn" bsStyle="primary" style={{"marginTop": "0px"}}
            onClick={this.open}><span className="glyphicon glyphicon-edit" aria-hidden="true"></span></Button>

            <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
            <Modal.Title>Edit </Modal.Title>
            </Modal.Header>
            <Modal.Body style = {{ "display": "relative"}}>
            <div>
            <div style={{"display" : "inline"}}>
            <form onSubmit={this.handleEdit.bind(this)}>
            <FormGroup controlId="formBasicText" role="form" >

            <ControlLabel>Name</ControlLabel>
            <FormControl type="text" name="name"
            value={this.state.name}
            placeholder="Enter Name"
            onChange={this.handleChange.bind(this, 'name')}
            required = {true}/><br/>

            <ControlLabel>Address: </ControlLabel>
            <FormControl type="text" name="address"
            value={this.state.address}
            placeholder="Enter address"
            onChange={this.handleChange.bind(this, 'address')}
            required = {true}/><br/>

            <ControlLabel>Phone No: </ControlLabel>
            <FormControl type="text" name="phone_number"
            value={this.state.phone_number}
            placeholder="Enter Phone number eg. : 0851652342"
            onChange={this.handleChange.bind(this, 'phone_number')}
            required = {true}/><br/>

            <ControlLabel>Email: </ControlLabel>
            <FormControl type="email" name="email"
            value={this.state.email}
            placeholder="Enter email eg. : name@gmail.com"
            onChange={this.handleChange.bind(this, 'email')}
            required = {true}/><br/>

            <ControlLabel>Age: </ControlLabel>
            <FormControl type="text" name="age"
            value={this.state.age}
            placeholder="Enter age"
            onChange={this.handleChange.bind(this, 'age')}
            required = {true}/><br/>

            <Button bsStyle="info" type="submit"> Edit </Button>
            </FormGroup>

            </form>
            </div>
            </div>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
            </Modal>
          </div>
        }
      }
