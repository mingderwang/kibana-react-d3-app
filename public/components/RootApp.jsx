import chrome from 'ui/chrome';

import { HashRouter } from 'react-router-dom'
import React, { Component } from 'react';
import Home from './home'

export default class extends Component {
    render() {
      return (
        <HashRouter>
          <Home/>
        </HashRouter>
    );
  }
}
