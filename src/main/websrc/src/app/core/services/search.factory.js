/*jshint latedef:false*/

//Factory - SearchFactory

(function() {
    /*jshint -W004 */

    'use strict';

    angular
        .module('app.service.search', [
            'app.service.api'
        ])
        .factory('SearchFactory', SearchFactory);

    SearchFactory.$inject = ['$http', '$location', 'ApiUrl'];

    function SearchFactory($http, $location, ApiUrl) {


        /* -------------------------------------------------------------------------------------------------
        ////////////////////////////////////////////////////////////////////////////////////////////////////

        API Functions

        ////////////////////////////////////////////////////////////////////////////////////////////////////
        ------------------------------------------------------------------------------------------------- */

        var SearchFactory = {};
        var poe = 'customers';

        //  Customers

        SearchFactory.customers = function() {

            // return $http({
            //     method: 'POST',
            //     url: ApiUrl.connect() + poe + '/customers/feed',
            //     headers: {},
            //     data: angular.toJson(data)
            // });
            return $http.get(ApiUrl.connect() + poe + '/feed', {});

        };


        //  Customers Summary

        SearchFactory.customersSummary = function() {

            return $http.get(ApiUrl.connect() + poe + '/summary', {});

        };


        return SearchFactory;
    }
})();
