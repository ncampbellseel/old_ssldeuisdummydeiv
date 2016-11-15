/* -------------------------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////

Versioning - Gulp Processes

////////////////////////////////////////////////////////////////////////////////////////////////////
------------------------------------------------------------------------------------------------- */

// Load gulp module

var gulp = require('gulp');
var config = require('../config');


//Load helper modules

var plugin = require('gulp-load-plugins')();


// Versioning
//--------------------------------

gulp.task('bump:patch', function() {
    gulp.src(['./package.json', './bower.json'])
        .pipe(plugin.bump())
        .pipe(gulp.dest('./'));

});

gulp.task('bump:minor', function() {
    gulp.src(['./package.json', './bower.json'])
        .pipe(plugin.bump({
            type: 'minor'
        }))
        .pipe(gulp.dest('./'));

});

gulp.task('bump:major', function() {
    gulp.src(['./package.json', './bower.json'])
        .pipe(plugin.bump({
            type: 'major'
        }))
        .pipe(gulp.dest('./'));

});