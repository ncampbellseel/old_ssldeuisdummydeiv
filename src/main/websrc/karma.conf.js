// Karma configuration
// Generated on Wed Jun 11 2014 09:51:52 GMT-0500 (CDT)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'bower_components/angular-route/angular-route.min.js',
            'bower_components/angular-sanitize/angular-sanitize.min.js',
            'bower_components/ngDialog/js/ngDialog.min.js',
            'bower_components/angular-aria/angular-aria.min.js',
            'bower_components/angular-animate/angular-animate.min.js',
            'bower_components/angular-selectize2/dist/angular-selectize.js',
            'bower_components/angular-local-storage/dist/angular-local-storage.min.js',
            'bower_components/ang-accordion/js/ang-accordion.js',
            'bower_components/angular-tooltips/dist/angular-tooltips.min.js',
            'bower_components/ng-device-detector/ng-device-detector.min.js',
            'bower_components/matchmedia-ng/matchmedia-ng.js',
            'bower_components/angular-ripple/angular-ripple.js',
            'bower_components/angularjs-datepicker/dist/angular-datepicker.min.js',
            'bower_components/moment/moment.js',
            'bower_components/angular-momentjs/angular-momentjs.js',
            'bower_components/angular-translate/angular-translate.min.js',
            'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js',
            'bower_components/angular-utf8-base64/angular-utf8-base64.min.js',
            'bower_components/re-tree/re-tree.min.js',
            'bower_components/lodash/dist/lodash.min.js',
            'bower_components/selectize/dist/js/standalone/selectize.js',
            'dist/templates.min.js',
            'src/**/*.module.js',
            'src/**/*.controller.js',
            'src/**/*.directive.js',
            'src/**/*.filter.js',
            'src/**/*.factory.js',
            'src/**/*.template.html',
            'tests/unit/**/*.js'
        ],

        // list of files to exclude
        exclude: [
            'src/**/sg-export/*.module.js',
            'src/**/vendor/*.module.js'
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'src/**/!(sg-export|vendor)/*.js': ['coverage']
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['spec', 'coverage'],

        coverageReporter: {
            type: 'html',
            dir: 'reports',
            subdir: 'coverage'
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: [
            'PhantomJS'
            // , 'Chrome'
            // , 'Firefox'
            // , 'Safari'
        ],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        client: {
            captureConsole: true
        }
    });
};
