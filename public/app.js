import chrome from 'ui/chrome';
import { uiModules } from 'ui/modules'
import uiRoutes from 'ui/routes'

import 'ui/autoload/all';
import './directives/react';
import './state/store_service';

import rootComponent from './components/container';

require('./main.css');
require('./react-table.css');

var app = uiModules.get('apps/kibana-react-d3-app', []);

uiRoutes.enable();
uiRoutes
  .when('/?', {
    template: require('plugins/kibana-react-d3-app/index.html')
  })
  .when('/chart', {
    template: require('plugins/kibana-react-d3-app/index.html')
  })
  .when('/counter', {
    template: require('plugins/kibana-react-d3-app/index.html')
  })
  .when('/timer', {
    template: require('plugins/kibana-react-d3-app/index.html')
  });

app
.controller('kibanaReact', function ($scope, timefilter) {
  $scope.component = rootComponent;
});
