var gulp = require('gulp');
var config = require('../../config').copy.fonts;

gulp.task('copy:fonts', function () {
  return gulp
    .src(config.src, {base: config.base})
    .pipe(gulp.dest(config.dest));
});
