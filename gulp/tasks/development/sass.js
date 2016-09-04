var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var neat = require("bourbon-neat").includePaths;
var bourbon = require("bourbon").includePaths;
var config = require('../../config').sass;

gulp.task('sass', function () {
  return gulp
    .src(config.src)
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: ['sass'].concat(neat).concat(bourbon)
    }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(config.dest));
});
