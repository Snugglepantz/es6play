/** CSS **/
import 'bootstrap/css/bootstrap.css!';
import 'font-awesome';
import 'assets/app.css!';


import 'jquery';
import 'tether';
import 'bootstrap';
import angular from 'angular';
import main from './main';

/**
 * Manually bootstrap the application when AngularJS and
 * the application classes have been loaded.
 */
angular
    .element( document )
    .ready( function() {
        var body = document.getElementsByTagName("body")[0];
        angular.bootstrap( body, [ main.name ], { strictDi: false });
    });
