var gulp = require('gulp');
var msg = require('gulp-msg');

gulp.task('init', ['activate-template', 'google-web-fonts', 'kinex-migration'], function (callback) {
  msg.Info('--', 'Please run `gulp ghost` to start a development Ghost server', '*');

  callback();
});
