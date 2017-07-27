var gulp = require('gulp');
var replace = require('gulp-replace');
var jsonModify = require('gulp-json-modify');
var config = require('../config').template;

gulp.task('activate-template', function () {
  return gulp
    .src('node_modules/ghost/core/server/data/schema/default-settings.json', {base : './'})
    .pipe(jsonModify({
      key: 'blog.logo.defaultValue',
      value: null
    }))
    .pipe(jsonModify({
      key: 'blog.cover_image.defaultValue',
      value: null
    }))
    .pipe(replace(/casper/g, config.theme))
    .pipe(gulp.dest('./'));
});
