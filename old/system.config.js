System.config({
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ],
    "stage": 1
  },
  "paths": {
    "github:*": "../jspm_packages/github/*.js",
    "npm:*": "../jspm_packages/npm/*.js",
    "*": "*.js"
  },
  "buildCSS": true,
  "separateCSS": false
});

System.config({
  "map": {
    "Dogfalo/materialize": "github:Dogfalo/materialize@0.97.0",
    "angular": "github:angular/bower-angular@1.4.7",
    "angular-animate": "npm:angular-animate@1.4.7",
    "angular-local-storage": "npm:angular-local-storage@0.2.2",
    "angular-material": "github:angular/bower-material@0.11.4",
    "angular-material-icons": "npm:angular-material-icons@0.6.0",
    "angular-materialize": "github:krescruz/angular-materialize@master",
    "angular-messages": "npm:angular-messages@1.4.7",
    "angular-mocks": "npm:angular-mocks@1.4.7",
    "angular-sanitize": "npm:angular-sanitize@1.4.7",
    "angular-ui-router": "github:angular-ui/ui-router@0.2.15",
    "babel": "npm:babel-core@5.8.25",
    "babel-runtime": "npm:babel-runtime@5.8.25",
    "core-js": "npm:core-js@0.9.18",
    "css": "github:systemjs/plugin-css@0.1.16",
    "font-awesome": "npm:font-awesome@4.4.0",
    "jquery": "github:components/jquery@2.1.4",
    "json": "github:systemjs/plugin-json@0.1.0",
    "krescruz/angular-materialize": "github:krescruz/angular-materialize@master",
    "materialize": "github:Dogfalo/materialize@0.97.1",
    "materialize-css": "npm:materialize-css@0.97.1",
    "oclazyload-systemjs-router": "github:lookfirst/oclazyload-systemjs-router@1.2.2",
    "text": "github:systemjs/plugin-text@0.0.2",
    "github:Dogfalo/materialize@0.97.0": {
      "css": "github:systemjs/plugin-css@0.1.16",
      "jquery": "github:components/jquery@2.1.4"
    },
    "github:angular-ui/ui-router@0.2.15": {
      "angular": "github:angular/bower-angular@1.4.7"
    },
    "github:angular/bower-angular-animate@1.4.7": {
      "angular": "github:angular/bower-angular@1.4.7"
    },
    "github:angular/bower-angular-aria@1.4.7": {
      "angular": "github:angular/bower-angular@1.4.7"
    },
    "github:angular/bower-material@0.11.4": {
      "angular": "github:angular/bower-angular@1.4.7",
      "angular-animate": "github:angular/bower-angular-animate@1.4.7",
      "angular-aria": "github:angular/bower-angular-aria@1.4.7",
      "css": "github:systemjs/plugin-css@0.1.16"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:lookfirst/oclazyload-systemjs-router@1.2.2": {
      "angular": "github:angular/bower-angular@1.4.7",
      "angular-ui-router": "github:angular-ui/ui-router@0.2.15",
      "oclazyload": "github:ocombe/ocLazyLoad@1.0.6",
      "ui-router-extras": "github:christopherthielen/ui-router-extras@0.0.13"
    },
    "npm:angular-animate@1.4.7": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:angular-material-icons@0.6.0": {
      "angular": "npm:angular@1.5.0-beta.0"
    },
    "npm:angular@1.5.0-beta.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.25": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:font-awesome@4.4.0": {
      "css": "github:systemjs/plugin-css@0.1.16"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:materialize-css@0.97.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});

