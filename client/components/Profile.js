'use strict';

import React from 'react';
import as from '../assets/img/as.jpg'

export default class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = { name: '', address:'',
     id: '', phone_number: '', email: '',
      age: '', showModal: false, items: [] };
    this.loadProfile = this.loadProfile.bind(this);

  }

  loadProfile(item){
      var id =  localStorage.getItem('id')
    $.ajax({
      type: 'GET',
      url: 'http://localhost:8080/api/users/profile/' + id,
      dataType: 'json',
      success: (data) =>{
       console.log('data', data)
         if (this.loadInterval != false){
           this.setState({items:data});
        }
      },
      error: (xhr, status, err) => {
         console.log('err', err )
      }
    });
  }

  componentDidMount() {
     this.loadProfile();
     this.loadInterval = setInterval(this.loadData, 2000);
    }

  componentWillUnmount () {
      clearInterval(this.loadInterval);
    }


  render () {
    var info = [];
    for(var key in this.state.items){
        info.push(<p>{key} : {this.state.items[key]}</p>);
      }
    // var info = [];
    // for (var i = 0; i < this.state.items; i++) {
    //   info.push(key={i});
    // }

    return (
      <div style={{backgroundColor: '#E3F5EA', width: '100%'}}>
      <div style={{'padding': '20px'}} >
      <h2>Welcome {info.name} </h2>
      <div>{info}</div>
      </div>
      </div>
    )
  }
}
