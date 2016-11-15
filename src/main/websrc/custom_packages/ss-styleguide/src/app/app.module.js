/*jshint latedef:false*/

//Config - xyzAppConfig

(function() {

    'use strict';

    angular
        .module('xyzApp', [
            'ngRoute',
            'ngSanitize',
            'ngDialog',
            'ngAria',
            'ngAnimate',
            'selectize',
            'templateKeeper',
            'LocalStorageModule',
            'angAccordion',
            '720kb.tooltips',
            'matchmedia-ng',
            'oc.lazyLoad',
            'angularRipple',
            'angular-momentjs',
            'pascalprecht.translate',
            'xyz.service.menu',
            'xyz.service.title'
        ])
        .config(xyzAppConfig);

    xyzAppConfig.$inject = ['$routeProvider', '$locationProvider', '$httpProvider', '$provide', '$ocLazyLoadProvider', 'localStorageServiceProvider', 'ngDialogProvider', '$translateProvider', 'tooltipsConfProvider'];

    function xyzAppConfig($routeProvider, $locationProvider, $httpProvider, $provide, $ocLazyLoadProvider, localStorageServiceProvider, ngDialogProvider, $translateProvider, tooltipsConfProvider) {

        $ocLazyLoadProvider.config({
            debug: true,
            serie: true
        });
        
        $provide.decorator('$templateCache', function($delegate) {
            var originalGet = $delegate.get;

            $delegate.get = function(key) {
                var value;
                value = originalGet(key);
                if (!value) {

                    if (value) {
                        $delegate.put(key, value);
                    }
                }
                return value;
            };

            return $delegate;
        });

        $locationProvider.baseHref = '/webapp';

        //initialize get if not there
        if (!$httpProvider.defaults.headers.get) {
            $httpProvider.defaults.headers.get = {};
        }

        // Answer edited to include suggestions from comments
        // because previous version of code introduced browser-related errors

        //disable IE ajax request caching
        $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
        // extra
        $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
        $httpProvider.defaults.headers.get.Pragma = 'no-cache';

        $translateProvider
            .useStaticFilesLoader({
                prefix: 'locales/',
                suffix: '.json'
            })
            .preferredLanguage('en')
            .fallbackLanguage('en');

        $locationProvider.html5Mode({
            enabled: false,
            requireBase: true
        });

        $translateProvider.useSanitizeValueStrategy('sanitize');

        localStorageServiceProvider
            .setPrefix('xyz')
            .setStorageType('localStorage')
            .setNotify(true, true);

        localStorageServiceProvider
            .setStorageCookie(45, '/');

        $routeProvider

            .when('/logout', {
            reloadOnSearch: false
        })

        .otherwise({
            redirectTo: '/home'
        });

        ngDialogProvider.setDefaults({
            className: 'ngdialog-theme-default',
            showClose: true,
            closeByDocument: true,
            closeByEscape: true
        });

        tooltipsConfProvider.configure({
            'smart': true,
            'size': 'small',
            'speed': 'fast'
        });

    }

})();

//Constant - xyzAppConstant

(function() {

    'use strict';

    angular
        .module('xyzApp')
        .constant('_', window._);

})();

//Run - xyzAppRun

(function() {

    'use strict';

    angular
        .module('xyzApp')
        .run(xyzAppRun);

    xyzAppRun.$inject = ['$rootScope', '$location', '$window'];

    function xyzAppRun($rootScope, $location, $window) {


        $rootScope._ = window._;

        /**
         * Watch for route change
         * @param {String} event
         * @param {String} next
         * @return {String} sum
         */

        $rootScope.$on('$routeChangeStart', function(event, next) {

            window.scrollTo(0, 0);

            if (next.hideMenu) {
                $rootScope.hideMenu = true;
            } else {
                $rootScope.hideMenu = false;
            }
        });
    }

})();
