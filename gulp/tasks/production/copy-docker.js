var gulp = require('gulp');
var config = require('../../config').copy.dist;

gulp.task('copy:docker', ['dist'], function () {
  return gulp
    .src(config.src)
    .pipe(gulp.dest(config.docker.dest));
});
