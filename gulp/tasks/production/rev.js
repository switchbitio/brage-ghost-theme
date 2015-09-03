var gulp = require('gulp');
var rev = require('gulp-rev');
var config = require('../../config').rev;

gulp.task('rev', function () {
  return gulp
    .src(config.src, {base: config.dest})
    .pipe(gulp.dest(config.dest))
    .pipe(rev())
    .pipe(gulp.dest(config.dest))
    .pipe(rev.manifest({path: 'manifest.json'}))
    .pipe(gulp.dest(config.dest));
});
