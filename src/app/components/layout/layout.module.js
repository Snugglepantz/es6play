/**
 * Created by jphoff on 10/17/2015.
 */
'use strict';

import angular from 'angular';
import 'angular-material';
import 'angular-material-icons';

import header   from './header.tpl';
import sidenav from './sidenav.tpl';
import content from './content.tpl';
import layout from './layout.tpl';

import {LayoutService} from './layout.service';
import {LayoutController} from './layout.controller';
import siteLayout from './layout.directive';

export var layoutModule = angular.module('layoutModule', [
  'ngMaterial',
  'ngMdIcons',
  header.name,
  sidenav.name,
  content.name,
  layout.name
]).service('LayoutService', LayoutService)
  .controller('LayoutController', LayoutController)
  .directive('siteLayout', siteLayout);
