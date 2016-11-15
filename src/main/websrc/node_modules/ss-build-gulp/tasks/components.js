/* -------------------------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////

Components - Gulp Processes

////////////////////////////////////////////////////////////////////////////////////////////////////
------------------------------------------------------------------------------------------------- */

// Load gulp module

var gulp = require('gulp');
var del = require('del');
var sequence = require('run-sequence');
var config = require('../config');


// Build - Production
//--------------------------------

gulp.task('components', function (cb) {

    return sequence(
        'components:move',
        'components:clean',
        cb
    );
});

gulp.task('components:move', function () {
    return gulp.src([
            config.paths.app + '/components-generated/**/*.template.html'
        ])
        .pipe(gulp.dest(config.paths.dist + '/components'));
});


gulp.task('components:clean', function (cb) {
    del([config.paths.dist + '/components-generated'], cb);
});