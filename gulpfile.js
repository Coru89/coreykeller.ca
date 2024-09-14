const { parallel, watch, series } = require('gulp');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const sass = require('./gulp-tasks/sass.js');

const gulp = require('gulp');

const js = (cb) => {
  webpack(webpackConfig, (err, stats) => {
    if (err) console.log('Webpack', err);
    console.log(stats.toString());
    cb();
  });
};

gulp.task('copy-images', function() {
  return gulp.src('dist/images/**/*')
    .pipe(gulp.dest('src/images'));
});

const watcher = () => {
  watch('./src/scss/**/*.scss', sass);
  watch('./src/js/**/*.js', js);
};

// Default task: run both SASS and JS
exports.default = series(parallel(sass, js));

// Watcher task
exports.watch = watcher;
