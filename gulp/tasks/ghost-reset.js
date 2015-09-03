var gulp = require('gulp');
var del = require('del');
var install = require('gulp-install');
var runSequence = require('run-sequence');
var config = require('../config').reset;

gulp.task('ghost:reset', function (callback) {
  runSequence(
    'ghost:delete',
    'ghost:install',
    'init',
    callback
  )
});

gulp.task('ghost:delete', function (callback) {
  del(config.src, callback);
});

gulp.task('ghost:install', function () {
  return gulp
    .src(['./package.json'])
    .pipe(install())
});

