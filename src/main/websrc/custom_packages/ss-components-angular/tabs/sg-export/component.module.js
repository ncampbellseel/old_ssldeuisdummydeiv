/*jshint latedef:false*/

//Config - tabsConfig

(function() {

    'use strict';

    angular
        .module('xyzApp')
        .config(tabsConfig);

    tabsConfig.$inject = ['$routeProvider'];

    function tabsConfig($routeProvider) {

        $routeProvider

            .when('/components/tabs', {
            templateUrl: 'components/tabs/component.template.html',
            resolve: {
                test: ['$ocLazyLoad', function($ocLazyLoad) {
                    /* You don't actually need to load both modules for this to
                    work, loading ssTabset on its own will do it, as ssTab ia a
                    dependency but keeping this example here for future cases 
                    where we ned to load more than one module */
                    return $ocLazyLoad.load([
                        {
                            name: 'ssTab',
                            serie: true
                        }, {
                            name: 'ssTabset',
                            serie: true
                        }
                    ]);
                }]
            }
        });

    }

})();

/*jshint latedef:false*/