/*jshint latedef:false*/

//Factory - ApiUrl

(function() {
    /*jshint latedef:false*/
    /*jshint -W004 */

    'use strict';

    angular
        .module('app.service.api', [])
        .factory('ApiUrl', ApiUrl);

    function ApiUrl() {

        var ApiUrl = {};

        ApiUrl.connect = function() {

            var apiPath = '';

            // External JAVA API endpoint - Use once in a Java Application
            //var apiPath = 'http://localhost:8080/webapp/api/';

            // @if NODE_ENV=true
            apiPath = '/api/';
            // @endif 

            return apiPath;
        };

        return ApiUrl;
    }
})();
