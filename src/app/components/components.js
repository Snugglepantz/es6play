'use strict';

import angular from 'angular';
import 'angular-material';

import {layoutModule} from './layout/layout.module';

export var componentsModule = angular.module('componentsModule', [
  'ngMaterial',
  layoutModule.name
]);
