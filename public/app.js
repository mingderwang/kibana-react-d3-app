import chrome from 'ui/chrome';
import modules from 'ui/modules';

import 'ui/autoload/all';
import './directives/react';
import './state/store_service';

import rootComponent from './components/app';

require('./main.less');

var app = require('ui/modules').get('apps/kibana-react-app', []);

require('ui/routes').enable();
require('ui/routes')
  .when('/', {
    template: require('plugins/kibana-react-app/index.html')
  });

app
.controller('kibanaReact', function ($scope, timefilter) {
  $scope.component = rootComponent;
});
