//import 'assets/app.css!'
//import '.././assets/b.scss!';
import angular from 'angular';


/* Components */
import test from './components/test/test.component';

/* */

let modules = [/* Libraries */].concat([/* Application Modules */]);

export default angular.module('app', [])
    .component('test', test)
    .run();
