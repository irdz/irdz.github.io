var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('sass', function(){
  return sass('src/sass/core.scss')
    .on('error', sass.logError)
    .pipe(gulp.dest('dest/styles'));
});

gulp.task('default', ['sass']);