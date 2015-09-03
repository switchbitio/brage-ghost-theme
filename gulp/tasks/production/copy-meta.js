var gulp = require('gulp');
var config = require('../../config').copy.meta;

gulp.task('copy:meta', function () {
  return gulp
    .src(config.src)
    .pipe(gulp.dest(config.dest));
});
