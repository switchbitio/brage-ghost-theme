var gulp = require('gulp');
var webp = require('gulp-webp');
var rename = require('gulp-rename');
var config = require('../../config').webp;

gulp.task('webp', function () {
  return gulp
    .src(config.src)
    .pipe(rename(function(filepath) {
      filepath.extname = filepath.extname + filepath.extname;
    }))
    .pipe(webp())
    .pipe(gulp.dest(config.dest));
});
