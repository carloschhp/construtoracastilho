const gulp = require('gulp');
const cssmin = require('gulp-cssmin');

gulp.task('minify-css', function () {
  return gulp.src('src/css/*.css')
    .pipe(cssmin())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('default', gulp.series('minify-css'));
