/* -------------------------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////

Strip - Gulp Processes

////////////////////////////////////////////////////////////////////////////////////////////////////
------------------------------------------------------------------------------------------------- */

// Load gulp module

var gulp = require('gulp');
var config = require('../config');

//Load helper modules

var plugin = require('gulp-load-plugins')();
var minifyHTML = require('gulp-minify-html');
var preprocess = require('gulp-preprocess');
var templates = require('gulp-angular-templatecache');
var inject = require('gulp-inject');
var series = require('stream-series');
var gulpif = require('gulp-if');
var livereload = require('gulp-livereload');

// Scripts - App
//--------------------------------

var vendorStream = gulp.src([config.paths.dist + '/vendor.js', config.paths.dist + '/vendor.css'], {
    read: false
});

var appStream = gulp.src([config.paths.dist + '/*.min.js', config.paths.dist + '/*.min.css'], {
    read: false
});

var condition = false;

if (config.name === 'PRODUCTION') {
    condition = true;
}

// Markup - Views
//--------------------------------

gulp.task('index', function() {
    setTimeout(function() {

        return gulp.src([
                config.paths.app + '/index.html',
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
            .pipe(gulpif(condition, (minifyHTML(config.opts))))
            .pipe(gulp.dest(config.paths.dist));

    }, 2000);
});

gulp.task('markup', function(cb) {
    return gulp.src([
            config.paths.app + '/**/*.template.html',
            config.exclude + config.paths.app + '/index.html'
        ])
        .pipe(preprocess({
            context: {
                NODE_ENV: config.context.NODE_ENV,
                DEBUG: config.context.DEBUG
            }
        }))
        .pipe(gulpif(condition, (minifyHTML(config.opts))))
        .pipe(gulp.dest(config.paths.dist))
        .pipe(templates('templates.min.js', {
            module: 'templateKeeper',
            standalone: true
        }))
        .pipe(gulp.dest(config.paths.dist), cb)
        .pipe(livereload());

});
