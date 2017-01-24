var path = require('path'),
    gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    csso = require('gulp-csso'),
    flatten = require('gulp-flatten'),
    nunjucks = require('gulp-nunjucks'),
    browserSync = require('browser-sync').create();

var dst = {
    font: './docs/font',
    scss: './docs/css',
    templates: './docs/'
};

var paths = {
    font: './font/**/*{.eot,.ttf,.woff,.woff2}',
    templates: './templates/**/*.html',
    scss: [
        './font/**/*.css',
        './scss/**/*.scss'
    ]
};

var sassOptions = {
    outputStyle: 'nested',
    includePaths: [
        path.join(__dirname, 'flexy'),
        path.join(__dirname, 'node_modules', 'modularscale-sass', 'stylesheets')
    ]
};

gulp.task('scss', function () {
    gulp.src(paths.scss)
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(autoprefixer())
        // .pipe(csso())
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(dst.scss))
        .pipe(browserSync.stream());
});

gulp.task('font', function () {
    gulp.src(paths.font)
        .pipe(flatten())
        .pipe(gulp.dest(dst.font));
});

gulp.task('templates', function () {
    gulp.src(paths.templates)
        .pipe(nunjucks.compile({

        }))
        .pipe(gulp.dest(dst.templates));
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
    gulp.watch('./templates/**/*.html', ['templates']);

    gulp.watch('./docs/**/*').on('change', browserSync.reload);
});

gulp.task('default', function () {
    return gulp.start('scss', 'templates');
});