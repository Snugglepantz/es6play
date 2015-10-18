var gulp = require('gulp');
var gulpHelpers = require('gulp-helpers');
var taskMaker = gulpHelpers.taskMaker(gulp);
var situation = gulpHelpers.situation();
var _ = gulpHelpers.framework('_');
var runSequence = gulpHelpers.framework('run-sequence');

var path = {
	source: 'src/**/*.js',
  index: './src/index.tpl.html',
  html: '**/*.html',
  templates: ['src/**/*.tpl.html', '!src/index.tpl.html'],
  js: 'src/**/*.js',
  routes: './src/app/routes.json',
  sass: ['src/styles/**/*.scss'],
  assets: ['./src/**/*.css', './src/**/*.svg', './src/**/*.woff', './src/**/*.ttf', './src/**/*.png', './src/**/*.ico', './src/**/*.gif', './src/**/*.jpg', './src/**/*.eot'],
  json: './src/**/*.json',
  systemConfig: './system.config.js',
  watch: './src/**',
  output: 'dist/',
  indexHtmlOutput: 'dist/index.html',
  minify: 'dist/**/*.js'
};

var serverOptions = {
  open: false,
  ui: false,
  notify: false,
  ghostMode: false,
  port: process.env.PORT || 9000,
  server: {
    baseDir: [path.output],
    routes: {
      '/system.config.js': './system.config.js',
      '/jspm_packages': './jspm_packages'
    }
  }
};

if (situation.isProduction()) {
  serverOptions = _.merge(serverOptions, {
    codeSync: false,
    reloadOnRestart: false,
    server: {
      snippetOptions: {
        rule: {
          match: /qqqqqqqqqqq/
        }
      }
    }
  });
}

var cacheBustConfig = {
  usePrefix: false,
  patterns: [
    {
      match: '<!-- PROD',
      replacement: ''
    }, {
      match: 'END -->',
      replacement: ''
    }, {
      match: '{{hash}}',
      replacement: Math.round(new Date() / 1000)
    }
  ]
};

var babelCompilerOptions = {
  modules: 'system'
};

taskMaker.defineTask('clean', {taskName: 'clean', src: path.output});

taskMaker.defineTask('sass', {taskName: 'sass', src: path.sass, dest: path.output});

taskMaker.defineTask('jshint', {taskName: 'lint', src: path.js});
taskMaker.defineTask('babel', {taskName: 'babel', src: path.js, dest: path.output, ngAnnotate: true, compilerOptions: babelCompilerOptions});
taskMaker.defineTask('ngHtml2Js', {taskName: 'html', src: path.templates, dest: path.output, compilerOptions: babelCompilerOptions});

taskMaker.defineTask('copy', {taskName: 'systemConfig', src: path.systemConfig, dest: path.output});
taskMaker.defineTask('copy', {taskName: 'index.html', src: path.index, dest: path.output, rename: 'index.html'});
taskMaker.defineTask('copy', {taskName: 'cache-bust-index.html', src: path.index, dest: path.output, rename: 'index.html', replace: cacheBustConfig});

taskMaker.defineTask('minify', {taskName: 'minify', src: path.minify, dest: path.output});
taskMaker.defineTask('htmlMinify', {taskName: 'htmlMinify-index.html', taskDeps: ['cache-bust-index.html'], src: path.indexHtmlOutput, dest: path.output});

taskMaker.defineTask('watch', {taskName: 'watch', src: path.watch, tasks: ['compile', 'index.html', 'lint']});
taskMaker.defineTask('browserSync', {taskName: 'serve', config: serverOptions, historyApiFallback: true});


gulp.task('compile', function(callback) {
  return runSequence(['sass', 'html', 'babel'], callback);
});

gulp.task('recompile', function(callback) {
  return runSequence('clean', ['compile'], callback);
});

gulp.task('run', function(callback) {
  if (situation.isProduction()) {
    return runSequence('recompile', 'routeBundler', 'cache-bust-index.html', 'htmlMinify-index.html', 'minify', 'serve', callback);
  } else if (situation.isDevelopment()) {
    return runSequence('recompile', 'lint', 'index.html', 'serve', 'watch', callback);
  }
});

gulp.task('default', ['run']);
