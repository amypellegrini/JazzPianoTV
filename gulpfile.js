const gulp = require('gulp');
const inject = require('gulp-inject');

// Desired production build steps: concat > minify > inject
// Desired dev build steps: inject > serve

gulp.task('index', function() {
  var target = gulp.src('./src/index.html');
  var sources = gulp.src(['./src/**/*.js', './src/**/*.css'], { read: false });

  return target
    .pipe(inject(sources))
    .pipe(gulp.dest('./src'));
});
