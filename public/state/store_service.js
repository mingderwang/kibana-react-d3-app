import React from 'react';
import modules from 'ui/modules';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Reducer from './reducers';
import rootReducer from './timer_reducer';
import initialTimer from './initial_timer';
import _ from 'lodash';
import reducer from '../lib/reducer.js';

const app = modules.get('apps/kibana-react-d3-app');

app.service('$store', (kbnVersion, basePath) => {

  // Set the defaults from Kibana plugin
  initialTimer.app.kbnVersion = kbnVersion;
  initialTimer.app.basePath = basePath;

  const store = createStore(
    reducer,
    initialTimer,
    applyMiddleware(thunk)
  );

  return store;
});
