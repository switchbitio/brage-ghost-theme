var gulp = require('gulp');
var googleWebFonts = require('gulp-google-webfonts');
var config = require('../config').googleWebFonts;

gulp.task('google-web-fonts', function () {
  return gulp
    .src(config.src)
    .pipe(googleWebFonts())
    .pipe(gulp.dest(config.dest));
});
