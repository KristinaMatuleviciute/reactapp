'use strict'

import React from 'react';
import Nav from './Navigation';
import Footer from './Footer';

export default class Layout extends React.Component {
  render () {
    const {location} = this.props
    const containerStyle = {
      marginTop: '60px'
    }
    return (
      <div>
        {/*loading navigation bar */}
      <Nav location={location}/>
      <div className='container' style={containerStyle}>
      <div className='row'>
      <div className='col-lg-12'>
        {/* rendering children components */}
      {this.props.children}
      </div>
      </div>
      {/* loading footer component */}    
      </div>
      </div>
    )
  }
}
