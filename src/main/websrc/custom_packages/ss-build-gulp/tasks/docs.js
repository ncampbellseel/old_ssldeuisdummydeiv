/* -------------------------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////

JSHint - Gulp Processes

////////////////////////////////////////////////////////////////////////////////////////////////////
------------------------------------------------------------------------------------------------- */

// Load gulp module

var gulp = require('gulp');
var config = require('../config');

//Load helper modules

var connect = require('gulp-connect');
var documentation = require('gulp-documentation');
var gutil = require('gulp-util');

// JSHint
//--------------------------------

gulp.task('docs', function () {
    return gulp.src([
            config.paths.app + '/**/*.js'
        ])
        .pipe(documentation({
            format: 'html'
        }))
        .pipe(gulp.dest(config.paths.docs));
});

// Server
//--------------------------------

gulp.task('server:docs', function() {
    gutil.log(gutil.colors.white.bgRed('/* Docs server started at http://localhost:' + config.server.port_docs + ' ----------------------- */'));
    connect.server({
        root: config.paths.docs,
        port: config.server.port_docs
    });
});

