const gulp = require('gulp');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');

gulp.task('minify-css', function () {
  return gulp.src('src/css/*.css')
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' })) // Adiciona o sufixo .min ao arquivo CSS minificado
    .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function () {
  gulp.watch('src/css/*.css', gulp.series('minify-css')); // Observa os arquivos CSS na pasta src/css
});

gulp.task('default', gulp.series('minify-css', 'watch'));
