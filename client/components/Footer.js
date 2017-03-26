'use strict';

import React from 'react';
export default class Footer extends React.Component {
  render () {
    return (
      <footer className='footer txt-small txt-dimmed mb mt txt-center has-icon' role='contentinfo'>
        <div className='container-fluid'>
          <a href='https://github.com/KristinaMatuleviciute/reactapp/issues' className='icon icon-bug icon-dimmed'></a>
          <p className='m0'>{'MIT. Copyright (c) 2017'}</p>
        </div>
      </footer>
    )
  }
}
