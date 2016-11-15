/*jshint latedef:false*/

//Factory - NewsFactory

(function() {
    /*jshint -W004 */

    'use strict';

    angular
        .module('app.service.news', [
            'app.service.api'
        ])
        .factory('NewsFactory', NewsFactory);

    NewsFactory.$inject = ['$http', '$location', 'ApiUrl'];

    function NewsFactory($http, $location, ApiUrl) {

        var NewsFactory = {};
        var poe = 'news';

        // Connect

        NewsFactory.connect = function() {

            return $http.get(ApiUrl.connect() + poe + '/latest', {});
        };

        // Completed

        NewsFactory.completed = function(id) {

            return $http.get(ApiUrl.connect() + poe + '/complete/' + id, {});
        };

        return NewsFactory;
    }
})();
