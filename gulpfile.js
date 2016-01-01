var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('sass', function(){
  return sass('styles.core.scss')
    .on('error', sass.logError)
    .pipe(gulp.dest('dest'));
});

gulp.task('default', function(){
  // Code
});