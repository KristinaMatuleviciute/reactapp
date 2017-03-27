'use strict'

// all imported classes
import React from 'react'
import Header from './Header'


// layout component and rendering method
export default class Layout extends React.Component {
  render () {
    const {location} = this.props
    // giving style an obejct
    const containerStyle = {
      marginTop: '60px'
    }
    // header rendering DOM components
    return (
      <div className="container-fluid main-wrap">
      {/* loading header componant */}
      <Header/>
      {/*loading navigation bar */}
      <Nav location={location}/>
      <div className='container' style={containerStyle}>
      <div className='row'>
      <div className="panel panel-default">
        <div class="panel-body">
          {/* rendering children components */}
        {this.props.children}
        </div>
      </div>
      </div>
      {/* loading footer component */}
      <Footer/>
      </div>
    </div>
    )
  }
}
