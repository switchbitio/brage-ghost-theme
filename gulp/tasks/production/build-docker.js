var gulp = require('gulp');
var shell = require('gulp-shell');
var config = require('../../config').dist.docker;

gulp.task('dist:docker', ['copy:docker'], function () {
  return gulp
    .src('')
    .pipe(shell([
      config.command
    ], {
      cwd: config.src
    }));
});
