// import deps
import 'reflect-metadata';
// you may need es6-shim if you get an error relating to list.fill
// import 'es6-shim';

// import { Component, View } from 'angular2/core';
import { Component, View } from '../jspm_packages/npm/angular2@2.0.0-beta.2/core';

// import { Component, View } from 'angular2/platform/browser';
import { bootstrap } from '../jspm_packages/npm/angular2@2.0.0-beta.2/platform/browser';

//create Angular component
@Component({
  selector: 'test-app'
})
@View({
  template: '<h4>Hello {{name}}</h4>'
})
class TestApp {
  name: string;
  constructor() {
    this.name = 'Angular2';
    setTimeout(() => {
      this.name = 'Angular2!!!'
    }, 1500);
  }
}

//start app
bootstrap(TestApp);
