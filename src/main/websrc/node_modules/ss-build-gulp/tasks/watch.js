/* -------------------------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////

Watch - Gulp Processes

////////////////////////////////////////////////////////////////////////////////////////////////////
------------------------------------------------------------------------------------------------- */

// Load gulp module

var gulp = require('gulp');
var config = require('../config');
var livereload = require('gulp-livereload');

//Load helper modules

gulp.task('watch', function() {

    livereload.listen();

    gulp.watch(config.paths.app + '/**/*.template.html', ['markup']);
    gulp.watch(config.paths.app + '/index.html', ['index']);
    gulp.watch(config.paths.assets.locales + '/**/*.json', ['locales']);
    gulp.watch([config.paths.app + '/**/*.js', config.exclude + config.paths.app + '/**/*.test.js'], ['jshint', 'scripts']);
    gulp.watch(config.paths.app + '/**/*.scss', ['styles']);
    gulp.watch(config.paths.assets.sass + '/**/*.scss', ['styles']);

    //Dummy API files

    gulp.watch(config.paths.app + '/api/**/*', ['api']);

    //Styleguide

    gulp.watch(config.paths.styleguide + '/app/**/*.html', ['markup:sg']);
    gulp.watch(config.paths.styleguide + '/app/**/*.js', ['scripts:sg']);
    gulp.watch(config.paths.styleguide + '/app/**/*.style.scss', ['styles:sg']);
});
