var gulp = require('gulp');
var collect = require('gulp-rev-collector');
var config = require('../../config').revCollect;

gulp.task('rev:collect', function () {
  return gulp
    .src(config.src)
    .pipe(collect())
    .pipe(gulp.dest(config.dest));
});
