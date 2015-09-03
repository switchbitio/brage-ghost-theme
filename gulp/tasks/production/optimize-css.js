var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var size = require('gulp-size');
var config = require('../../config').optimizeCss;

gulp.task('optimize:css', function () {
  return gulp
    .src(config.src)
    .pipe(minifyCss())
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});
