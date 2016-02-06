import 'angular-material/angular-material.layouts.min.css!';
import 'angular-material/angular-material.min.css!';
import 'assets/app.css!'

import angular from 'angular';
import 'angular-aria';
import 'angular-animate';
import 'angular-sanitize';
import 'angular-messages';
import 'angular-route';
import 'angular-material';

import Example1Controller from './example1/Example1';
import pagination from './components/pagination/pagination';

let modules = [
  'ngAria',
  'ngAnimate',
  'ngSanitize',
  'ngMessages',
  'ngRoute',
  'ngMaterial'
].concat([]); //For modules
config.$inject = ['$mdThemingProvider'];
function config($mdThemingProvider) {
  $mdThemingProvider.definePalette('amazingPaletteName', {
    '50': 'ffebee',
    '100': 'ffcdd2',
    '200': 'ef9a9a',
    '300': 'e57373',
    '400': 'ef5350',
    '500': 'f44336',
    '600': 'e53935',
    '700': 'd32f2f',
    '800': 'c62828',
    '900': 'b71c1c',
    'A100': 'ff8a80',
    'A200': 'ff5252',
    'A400': 'ff1744',
    'A700': 'd50000',
    'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                        // on this palette should be dark or light
    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
     '200', '300', '400', 'A100'],
    'contrastLightColors': undefined    // could also specify this if default was 'dark'
  });
  $mdThemingProvider.theme('default')
    .primaryPalette('amazingPaletteName')
}

export default angular.module('app', modules)
.component('pagination', pagination)
.controller('Example1Controller', Example1Controller)
.config(config)
.run();
