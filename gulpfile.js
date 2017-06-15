var path = require('path'),
    gulp = require('gulp'),
    data = require('gulp-data'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    csso = require('gulp-csso'),
    flatten = require('gulp-flatten'),
    nunjucks = require('gulp-nunjucks'),
    browserSync = require('browser-sync').create();

var dst = {
    font: './build/font',
    scss: './build/css',
    templates: './build'
};

var paths = {
    font: './fonts/**/*{.eot,.ttf,.woff,.woff2}',
    templates: './templates/**/*.html',
    scss: [
        './font/**/*.css',
        './scss/**/*.scss'
    ]
};

var sassOptions = {
    outputStyle: 'nested',
    includePaths: [
        path.join(__dirname, 'flexy')
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
    return gulp.src('templates/**/*.html')
        .pipe(data(() => {
            return {
                version: require(path.join(__dirname, 'package.json')).version
            }
        }))
        .pipe(nunjucks.compile())
        .pipe(gulp.dest('build'));
});

gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: "./build"
        },
        open: false
    });
});

gulp.task('watch', ['server'], function () {
    gulp.watch(paths.scss, ['scss']);
    gulp.watch(path.join(__dirname, 'flexy') + '/**/*', ['scss']);
    gulp.watch([
        './templates/**/*.html'
    ], ['templates']);

    gulp.watch(path.join(__dirname, 'build') + '/**/*')
        .on('change', browserSync.reload);
});

gulp.task('default', function () {
    return gulp.start('scss', 'templates');
});