let path = require('path'),
    gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    data = require('gulp-data'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    autoprefixer = require('autoprefixer'),
    postcss = require('gulp-postcss'),
    flexbugs = require('postcss-flexbugs-fixes'),
    csso = require('postcss-csso'),
    flatten = require('gulp-flatten'),
    nunjucks = require('gulp-nunjucks'),
    browserSync = require('browser-sync').create(),
    version = require(path.join(__dirname, 'package.json')).version;

let dst = {
    font: './build/fonts',
    css: './build/css',
    templates: './build'
};

let paths = {
    font: [
        './node_modules/material-design-icons/iconfont/*{.eot,.ttf,.woff,.woff2}',
        './fonts/**/*{.eot,.ttf,.woff,.woff2}',
    ],
    templates: './templates/**/*.html',
    css: './scss/**/*.scss'
};

let sassOptions = {
    outputStyle: 'nested',
    includePaths: [
        path.join(__dirname, 'flexy')
    ]
};

gulp.task('css', () => {
    const plugins = [
        flexbugs,
        autoprefixer({
            browsers: [
                '>1%',
                'last 4 versions',
                'Firefox ESR',
                'not ie < 9' // React doesn't support IE8 anyway
            ],
            // cascade: false,
            flexbox: 'no-2009'
        }),
        csso
    ];

    return gulp.src(paths.css)
        .pipe(plumber())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(postcss(plugins))
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(dst.css))
        .pipe(browserSync.stream());
});

gulp.task('font', () => {
    gulp.src(paths.font)
        .pipe(flatten())
        .pipe(gulp.dest(dst.font));
});

gulp.task('templates', () => {
    return gulp.src('templates/**/*.html')
        .pipe(data(() => {
            return { version }
        }))
        .pipe(nunjucks.compile())
        .pipe(gulp.dest('build'));
});

gulp.task('server', () => {
    browserSync.init({
        server: {
            baseDir: "./build"
        },
        open: false
    });
});

gulp.task('watch', ['server'], () => {
    gulp.watch([
        path.join(__dirname, 'flexy') + '/**/*',
        paths.css
    ], ['css']);

    gulp.watch([
        './templates/**/*.html'
    ], ['templates']);

    gulp.watch(path.join(__dirname, 'build') + '/**/*')
        .on('change', browserSync.reload);
});

gulp.task('default', () => {
    return gulp.start('css', 'templates');
});