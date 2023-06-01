const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

gulp.task('compile-scss', function () {
  return gulp.src('src/css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('compile-js', function () {
  return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('watch', function () {
  gulp.watch('src/css/*.scss', gulp.series('compile-scss'));
  gulp.watch('src/js/*.js', gulp.series('compile-js'));
});

gulp.task('default', gulp.series('compile-scss', 'compile-js', 'watch'));
