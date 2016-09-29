/**
 * Default Gulp tasks for JazzPianoTV app.
 *
 * Desired production build steps: concat > bebel > minify > inject
 *
 * Ideally we sohuld be able to use sourcemaps for debugging with client side
 * code minified and bundled in its final state, no need for a "dev" or "prod"
 * build.
 */
const gulp = require('gulp');
const sass = require('gulp-sass');
const serve = require('gulp-serve');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const inject = require('gulp-inject');
const connect = require('gulp-connect');
const mainBowerFiles = require('main-bower-files');
const templateCache = require('gulp-angular-templatecache');

/**
 * Build css files.
 */
gulp.task('scss', () => {
  let src = gulp.src('./src/scss/main.scss');
  return src
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

/**
 * Build angular template cache.
 */
gulp.task('templates', () => {
  // fetch HTML templates to build Angular $templateCache
  return gulp.src(['./src/**/*.html', '!./**/index.html'])
    .pipe(templateCache('tpls.js', { module: 'JazzPianoTV' }))
    .pipe(gulp.dest('.tmp'));
});

/**
 * Concat js files, transpile es2015 to plain old JavaScript, build dist.
 */
gulp.task('js', ['templates'], () => {
  let src = gulp.src(['./src/**/*.js', '!./src/**/*.spec.js', '.tmp/tpls.js']);
  return src
    .pipe(concat('app.js'))
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulp.dest('dist/js'));
});

/**
 * Concat and build js vendor files.
 */
gulp.task('js-vendor', () => {
  return gulp.src([ mainBowerFiles(), './src/vendor'])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('dist/js'));
});

/**
 * Wire dependencies and build index.html.
 */
gulp.task('default', ['js-vendor', 'js', 'scss'], () => {
  let target = gulp.src('./src/index.html');
  let jsVendor = gulp.src(['dist/js/vendor.js'], { read: false });
  let sources = gulp.src(['dist/js/app.js', 'dist/**/*.css'], { read: false });

  return target
    .pipe(inject(jsVendor, { relative: false, ignorePath: 'dist', name: 'vendor' } ))
    .pipe(inject(sources, { relative: false, ignorePath: 'dist' }))
    .pipe(gulp.dest('dist'));
});

/**
 * DEV environment server.
 * @todo: What about a PROD server. To be continued...
 */
gulp.task('serve', () => {
  connect.server({
    root: 'dist',
    port: 3000,
    host: 'localhost',
    fallback: 'dist/index.html'
  });
});
