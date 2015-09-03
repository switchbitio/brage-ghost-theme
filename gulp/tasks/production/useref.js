var gulp = require('gulp');
var useref = require('gulp-useref');
var config = require('../../config').useref;

gulp.task('useref', function () {
  var assets = useref.assets();

  return gulp
    .src(config.src)
    .pipe(assets)
    .pipe(assets.restore())
    .pipe(useref())
    .pipe(gulp.dest(config.dest));
});
