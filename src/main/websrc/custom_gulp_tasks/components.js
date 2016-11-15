/* -------------------------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////

Style Guide Server - Gulp Processes

////////////////////////////////////////////////////////////////////////////////////////////////////
------------------------------------------------------------------------------------------------- */

// Load gulp module

var gulp = require('gulp');
var config = require('ss-build-gulp/config');

//Load helper modules

var del = require('del');
var gutil = require('gulp-util');
var sequence = require('run-sequence');


// Build - Components
//--------------------------------

gulp.task('build:cmp', function (cb) {

    gutil.log(gutil.colors.white.bgBlue('/* ' + config.name + ' Init :: Components ------------------------------------ */'));

    return sequence(
        'clean:cmp',
        'move:cmp',
        cb
    );
});


// Clean
//--------------------------------

gulp.task('clean:cmp', function(cb) {
    del([config.paths.app + '/ss-components-angular'], cb);
});


// Move
//--------------------------------

gulp.task('move:cmp', function() {
    return gulp.src([
            'custom_packages/ss-components-angular/**/*'
        ])
        .pipe(gulp.dest(config.paths.app + '/components-generated'));
});
