'use strict';

// js vendor files
import angular from 'angular';
import 'angular-animate';
import 'angular-sanitize';
import 'angular-messages';
import 'angular-materialize';
import '../styles/theme.css!';

// js app files
//import './routes/home/home';

import {mainConfigModule} from 'app/config/config';

import {homeRouteModule} from 'app/routes/home/home';

export var mainModule = angular.module('mainModule', [
  'ngAnimate',
  'ngSanitize',
  'ngMessages',
  mainConfigModule.name,
  homeRouteModule.name
]).run();

angular.element(document).ready(function() {
  angular.bootstrap(document, [mainModule.name], {
    strictDi: true
  });
});
