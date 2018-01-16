var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var uglifyjs = require('gulp-uglifyes');
var uglifycss = require('gulp-uglifycss');
var sourcemaps = require('gulp-sourcemaps');

// Default task
gulp.task('default', ['copy-html', 'copy-images', 'styles', 'scripts-dist'], function(){
    gulp.watch('sass/**/*.scss', ['styles']);
    gulp.watch('js/**/*.js', ['scripts-dist']);
    gulp.watch('dist/index.html').on('change', browserSync.reload);
    gulp.watch('./index.html', ['copy-html']);
    gulp.watch('img/*', ['copy-images']);

    browserSync.init({
        server: './dist'
    });
});

gulp.task('dist', [
    'copy-html',
    'copy-images',
    'styles',
    'scripts-dist'
]);

// Task to handle js in production
gulp.task('scripts-dist', function(){
    return gulp.src('js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('script.js'))
        .pipe(uglifyjs())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
});

// Copy HTML to dist folder
gulp.task('copy-html', function(){
    gulp.src('./index.html')
        .pipe(gulp.dest('./dist'));
});

// Copy images to dist folder
gulp.task('copy-images', function(){
    gulp.src('img/*')
        .pipe(gulp.dest('./dist/img'));
});

// Compile sass into CSS, add vendor prefixes, and sync with browser
gulp.task('styles', function(){
    gulp.src('sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(uglifycss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
}); 