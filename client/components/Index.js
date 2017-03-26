'use strict';

import React from 'react';
import as from '../assets/img/as.jpg'

export default class Index extends React.Component {
  render () {
    return (
      <div style={{backgroundColor: '#E3F5EA', width: '100%'}}>
      <div style={{'padding': '50px'}} >
      <a href="#"><img className='picture' style={{'width': '300px'}} src={as}/></a>
      <h2>Welcome </h2>
      <h4>to my personal site
      <p>My name is Kristina Matuleviciute. This is assignment for Enterprise Web development -
      application made using React, Express, Webpack. </p>
      <p> Here you will find gallery with nice pictures and quotes I like and Contact table where
       you can add or delete entries. I hope you enjoy :)  </p>
       </h4>
      </div>
      </div>
    )
  }
}
