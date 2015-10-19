'use strict';

// js vendor files
import angular from 'angular';
import 'angular-animate';
import 'angular-material';
import 'angular-sanitize';
import 'angular-messages';
import 'angular-material-icons';
import '../styles/theme.css!';

// Other Modules
import {mainConfigModule} from 'app/config/config';
import {homeRouteModule} from 'app/routes/home/home';
import {componentsModule} from 'app/components/components';

export var mainModule = angular.module('mainModule', [
  'ngAnimate',
  'ngSanitize',
  'ngMessages',
  'ngMaterial',
  'ngMdIcons',
  mainConfigModule.name,
  homeRouteModule.name,
  componentsModule.name
]).run();

angular.element(document).ready(function() {
  angular.bootstrap(document, [mainModule.name], {
    strictDi: true
  });
});
