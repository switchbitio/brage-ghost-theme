var gulp = require('gulp');
var del = require('del');
var config = require('../../config').delete;

gulp.task('delete', function () {
  del.sync(config.src);
});
