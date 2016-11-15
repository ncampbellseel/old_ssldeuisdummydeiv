/* -------------------------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////

Locales - Gulp Processes

////////////////////////////////////////////////////////////////////////////////////////////////////
------------------------------------------------------------------------------------------------- */

// Load gulp module

var gulp = require('gulp');
var config = require('../config');

//Load helper modules

var jsonlint = require('gulp-jsonlint');
var gulpif = require('gulp-if');
var gutil = require('gulp-util');

var condition = false;

// API
//--------------------------------

if (config.name === 'DEV') {
    condition = true;
}

gulp.task('api', function() {

    gutil.log(gutil.colors.black.bgGreen('/* ' + config.name + ' API ------------------------------------ */'));

    return gulp.src([
            config.paths.app + '/api/**/*'
        ])
        .pipe(jsonlint())
        .pipe(jsonlint.reporter())
        .pipe(gulpif(condition, (gulp.dest(config.paths.dist + '/api'))));
});
