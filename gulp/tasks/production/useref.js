var gulp = require('gulp');
var useref = require('gulp-useref');
var config = require('../../config').useref;

gulp.task('useref', function () {
  return gulp
    .src(config.src)
    .pipe(useref())
    .pipe(gulp.dest(config.dest));
});
