/* -------------------------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////

Style Guide - Build to Include Custom Functions

////////////////////////////////////////////////////////////////////////////////////////////////////
------------------------------------------------------------------------------------------------- */

// Load gulp module

var gulp = require('gulp');
var config = require('ss-build-gulp/config');

//Load helper modules

var sequence = require('run-sequence');

// Build - Production
//--------------------------------


gulp.task('build:styleguide', function (cb) {

    gutil.log(gutil.colors.white.bgBlue('/* ' + config.name + ' Init :: Build Styleguide ------------------------------------ */'));

    return sequence(
        'build',
        'codeblocks',
        cb
    );
});


//GRAB THE CSS FROM ROOT IF ITS A PROJECT (--something)

//ELSE GRAB THE CORE_SASS
