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
var jsonminify = require('gulp-jsonminify');

// Translations/ID rewrites
//--------------------------------

gulp.task('locales', function () {
    return gulp.src([
            config.paths.assets.locales + '/*.json'
        ])
        .pipe(jsonminify())
        .pipe(jsonlint())
        .pipe(jsonlint.reporter())
        .pipe(gulp.dest(config.paths.dist + '/locales'));
});
