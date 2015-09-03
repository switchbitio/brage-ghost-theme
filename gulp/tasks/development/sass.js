var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var neat = require('node-neat').includePaths;
var config = require('../../config').sass;

gulp.task('sass', function () {
  browserSync.notify('Compiling Sass...');

  return gulp
    .src(config.src)
    .pipe(plumber({
      errorHandler: function (err) {
        console.log(err);
        this.emit('end');
      }
    }))
    .pipe(sass({
      includePaths: ['sass'].concat(neat)
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest(config.dest));
});
