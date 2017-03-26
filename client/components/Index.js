'use strict';

import React from 'react';
import as from '../assets/img/as.jpg'

export default class Index extends React.Component {
  render () {
    return (
      <a href="#"><img className='picture' style={{'width': '400px'}} src={as}/></a>
    )
  }
}
