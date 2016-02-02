/**
 * Created by jphoff on 10/17/2015.
 */
'use strict';

import angular from 'angular';
import 'angular-ui-router';

import {homeIndexRouteModule} from './index/home.index.route';
import {homeLoggerRouteModule} from './logger/logger.module';

export var homeRouteModule = angular.module('homeRouteModule', [
  'ui.router',
  homeIndexRouteModule.name,
  homeLoggerRouteModule.name
  ]).config([
    '$stateProvider',
    function homeRoute($stateProvider) {
      $stateProvider.state('home', {
        abstract: true,
        template: '<ui-view></ui-view>'
      });
    }
  ]);
