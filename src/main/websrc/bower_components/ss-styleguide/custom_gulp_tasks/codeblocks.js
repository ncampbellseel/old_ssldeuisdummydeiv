/* -------------------------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////

Style Guide Server - Gulp Processes

////////////////////////////////////////////////////////////////////////////////////////////////////
------------------------------------------------------------------------------------------------- */

// Load gulp module

var gulp = require('gulp');
var config = require('ss-build-gulp/config');


// Prism JS
//--------------------------------

gulp.task('codeblocks', function() {
    return gulp.src([
            config.paths.bower + '/prism/themes/**/*',
            config.paths.bower + '/prism/prism.js'
        ])
        .pipe(gulp.dest(config.paths.dist + '/prism'));
});
