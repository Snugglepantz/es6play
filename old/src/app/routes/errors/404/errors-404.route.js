'use strict';

import angular from 'angular';
import 'angular-ui-router';
import template from './errors-404.tpl';

export var errors404RouteModule = angular.module('errors404RouteModule', [
  'ui.router',
  template.name
]).config([
  '$stateProvider',
  function errorsRoute($stateProvider) {
    $stateProvider.state('errors.404', {
      url: '/404',
      templateUrl: template.name
    });
  }
]);
