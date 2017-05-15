import chrome from 'ui/chrome';
import { uiModules } from 'ui/modules'

import 'ui/autoload/all';
import './directives/react';
import './state/store_service';

import rootComponent from './components/container';

require('./main.css');

var app = uiModules.get('apps/kibana-react-d3-app', []);

require('ui/routes').enable();
require('ui/routes')
  .when('/', {
    template: require('plugins/kibana-react-d3-app/index.html')
  });

app
.controller('kibanaReact', function ($scope, timefilter) {
  $scope.component = rootComponent;
});
