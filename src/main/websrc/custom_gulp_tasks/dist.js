/* -------------------------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////

Dist - Gulp Processes

////////////////////////////////////////////////////////////////////////////////////////////////////
------------------------------------------------------------------------------------------------- */

// Load gulp module

var gulp = require('gulp');
var gulpif = require('gulp-if');
var config = require('../node_modules/ss-build-gulp/config');

// Prism JS
//--------------------------------

var condition = true;

if (config.name === 'STYLEGUIDE' || config.name === 'DEV') {
    condition = false;
}

gulp.task('dist', function() {
    return gulp.src([
            config.paths.dist + '/**/*'
        ])
        .pipe(gulpif(condition, gulp.dest('../resources/static')));
});
