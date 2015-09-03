var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var config = require('../../config').browserSync.dev;

gulp.task('browser-sync', function (callback) {
  browserSync.init({
    files: config.files,
    proxy: config.proxy
  });

  callback();
});

gulp.task('browser-sync:reload', function (callback) {
  browserSync.reload();

  callback();
});
