var gulp = require('gulp');
var replace = require('gulp-replace');
var config = require('../config').template;

gulp.task('activate-template', function () {
  return gulp
    .src('node_modules/ghost/core/server/data/schema/default-settings.json', {base : './'})
    .pipe(replace(/casper/g, config.theme))
    .pipe(gulp.dest('./'));
});
