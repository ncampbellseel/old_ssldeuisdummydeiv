/* -------------------------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////

Style Guide Server - Gulp Processes

////////////////////////////////////////////////////////////////////////////////////////////////////
------------------------------------------------------------------------------------------------- */

// Load gulp module

var gulp = require('gulp');
var connect = require('gulp-connect');
var config = require('../config');

//Load helper modules

var del = require('del');
var gutil = require('gulp-util');

// Build - Production
//--------------------------------

gulp.task('styleguide', ['clean:styleguide'], function() {
    return gulp.start('copy:styleguide');
});

// Styleguide dist
//--------------------------------

gulp.task('copy:styleguide', function() {
    return gulp.src([
            config.paths.bower + '/ss-styleguide/src/app/**/*'
        ])
        .pipe(gulp.dest(config.paths.styleguide));

});

// Server
//--------------------------------

gulp.task('clean:styleguide', function(cb) {
    del([config.paths.styleguide], cb);
});

// Server
//--------------------------------

gulp.task('server:styleguide', function() {
    gutil.log(gutil.colors.white.bgRed('/* Styleguide server started at http://localhost:' + config.server.port_styleguide + ' ----------------------- */'));
    connect.server({
        root: config.paths.styleguide + '/dist',
        port: config.server.port_styleguide
    });
});
