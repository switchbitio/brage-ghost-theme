var gulp = require('gulp');
var ghost = require('ghost');
var path = require('path');
var runSequence = require('run-sequence');
var config = require('../../config').ghost.dev;

var g;

gulp.task('ghost:start', function (callback) {
  runSequence(
    [
      'wiredep',
      'wiredep:scss'
    ],
    'sass',
    function () {
      g = ghost({
        config: path.join(__dirname, config.config)
      });

      g.then(function (ghostServer) {
        ghostServer.start().then(function () {
          runSequence('browser-sync');
        });
      });

      callback();
    }
  );
});

gulp.task('ghost:restart', function (callback) {
  g.then(function (ghostServer) {
    ghostServer.stop().then(function (ghostServer) {
      ghostServer.start();
    });
  });

  callback();
});
