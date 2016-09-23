var gulp = require('gulp');
var inlinesource = require('gulp-inline-source');

gulp.task('inlinecss', function () {
  return gulp.src('./app/amp.hbs')
    .pipe(inlinesource())
    .pipe(gulp.dest('dist'));
});
