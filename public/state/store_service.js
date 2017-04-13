import React from 'react';
import modules from 'ui/modules';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import timerReducer from './timer_reducer';
import initialTimer from './initial_timer';
import _ from 'lodash';

const app = modules.get('apps/kibana-react-app');

app.service('$store', (kbnVersion, basePath) => {

  // Set the defaults from Kibana plugin
  initialTimer.app.kbnVersion = kbnVersion;
  initialTimer.app.basePath = basePath;

  const store = createStore(
    timerReducer,
    initialTimer,
    applyMiddleware(thunk)
  );

  return store;
});
