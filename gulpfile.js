var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var express = require('express');
// var sourcemaps = require('gulp-sourcemaps');

var app;
var testServer;

gulp.task('default', function() {
	startServer();
	startTestServer();

	buildJS();
	buildTests();
	
	gulp.watch('./src/**/*.js', ['js']);
	gulp.watch(['./tests/**/*.js', '!./tests/client/*'], ['tests']);
});

gulp.task('js', buildJS);
gulp.task('tests', buildTests);

function buildJS(options) {
	var options = options || {};
  var compressed = options.compressed || false;
  
  return browserify('./src/main.js')
    .bundle()
    .pipe(source('bundle.js'))
    // .pipe(sourcemaps.init({loadMaps: true}))
    // .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./public/js'));
}

function buildTests(options) {
	var options = options || {};
  var compressed = options.compressed || false;
  
  return browserify('./test/main.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./test/client/'));
}

function startServer() {
	app = express();
	app.use(express.static('public'));
	app.listen(2000);
}

function startTestServer() {
	testServer = express();
	testServer.use(express.static('test/client'));
	testServer.listen(2222);
	//build on demand: requesting file build bundle
}