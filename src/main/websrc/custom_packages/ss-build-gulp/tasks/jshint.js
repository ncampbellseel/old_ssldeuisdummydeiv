/* -------------------------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////

JSHint - Gulp Processes

////////////////////////////////////////////////////////////////////////////////////////////////////
------------------------------------------------------------------------------------------------- */

// Load gulp module

var gulp = require('gulp');
var config = require('../config');

//Load helper modules

var plugin = require('gulp-load-plugins')();
var stylish = require('jshint-stylish');

// JSHint
//--------------------------------

gulp.task('jshint', function () {
    return gulp.src([
            config.paths.app + '/**/*.js',
            config.exclude + config.paths.app + '/**/*.test.js'
        ])
        .pipe(plugin.jshint())
        .pipe(plugin.jshint.reporter(stylish, { verbose: true }))
        .pipe(plugin.jshint.reporter('fail'));
});
