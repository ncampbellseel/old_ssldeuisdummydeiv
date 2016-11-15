/* -------------------------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////

Unit Tests

////////////////////////////////////////////////////////////////////////////////////////////////////
------------------------------------------------------------------------------------------------- */

// Load gulp module

var gulp = require('gulp');
var config = require('../config');

//Load helper modules

var del = require('del');
var karma = require('gulp-karma');
var gutil = require('gulp-util');
var plugin = require('gulp-load-plugins')();
var connect = require('gulp-connect');
var sequence = require('run-sequence');

gulp.task('test:clean', function(cb) {
    del([config.paths.coverage], cb);
});

gulp.task('test', function(cb) {

    gutil.log(gutil.colors.white.bgBlue('/* ' + config.name + ' Init :: Starting Tests ------------------------------------ */'));

    return sequence(
        'test:clean',
        'test:run',
        cb
    );
});

gulp.task('tdd', function() {
    return sequence(
        'test:clean',
        'test:watch'
    );
});

gulp.task('test:run', function() {
    // Be sure to return the stream
    // NOTE: Using the fake './foobar' so as to run the files
    // listed in karma.conf.js INSTEAD of what was passed to
    // gulp.src !

    return gulp.src('./foobar')
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }))
        .on('error', function(err) {
            gutil.log;
            this.emit('end');
            plugin.jshint.reporter('fail');
        });

});

gulp.task('test:watch', function() {
    // Be sure to return the stream
    // NOTE: Using the fake './foobar' so as to run the files
    // listed in karma.conf.js INSTEAD of what was passed to
    // gulp.src !

    return gulp.src('./foobar')
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'watch'
        }))
        .on('error', function(err) {
            gutil.log;
            this.emit('end');
            plugin.jshint.reporter('fail');
        });

});

// Server
//--------------------------------

gulp.task('server:coverage', function() {
    gutil.log(gutil.colors.white.bgRed('/* Coverage server started at http://localhost:' + config.server.port_coverage + ' ----------------------- */'));
    connect.server({
        root: config.paths.coverage,
        port: config.server.port_coverage
    });
});
