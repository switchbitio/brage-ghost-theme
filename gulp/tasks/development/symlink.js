var gulp = require('gulp');
var symlink = require('gulp-sym');
var config = require('../../config').symlink.dev;

gulp.task('symlink', function () {
  return gulp
    .src(config.src)
    .pipe(symlink('node_modules/ghost/content/themes/' + config.theme, { force: true }));
});
