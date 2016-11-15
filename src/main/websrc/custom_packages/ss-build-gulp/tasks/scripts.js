/* -------------------------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////

Scripts - Gulp Processes

////////////////////////////////////////////////////////////////////////////////////////////////////
------------------------------------------------------------------------------------------------- */

// Load gulp module

var gulp = require('gulp');
var config = require('../config');

//Load helper modules

var plugin = require('gulp-load-plugins')();
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var mainBowerFiles = require('main-bower-files');
var preprocess = require('gulp-preprocess');
var gulpif = require('gulp-if');
var livereload = require('gulp-livereload');

var appScripts = [

    //Core

    config.paths.app + '/app.module.js',
    config.paths.app + '/app.directive.js',
    config.paths.app + '/app.controller.js',

    //Views

    config.exclude + config.paths.app + '/**/sg-export/*.module.js',
    config.exclude + config.paths.app + '/**/sg-export/*.controller.js',
    config.exclude + config.paths.app + '/**/sg-export/*.directive.js',

    config.paths.app + '/**/*.module.js',
    config.paths.app + '/**/*.controller.js',
    config.paths.app + '/**/*.factory.js',
    config.paths.app + '/**/*.filter.js',
    config.paths.app + '/**/*.directive.js',

    config.paths.app + '/**/*.script.js'
];

var jsRegEx = (/.*\.js$/i);

var condition = false;

if (config.name === 'PRODUCTION') {
    condition = true;
}

// Scripts - App
//--------------------------------

gulp.task('scripts:vendor', function (cb) {
    gutil.log(gutil.colors.black.bgGreen('/* ' + config.name + ' Building Vendor Scripts ------------------------------------ */'));
    return gulp.src(mainBowerFiles({
            filter: jsRegEx
        }))
        .pipe(plugin.concat('vendor.js'))
        .pipe(plugin.ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest(config.paths.dist), cb);
});

gulp.task('scripts', function (cb) {

    gutil.log(gutil.colors.black.bgGreen('/* ' + config.name + ' Building App Scripts ------------------------------------ */'));
    return gulp.src(appScripts)
        .pipe(preprocess({
            context: {
                NODE_ENV: config.context.NODE_ENV,
                DEBUG: config.context.DEBUG
            }

        }))
        .pipe(plugin.concat('app.min.js'))
        .pipe(gulpif(condition, plugin.ngAnnotate()))
        .pipe(gulpif(condition, uglify()))
        .pipe(gulp.dest(config.paths.dist), cb)
        .pipe(livereload());
});
