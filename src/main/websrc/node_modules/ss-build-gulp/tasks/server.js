/* -------------------------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////

Server - Gulp Processes

////////////////////////////////////////////////////////////////////////////////////////////////////
------------------------------------------------------------------------------------------------- */

// Load gulp module

var gulp = require('gulp');
var connect = require('gulp-connect');
var config = require('../config');
var gutil = require('gulp-util');
var gulpif = require('gulp-if');

//Load helper modules

if (config.name === 'STYLEGUIDE') {
    the_port = config.server.port_styleguide;
} else {
    the_port = config.server.port;
}

gulp.task('server', function() {
    gutil.log(gutil.colors.white.bgRed('/* Server started at http://localhost:' + config.server.port + ' ----------------------- */'));
    connect.server({
        root: config.paths.dist,
        port: the_port
    });
});
