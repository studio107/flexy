var path = require('path'),
    highlightjs = require('highlight.js'),
    gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    csso = require('gulp-csso'),
    flatten = require('gulp-flatten'),
    nunjucks = require('gulp-nunjucks'),
    frontMatter = require('gulp-front-matter'),
    wrap = require('gulp-wrap'),
    marked = require('marked'),
    markdown = require('gulp-marked'),
    browserSync = require('browser-sync').create();

var dst = {
    font: './build/font',
    scss: './build/css',
    templates: './build'
};

var paths = {
    pages: './src/**/*.md',
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
    var counter = 0;
    var renderer = new marked.Renderer();
    renderer.heading = function (text, level) {
        counter += 1;
        return '<h' + level + '><a name="anchor' + counter + '" class="b-anchor" href="#anchor' + counter + '"></a>' + text + '</h' + level + '>';
    };
    renderer.code = function (code, language) {
        // Check whether the given language is valid for highlight.js.
        var validLang = !!(language && highlightjs.getLanguage(language));
        // Highlight only if the language is valid.
        var highlighted = validLang ? highlightjs.highlight(language, code).value : code;
        // Render the highlighted code with `hljs` class.
        return '<pre><code class="hljs ' + language + '">' + highlighted + '</code></pre>';
    };

    gulp.src(paths.pages)
        .pipe(frontMatter({
            property: 'meta'
        }))
        .pipe(markdown({
            sanitize: false,
            renderer: renderer
        }))
        .pipe(wrap({
            src: './templates/base.html'
        }))
        .pipe(gulp.dest(dst.templates));
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
        './templates/**/*.html',
        './src/**/*.md'
    ], ['templates']);

    gulp.watch('./build/**/*').on('change', browserSync.reload);
});

gulp.task('default', function () {
    return gulp.start('scss', 'templates');
});