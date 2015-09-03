var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var config = require('../../config').wiredep;

gulp.task('wiredep', function () {
  return gulp
    .src(config.src, {base: './'})
    .pipe(wiredep({
      fileTypes: {
        html: {
          replace: {
            css: '<link rel="stylesheet" href="/{{filePath}}" />',
            js: '<script src="/{{filePath}}"></script>'
          }
        }
      }
    }))
    .pipe(gulp.dest('./'));
});
