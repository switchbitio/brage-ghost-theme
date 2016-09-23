var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dist', function (callback) {
  runSequence(
    'delete',
    'copy:package',
    'copy:meta',
    'copy:fonts',
    [
      'wiredep',
      'wiredep:scss'
    ],
    'sass',
    'useref',
    'inlinecss',
    [
      'optimize:css',
      'optimize:js',
      'optimize:images'
    ],
    'rev',
    'rev:collect',
    'webp',
    'cdnize',
    'gzip',
    callback
  );
});
