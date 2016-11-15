/* -------------------------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////

Style Guide Server - Gulp Processes

////////////////////////////////////////////////////////////////////////////////////////////////////
------------------------------------------------------------------------------------------------- */

// Load gulp module

var gulp = require('gulp');
var config = require('ss-build-gulp/config');


//Load helper modules

var sass = require('gulp-sass');
var con = require('gulp-concat-css');

// Styles - Layouts
//--------------------------------

gulp.task('styleguide:styles', function() {
    return gulp.src([
            config.paths.assets.sass + '/style.scss'
        ])
        .pipe(sass())
        .pipe(con('core.min.css'))
        .pipe(gulp.dest(config.paths.dist));
});
