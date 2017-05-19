import chrome from 'ui/chrome';

import { HashRouter, Switch, Route, Link } from 'react-router-dom'
import React, { Component } from 'react';
import App2 from './home'

export default class extends Component {
    render() {
      return (
        <HashRouter>
          <App2/>
        </HashRouter>
    );
  }
}
