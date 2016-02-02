'use strict';

import angular from 'angular';
import 'angular-ui-router';


//import {coreModule} from '../../../core/core';
import template from './home-logger.tpl';
import { LogService } from './log.service';
import { LogController } from './log.controller';
import homeComponent from './logger.component';

//class LogController {
//  constructor($log) {
//    this.$log = $log;
//  }
//
//  info(info) {
//    this.$log.info(info);
//  }
//}
//
//LogController.$inject = ['$log'];

export var homeLoggerRouteModule = angular.module('homeLoggerRouteModule', [
  'ui.router',
  template.name
]).config([
  '$stateProvider',
  function homeLogger($stateProvider) {
    $stateProvider.state('home.logger', {
      url: '/logger',
      //template: '<button ng-click="vm.info(\'Clicked\')">Click</button>',
      template: '<my-dir></my-dir>',
      //controller: LogController,
      //controllerAs: 'vm'
    })
  }
]).service('LogService', LogService)
  .directive('myDir', homeComponent);


