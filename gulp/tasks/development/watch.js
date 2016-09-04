var gulp = require('gulp');
var runSequence = require('run-sequence');
var config = require('../../config').watch;

gulp.task('ghost', function (callback) {
  runSequence(
    'symlink',
    'ghost:start', // sass (dependency of ghost:start) does not like it when symlink is run async
    function () {
      gulp.watch(config.templates, ['browser-sync:reload']);
      gulp.watch(config.scss, ['sass']);
      gulp.watch(config.js, ['jshint']);

      return callback;
    }
  );
});
