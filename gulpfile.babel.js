const gulp = require('gulp');
const babel = require('gulp-babel');
const inject = require('gulp-inject');

// Desired production build steps: concat > minify > inject
// Desired dev build steps: inject > serve

gulp.task('default', () => {
  var target = gulp.src('./src/index.html');
  var sources = gulp.src(['./src/**/*.js', './src/**/*.css'], { read: false });

  return target
    .pipe(inject(sources))
    // @todo: replace harcoded babel config by the real one (load, etc)
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('./dist'));
});
