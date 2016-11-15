/* -------------------------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////

Style Guide Server - Gulp Processes

////////////////////////////////////////////////////////////////////////////////////////////////////
------------------------------------------------------------------------------------------------- */

// Load gulp module

var gulp = require('gulp');
var config = require('ss-build-gulp/config');

//Load helper modules

var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var minifyHTML = require('gulp-minify-html');
var preprocess = require('gulp-preprocess');
var templates = require('gulp-angular-templatecache');
var stylish = require('jshint-stylish');
var del = require('del');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');

var inject = require('gulp-inject');
var series = require('stream-series');
var sequence = require('run-sequence');
var rename = require('gulp-rename');

var sass = require('gulp-sass');
var replace = require('gulp-replace');
var cssmin = require('gulp-clean-css');
var concatCss = require('gulp-concat-css');
var gutil = require('gulp-util');
var merge = require('gulp-concat-json');


// Scripts - App
//--------------------------------

var vendorStream = gulp.src([config.paths.dist + '/vendor.js', config.paths.dist + '/vendor.css'], {
    read: false
});

var appStream = gulp.src([config.paths.dist + '/*.min.js', config.paths.dist + '/*.min.css'], {
    read: false
});


// Build - Production
//--------------------------------

gulp.task('build:sg', function (cb) {

    gutil.log(gutil.colors.white.bgBlue('/* ' + config.name + ' Init :: Build ------------------------------------ */'));

    return sequence(
        'clean:sg',
        'jshint:sg',
        'components:sg',
        'markup:sg',
        'scripts:sg',
        'assets:sg',
        'images:sg',
        'fonts:sg',
        'styles:sg',
        'locales:sg',
        'prism',
        'index:sg',
        'merge:sg',
        cb
    );
});

// Server
//--------------------------------

gulp.task('clean:sg', function(cb) {
    del([config.paths.styleguide + '/dist'], cb);
});

// Markup - Views
//--------------------------------

gulp.task('index:sg', function() {
    setTimeout(function() {

        return gulp.src([
                config.paths.styleguide + '/index.html',
            ])
            .pipe(preprocess({
                context: {
                    NODE_ENV: config.context.NODE_ENV,
                    DEBUG: config.context.DEBUG
                }
            }))
            .pipe(inject(series(vendorStream, appStream), {
                relative: false,
                ignorePath: '/dist/',
                addRootSlash: false
            }))
            .pipe(replace('whitelabel', 'styleguide'))
            .pipe(replace('xyz', 'styleguide'))
            .pipe(gulp.dest(config.paths.styleguide + '/dist'));

    }, 2000);
});

gulp.task('markup:sg', function(cb) {
    return gulp.src([
            config.paths.styleguide + '/**/*.template.html',
            config.exclude + config.paths.styleguide + '/index.html'
        ])
        .pipe(preprocess({
            context: {
                NODE_ENV: config.context.NODE_ENV,
                DEBUG: config.context.DEBUG
            }
        }))
        .pipe(replace('whitelabel', 'styleguide'))
        .pipe(replace('xyz', 'styleguide'))
        .pipe(gulp.dest(config.paths.styleguide + '/dist'))
        .pipe(templates('templates.min.js', {
            module: 'templateKeeper',
            standalone: true
        }))
        .pipe(gulp.dest(config.paths.styleguide + '/dist'), cb);

});

// Prism JS
//--------------------------------

gulp.task('styles:sg', function() {
    return gulp.src([
            config.paths.styleguide + '/src/assets/sass/style.scss'
        ])
        .pipe(sass())
        .pipe(concatCss('index.min.css'))
        .pipe(cssmin({
            relativeTo: './',
            root: './',
            rebase: false
        }))
        //HACK - REQUIRES ATTENTION
        .pipe(replace('assets/', ''))
        .pipe(replace('../fonts', 'fonts'))
        .pipe(replace('../../app/core/fonts', 'fonts'))
        .pipe(replace('/fonts', 'fonts'))
        .pipe(replace('../../../src/assets/sass/images', 'images'))
        .pipe(replace('../../select2', 'images'))
        .pipe(replace('../../../src/assets/sass/fonts', 'fonts'))
        .pipe(gulp.dest(config.paths.styleguide + '/dist/'));
});

// Prism JS
//--------------------------------

gulp.task('prism', function() {
    return gulp.src([
            config.paths.bower + '/prism/themes/**/*',
            config.paths.bower + '/prism/prism.js'
        ])
        .pipe(gulp.dest(config.paths.styleguide + '/dist/prism'));
});

// Assets
//--------------------------------

gulp.task('assets:sg', function() {
    return gulp.src([
            config.paths.dist + '/index.min.css',
            config.paths.dist + '/vendor.js',
            config.paths.dist + '/vendor.css'
        ])
        .pipe(gulp.dest(config.paths.styleguide + '/dist'));
});

gulp.task('fonts:sg', function() {
    return gulp.src([
            config.paths.dist + '/fonts/**/*'
        ])
        .pipe(gulp.dest(config.paths.styleguide + '/dist/fonts'));
});

gulp.task('locales:sg', function() {
    return gulp.src([
            config.paths.dist + '/locales/**/*'
        ])
        .pipe(gulp.dest(config.paths.styleguide + '/dist/locales'));
});

gulp.task('images:sg', function() {
    return gulp.src([
            config.paths.dist + '/images/**/*'
        ])
        .pipe(gulp.dest(config.paths.styleguide + '/dist/images'));
});

// Scripts
//--------------------------------

var styleguideScripts = [

    //Core

    config.paths.styleguide + '/app.module.js',
    config.paths.styleguide + '/app.directive.js',
    config.paths.styleguide + '/app.controller.js',

    //Services
    config.paths.app + '/core/services/global.factory.js',

    //Views

    config.paths.styleguide + '/**/*.module.js',
    config.paths.styleguide + '/**/*.controller.js',
    config.paths.styleguide + '/**/*.factory.js',
    config.paths.styleguide + '/**/*.filter.js',
    config.paths.styleguide + '/**/*.directive.js',

    //Components

    config.paths.app + '/components/**/*.directive.js',
    config.paths.app + '/components-generated/**/*.directive.js',
    config.exclude + config.paths.app + '/components/**/sg-export/*.directive.js',
    config.exclude + config.paths.app + '/components-generated/**/sg-export/*.directive.js'

];

var jsRegEx = (/.*\.js$/i);

gulp.task('scripts:sg', function() {

    gutil.log(gutil.colors.black.bgGreen('/* ' + config.name + ' Building App Scripts ------------------------------------ */'));
    return gulp.src(styleguideScripts)
        .pipe(preprocess({
            context: {
                NODE_ENV: config.context.NODE_ENV,
                DEBUG: config.context.DEBUG
            }

        }))
        .pipe(concat('app.min.js'))
        .pipe(replace('whitelabel', 'styleguide'))
        .pipe(replace('xyz', 'styleguide'))
        .pipe(gulp.dest(config.paths.styleguide + '/dist'));
});

// JSHint
//--------------------------------

gulp.task('jshint:sg', function() {
    return gulp.src([
            config.paths.styleguide + '/app/**/*.js'
        ])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(jshint.reporter('fail'));
});


// Build - Source Components
//--------------------------------

gulp.task('components:sg', function() {
    return gulp.src([
            config.paths.app + '/components/**/*.template.html',
            config.paths.app + '/components/**/sg-export/*.module.js',
            config.paths.app + '/components/**/sg-export/*.template.html',
            config.paths.app + '/components/**/sg-export/*.route.json',
            config.paths.app + '/components-generated/**/*.template.html',
            config.paths.app + '/components-generated/**/sg-export/*.module.js',
            config.paths.app + '/components-generated/**/sg-export/*.template.html',
            config.paths.app + '/components-generated/**/sg-export/*.route.json'
        ])
        .pipe(rename(function(path) {
            path.dirname = path.dirname.replace('sg-export', '');
            return path;
        }))
        .pipe(gulp.dest(config.paths.styleguide + '/components/'));
});



// Move - Merge JSON Files
//--------------------------------

gulp.task('merge:sg', function() {
    return gulp.src([config.paths.styleguide + '/**/*.route.json'])
        .pipe(merge('routes.json'))
        .pipe(gulp.dest(config.paths.styleguide + '/dist'));
});



