System.config({
  defaultJSExtensions: true,
  transpiler: "traceur",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "angular": "github:angular/bower-angular@1.5.1",
    "angular-animate": "npm:angular-animate@1.5.1",
    "angular-aria": "npm:angular-aria@1.5.1",
    "angular-material": "npm:angular-material@1.0.6",
    "angular-messages": "github:angular/bower-angular-messages@1.5.1",
    "angular-route": "github:angular/bower-angular-route@1.5.1",
    "angular-sanitize": "github:angular/bower-angular-sanitize@1.5.1",
    "babel": "npm:babel-core@5.8.35",
    "babel-runtime": "npm:babel-runtime@5.8.35",
    "core-js": "npm:core-js@1.2.6",
    "css": "github:systemjs/plugin-css@0.1.20",
    "font-awesome": "npm:font-awesome@4.5.0",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "text": "github:systemjs/plugin-text@0.0.4",
    "traceur": "github:jmcriffey/bower-traceur@0.0.93",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.93",
    "github:angular/bower-angular-animate@1.5.1": {
      "angular": "github:angular/bower-angular@1.5.1"
    },
    "github:angular/bower-angular-aria@1.5.1": {
      "angular": "github:angular/bower-angular@1.5.1"
    },
    "github:angular/bower-angular-messages@1.5.1": {
      "angular": "github:angular/bower-angular@1.5.1"
    },
    "github:angular/bower-angular-route@1.5.1": {
      "angular": "github:angular/bower-angular@1.5.1"
    },
    "github:angular/bower-angular-sanitize@1.5.1": {
      "angular": "github:angular/bower-angular@1.5.1"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:angular-animate@1.5.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:angular-material@1.0.6": {
      "angular": "github:angular/bower-angular@1.5.1",
      "angular-animate": "github:angular/bower-angular-animate@1.5.1",
      "angular-aria": "github:angular/bower-angular-aria@1.5.1",
      "angular-messages": "github:angular/bower-angular-messages@1.5.1",
      "css": "github:systemjs/plugin-css@0.1.20"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.35": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:font-awesome@4.5.0": {
      "css": "github:systemjs/plugin-css@0.1.20"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
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
