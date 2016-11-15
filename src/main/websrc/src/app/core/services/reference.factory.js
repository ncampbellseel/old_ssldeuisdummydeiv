/*jshint latedef:false*/

//Factory - ReferenceFactory

(function() {
    /*jshint -W004 */

    'use strict';

    angular
        .module('app.service.reference', [
            'app.service.api'
        ])
        .factory('ReferenceFactory', ReferenceFactory);

    ReferenceFactory.$inject = ['$http', '$location', 'ApiUrl'];

    function ReferenceFactory($http, $location, ApiUrl) {

        var ReferenceFactory = {};
        var poe = 'reference';

        // Example Get Request

        ReferenceFactory.exampleGetRequest = function() {

            return $http.get(ApiUrl.connect() + poe + '/exampleGetRequest', {});
        };

        ReferenceFactory.testGetRequest = function() {

            return $http.get(ApiUrl.connect() + '/greeting', {});
        }; 

        //  Example Post Request

        ReferenceFactory.examplePostRequest = function(data) {

            return $http({
                method: 'POST',
                url: ApiUrl.connect() + poe + '/examplePostRequest',
                headers: {},
                data: angular.toJson(data)
            });

        };

        return ReferenceFactory;
    }
})();
