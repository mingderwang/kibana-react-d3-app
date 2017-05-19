import React from 'react';
import { uiModules } from 'ui/modules'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import initialData from './initial_data';
import _ from 'lodash';

const app = uiModules.get('apps/kibana-react-d3-app', []);

app.service('$store', (kbnVersion, basePath) => {

  // Set the defaults from Kibana plugin
  initialData.app.kbnVersion = kbnVersion;
  initialData.app.basePath = basePath;

  const store = createStore(
    rootReducer
  );
  return store;
});
