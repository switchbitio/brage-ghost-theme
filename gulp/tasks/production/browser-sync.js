var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var config = require('../../config').browserSync.prod;

gulp.task('browser-sync:production', function (callback) {
  browserSync.init({
    proxy: config.proxy
  });

  callback();
});
