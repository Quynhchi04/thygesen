const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');

// Concatenate and minify JavaScript files
gulp.task('js', function() {
  return gulp.src('src/js/*.js')
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// Concatenate and minify CSS files
gulp.task('css', function() {
  return gulp.src('src/css/*.css')
    .pipe(concat('styles.min.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'));
});

// Optimize images
gulp.task('images', function() {
  return gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});

// Minify HTML files
gulp.task('html', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

// Watch for changes
gulp.task('watch', function() {
  gulp.watch('src/js/*.js', gulp.series('js'));
  gulp.watch('src/css/*.css', gulp.series('css'));
  gulp.watch('src/img/*', gulp.series('images'));
  gulp.watch('src/*.html', gulp.series('html'));
});

// Default task
gulp.task('default', gulp.parallel('js', 'css', 'images', 'html', 'watch'));
