'use strict';

import angular from 'angular';
import 'angular-ui-router';

import template from './home-index.tpl';

export var homeIndexRouteModule = angular.module('homeIndexRouteModule', [
  'ui.router',
  template.name
]).config([
  '$stateProvider',
  function homeRoute($stateProvider) {
    $stateProvider.state('home.index', {
      url: '/',
      template: '<site-layout></site-layout>'
    });
  }
]);
