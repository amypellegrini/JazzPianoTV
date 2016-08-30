const gulp = require('gulp');
const babel = require('gulp-babel');
const inject = require('gulp-inject');

// Desired production build steps: concat > minify > inject > serve
// Desired dev build steps: inject > serve

gulp.task('default', () => {
  let target = gulp.src('./src/index.html');
  let sources = gulp.src(['./src/**/*.js', './src/**/*.css'], { read: false });

  // @todo: replace harcoded babel config by the real one (load, etc)
  // @todo: stream babel task for js files
  return target
    .pipe(inject(sources))
    // .pipe(babel({
    //   presets: ['es2015']
    // }))
    .pipe(gulp.dest('./dist/'));
});
