var gulp = require('gulp');
var ghost = require('ghost');
var path = require('path');
var env = require('gulp-env');
var shell = require('gulp-shell');
var runSequence = require('run-sequence');
var config = require('../../config');

var g;

gulp.task('ghost:production', ['dist', 'symlink:production'], function () {
  g = ghost({
    config: path.join(__dirname, config.ghost.prod.config)
  });

  env({
    file: config.ghost.prod.env
  });

  g.then(function (ghostServer) {
    ghostServer.start().then(function () {
      runSequence('browser-sync:production');
    });
  })
});

gulp.task('ghost:docker', ['dist:docker'], function () {
  return gulp
    .src('')
    .pipe(shell([
      config.ghost.prod.docker
    ], {
      cwd: config.dist.docker.src
    }));
});
