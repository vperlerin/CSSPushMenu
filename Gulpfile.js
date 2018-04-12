var gulp = require('gulp');
var sass = require('gulp-sass');
var run = require('gulp-run');
var notify = require('gulp-notify');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var log = require('fancy-log'); 
var watch = require('gulp-watch'); 
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');

gulp.task('scss', function() {
    return gulp.src('./src/scss/mobilemenu.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(autoprefixer())
        .pipe(sass({ style: 'ulgligfy' }))
        .on('end', function(){ log('Almost there...'); })
        .pipe(minifycss())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/css'))
        .on('end', function(){ log('Done!'); });
});


gulp.task('watch', function () {
    gulp.watch('./src/scss/**/*.scss', ['scss']);
});

gulp.task('default', ['scss','watch']);