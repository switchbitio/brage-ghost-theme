var gulp = require('gulp');
var zip = require('gulp-zip');
var config = require('../../config').zip;

gulp.task('zip', function () {
  return gulp
    .src(config.src)
    .pipe(zip(config.name))
    .pipe(gulp.dest(config.dest));
});
