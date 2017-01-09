var path = require('path'),
    gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    csso = require('gulp-csso'),
    browserSync = require('browser-sync').create();

var dst = {
    scss: './docs/css',
    js: './docs/js',
    images: './docs/images',
    html: './docs/'
};

var paths = {
    js: './docs/js/**/*{.js}',
    images: './images/**/*{.jpg,.jpeg,.png}',
    html: './index.html',
    scss: [
        './scss/**/*.scss'
    ]
};

var sassOptions = {
    outputStyle: 'nested',
    includePaths: [
        path.join(__dirname, 'flexy')
    ]
};

gulp.task('images', function () {
    return gulp.src(paths.images)
        .pipe(gulp.dest(dst.images))
        .pipe(browserSync.stream());
});

gulp.task('scss', function () {
    return gulp.src(paths.scss)
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(autoprefixer())
        // .pipe(csso())
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(dst.scss))
        .pipe(browserSync.stream());
});

gulp.task('html', function () {
    return gulp.src(paths.html)
        .pipe(gulp.dest(dst.html));
});

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./docs"
        },
        open: false
    });
});

gulp.task('watch', ['server'], function () {
    gulp.watch(paths.scss, ['scss']);
    gulp.watch(path.join(__dirname, 'flexy') + '/**/*', ['scss']);

    gulp.watch(paths.js).on('change', browserSync.reload);
    gulp.watch(paths.html, ['html']).on('change', browserSync.reload);
});

gulp.task('default', function () {
    return gulp.start('scss');
});