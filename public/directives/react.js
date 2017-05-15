import _ from 'lodash';
import React from 'react';
import { Provider } from 'react-redux';
import { render, unmountComponentAtNode } from 'react-dom';
import { uiModules } from 'ui/modules'

const app = uiModules.get('apps/kibana-react-d3-app');
app.directive('react', ($store) => {
  return {
    restrict: 'E',
    scope: {
      component: '='
    },
    link: ($scope, $el, $attrs) => {
      const Component = $scope.component;
      render(
          <Provider store={$store}>
            <Component/>
          </Provider>
      , $el[0]);
      $scope.$on('$destroy', () => {
        unmountComponentAtNode($el[0]);
      });
    }
  };
});
