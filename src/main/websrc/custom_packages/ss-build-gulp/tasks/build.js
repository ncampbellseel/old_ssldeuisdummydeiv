/* -------------------------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////

Build - Gulp Processes

////////////////////////////////////////////////////////////////////////////////////////////////////
------------------------------------------------------------------------------------------------- */

// Load gulp module

var gulp = require('gulp');
var config = require('../config');

//Load helper modules

var del = require('del');
var sequence = require('run-sequence');
var gulpif = require('gulp-if');
var gutil = require('gulp-util');

// Build - Production
//--------------------------------

gulp.task('build', function (cb) {

    gutil.log(gutil.colors.white.bgBlue('/* ' + config.name + ' Init :: Build ------------------------------------ */'));

    return sequence(
        'clean-build',
        'jshint',
        'scripts:vendor',
        'scripts',
        'styles:vendor',
        'styles',
        'markup',
        'images',
        'locales',
        'fonts',
        'components',
        cb
    );
});

// Bolt On - Add API, Styleguide, Docs after build
//--------------------------------

gulp.task('bolt-on', function (cb) {

    gutil.log(gutil.colors.white.bgBlue('/* ' + config.name + ' Init :: Bolt-On ------------------------------------ */'));

    return sequence(
        'api',
        'styleguide',
        'docs',
        cb
    );
});

// Dist
//--------------------------------

var condition = true;

if (config.name === 'STYLEGUIDE' || config.name === 'DEV') {
    condition = false;
}

// Clean - Remove unused files
//--------------------------------

gulp.task('clean-build', function (cb) {
    del([config.paths.dist], cb);
});

gulp.task('default', function (cb) {

    gutil.log(gutil.colors.white.bgBlue('/* ' + config.name + ' Init :: Default ------------------------------------ */'));

    return sequence(
        'server',
        'server:styleguide',
        'server:docs',
        'server:coverage',
        'watch',
        cb
    );
});
