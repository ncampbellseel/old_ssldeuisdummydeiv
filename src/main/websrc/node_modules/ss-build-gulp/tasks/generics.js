/* -------------------------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////

Generics - Gulp Processes

////////////////////////////////////////////////////////////////////////////////////////////////////
------------------------------------------------------------------------------------------------- */

// Load gulp module

var gulp = require('gulp');
var config = require('../config');


// Generics
//--------------------------------

gulp.task('generics', function() {
    return gulp.src([
            config.paths.assets.base + '/favicon.ico',
            config.paths.assets.base + '/sitemap.xml',
            config.paths.assets.base + '/robots.txt'
        ])
        .pipe(gulp.dest(config.paths.dist));
});
