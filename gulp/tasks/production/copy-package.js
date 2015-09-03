var gulp = require('gulp');
var config = require('../../config').copy.package;

gulp.task('copy:package', function () {
  return gulp
    .src(config.src)
    .pipe(gulp.dest(config.dest));
});
