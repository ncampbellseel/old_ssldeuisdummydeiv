/* -------------------------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////

Locales - Gulp Processes

////////////////////////////////////////////////////////////////////////////////////////////////////
------------------------------------------------------------------------------------------------- */


// WORK IN PROGRESS

// Load gulp module

// var gulp = require('gulp');
// var config = require('../config');

//Load helper modules

// var ngrok = require('ngrok');
// var psi = require('psi');

// var sequence = require('run-sequence');
// var site = '';

// gulp.task('ngrok-url', function (cb) {
//     return ngrok.connect(config.server.port, function (err, url) {
//         site = url;
//         console.log('serving your tunnel from: ' + site);
//         cb();
//     });
// });

// gulp.task('psi-desktop', function (cb) {
//     psi(site, {
//         nokey: 'true',
//         strategy: 'desktop'
//     }, cb);
// });

// gulp.task('psi-mobile', function (cb) {
//     psi(site, {
//         nokey: 'true',
//         strategy: 'mobile'
//     }, cb);
// });

// gulp.task('psi-seq', function (cb) {
//     return sequence(
//         'ngrok-url',
//         'psi-desktop',
//         'psi-mobile',
//         cb
//     );
// });

// gulp.task('psi', ['psi-seq'], function () {
//     console.log('Woohoo! Check out your page speed scores!')
//     process.exit();
// });
