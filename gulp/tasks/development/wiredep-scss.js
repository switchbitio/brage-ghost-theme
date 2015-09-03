var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var config = require('../../config').wiredepScss;

gulp.task('wiredep:scss', function () {
  return gulp
    .src(config.src)
    .pipe(wiredep({
      ignorePath: /^(\/|\.+(?!\/[^\.]))+\.+/,
      fileTypes: {
        scss: {
          replace: {
            scss: '@import "app{{filePath}}";'
          }
        }
      }
    }))
    .pipe(gulp.dest(config.dest));
});
