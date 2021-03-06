'use strict'

import React from 'react';
import quote from '../assets/img/quote.jpg';
import buterfly from '../assets/img/buterfly.jpg';
import balance from '../assets/img/balance.jpg';
import surface from '../assets/img/surface.jpg';
import water from '../assets/img/water.jpg';
import billgates from '../assets/img/billgatse.jpg';
import conversation from '../assets/img/conversation.jpg';
import breathe from '../assets/img/breathe.jpg';
import justbreathe from '../assets/img/justbreathe.jpg';
import life from '../assets/img/life.jpg';
import miracle from '../assets/img/miracle.jpg';
import nature from '../assets/img/nature.jpg';
import nice from '../assets/img/nice.jpg';
import wolfes from '../assets/img/wolfes.jpg';
import rukas from '../assets/img/rukas.jpg';
import permision from '../assets/img/permision.jpg';
import Slider from 'react-slick';

export default class Gallery extends React.Component {
  render () {
    var settings = {
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div style={{backgroundColor: '#E3F5EA', width: '100%'}}>
      <div className='slideshow' style={{'padding': '20px'}} >
      <Slider {...settings}>
          <div><img className='picture' style={{'width': '300px', 'hight': '200px'}} src={justbreathe} /></div>
        	<div><img className='picture' style={{'width': '300px', 'hight': '200px'}} src={quote} /></div>
          <div><img className='picture' style={{'width': '300px', 'hight': '200px'}} src={buterfly} /></div>
          <div><img className='picture' style={{'width': '300px', 'hight': '200px'}} src={balance} /></div>
          <div><img className='picture' style={{'width': '300px', 'hight': '200px'}} src={surface} /></div>
          <div><img className='picture' style={{'width': '300px', 'hight': '200px'}} src={water} /></div>
          <div><img className='picture' style={{'width': '300px', 'hight': '200px'}} src={billgates} /></div>
          <div><img className='picture' style={{'width': '300px', 'hight': '200px'}} src={conversation} /></div>
          <div><img className='picture' style={{'width': '300px', 'hight': '200px'}} src={breathe} /></div>
          <div><img className='picture' style={{'width': '300px', 'hight': '200px'}} src={life} /></div>
          <div><img className='picture' style={{'width': '300px', 'hight': '200px'}} src={miracle} /></div>
          <div><img className='picture' style={{'width': '300px', 'hight': '200px'}} src={wolfes} /></div>
          <div><img className='picture' style={{'width': '300px', 'hight': '200px'}} src={nature} /></div>
          <div><img className='picture' style={{'width': '300px', 'hight': '200px'}} src={nice} /></div>
          <div><img className='picture' style={{'width': '300px', 'hight': '200px'}} src={rukas} /></div>
          <div><img className='picture' style={{'width': '300px', 'hight': '200px'}} src={permision} /></div>
      </Slider>
      </div>
      </div>
    )
  }
}
