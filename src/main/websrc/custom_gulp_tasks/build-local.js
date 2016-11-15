/* -------------------------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////

Style Guide Server - Gulp Processes

////////////////////////////////////////////////////////////////////////////////////////////////////
------------------------------------------------------------------------------------------------- */

// Load gulp module

var gulp = require('gulp');
var config = require('ss-build-gulp/config');

//Load helper modules

var gutil = require('gulp-util');
var sequence = require('run-sequence');

// Build - Local
//--------------------------------

gulp.task('local', function (cb) {

    gutil.log(gutil.colors.white.bgBlue('/* ' + config.name + ' Init :: Local Build ------------------------------------ */'));

    return sequence(
        'build:sg',
        cb
    );
});