var gulp = require('gulp');
var cdnizer = require("gulp-cdnizer");
var config = require('../../config').cdnize;

gulp.task('cdnize', function () {
  return gulp
    .src(config.src)
    .pipe(cdnizer(config.files))
    .pipe(gulp.dest(config.dest));
});
