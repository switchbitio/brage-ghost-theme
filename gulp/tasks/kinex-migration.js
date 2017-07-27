var gulp = require('gulp');
var shell = require('gulp-shell');
var config = require('../config').kinex;

gulp.task('kinex-migration', function () {
  return gulp
    .src('')
    .pipe(shell([
      config.command
    ]));
});
