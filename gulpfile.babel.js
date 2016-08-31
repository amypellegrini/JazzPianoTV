const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const inject = require('gulp-inject');

/**
 * Desired production build steps: concat > bebel > minify > inject > serve
 *
 * Ideally we sohuld be able to use sourcemaps for debugging with client side
 * code minified and bundled in its final state, no need for a "dev" or "prod"
 * build.
 */
gulp.task('css', () => {
  let src = gulp.src('./src/**/*.css');
  return src.pipe(gulp.dest('dist'));
});

gulp.task('js', () => {
  let src = gulp.src(['./src/**/*.js', '!./src/**/*.spec.js']);
  return src
    .pipe(concat('app.js'))
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['js', 'css'], () => {
  let target = gulp.src('./src/index.html');
  let sources = gulp.src(['dist/**/*.js', 'dist/**/*.css'], { read: false });

  return target
    .pipe(inject(sources, { relative: false, ignorePath: 'dist' }))
    .pipe(gulp.dest('dist'));
});
