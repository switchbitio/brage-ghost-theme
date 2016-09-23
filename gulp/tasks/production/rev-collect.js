var gulp = require('gulp');
var collect = require('gulp-rev-collector');
var replace = require('gulp-replace');
var config = require('../../config').revCollect;

gulp.task('rev:collect', function () {
  return gulp
    .src(config.src)
    .pipe(collect())
    .pipe(replace(/src="\/assets([^"]*)"/g, 'src="{{asset "$1"}}"'))
    .pipe(replace(/href="\/assets([^"]*)"/g, 'href="{{asset "$1"}}"'))
    .pipe(gulp.dest(config.dest));
});
