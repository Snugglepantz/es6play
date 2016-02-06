SystemJS.config({
    baseURL: "/",
    defaultJSExtensions: true,
    transpiler: "babel",
    babelOptions: {
        "optional": [
            "runtime",
            "optimisation.modules.system"
        ]
    },
    paths: {
        "github:*": "jspm_packages/github/*",
        "npm:*": "jspm_packages/npm/*"
    },
    buildCSS: true,
          "packageConfigPaths": [
                    "npm:@*/*.json",
                    "npm:*.json",
                    "github:*/*.json"
          ],
          "globalEvaluationScope": false,
          "map": {
                    angular: "github:angular/bower-angular@1.5.0",
                    "angular-animate": "npm:angular-animate@1.5.0",
                    "angular-aria": "npm:angular-aria@1.5.0",
                    "angular-material": "npm:angular-material@1.0.5",
                    "angular-messages": "github:angular/bower-angular-messages@1.5.0",
                    "angular-route": "github:angular/bower-angular-route@1.5.0",
                    "angular-sanitize": "github:angular/bower-angular-sanitize@1.5.0",
                    babel: "npm:babel-core@5.8.35",
                    "babel-runtime": "npm:babel-runtime@5.8.35",
                    "core-js": "npm:core-js@1.2.6",
                    css: "github:systemjs/plugin-css@0.1.20",
                    "font-awesome": "npm:font-awesome@4.5.0",
                    fs: "github:jspm/nodelibs-fs@0.2.0-alpha",
                    path: "github:jspm/nodelibs-path@0.2.0-alpha",
                    process: "github:jspm/nodelibs-process@0.2.0-alpha",
                    text: "github:systemjs/plugin-text@0.0.4"
          },
          "packages": {
                    "github:angular/bower-angular-animate@1.5.0": {
                              "map": {
                                        "angular": "github:angular/bower-angular@1.5.0"
                              }
                    },
                    "github:angular/bower-angular-aria@1.5.0": {
                              "map": {
                                        "angular": "github:angular/bower-angular@1.5.0"
                              }
                    },
                    "github:angular/bower-angular-route@1.5.0": {
                              "map": {
                                        "angular": "github:angular/bower-angular@1.5.0"
                              }
                    },
                    "github:angular/bower-angular-sanitize@1.5.0": {
                              "map": {
                                        "angular": "github:angular/bower-angular@1.5.0"
                              }
                    },
                    "npm:angular-material@1.0.5": {
                              "map": {
                                        "angular": "github:angular/bower-angular@1.5.0",
                                        "angular-animate": "github:angular/bower-angular-animate@1.5.0",
                                        "angular-aria": "github:angular/bower-angular-aria@1.5.0",
                                        "css": "github:systemjs/plugin-css@0.1.20"
                              }
                    },
                    "npm:font-awesome@4.5.0": {
                              "map": {
                                        "css": "github:systemjs/plugin-css@0.1.20"
                              }
                    }
          }
});