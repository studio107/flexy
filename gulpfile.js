const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const flexbugs = require('postcss-flexbugs-fixes');
const csso = require('postcss-csso');
const postcss = require('gulp-postcss');
const tildeimporter = require('node-sass-tilde-importer');

const postCssOptions = [
    flexbugs(),
    autoprefixer({
        browsers: [
            '>1%',
            'last 4 versions',
            'Firefox ESR',
            'not ie < 9', // React doesn't support IE8 anyway
        ],
        flexbox: 'no-2009',
    }),
    csso(),
];

gulp.task('build', () => {
    return gulp
        .src('./assets/**/*.scss')
        .pipe(sass({
            importer: tildeimporter,
            includePath: [__dirname]
        }))
        .pipe(postcss(postCssOptions))
        .pipe(gulp.dest('./release'));
});

gulp.task('default', gulp.series('build'));
