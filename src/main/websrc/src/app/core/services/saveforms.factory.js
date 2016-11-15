/*jshint latedef:false*/

//Factory - SaveFormsFactory

(function() {
    /*jshint -W004 */

    'use strict';

    angular
        .module('app.service.saveforms', [
            'app.service.api'
        ])
        .factory('SaveFormsFactory', SaveFormsFactory);

    SaveFormsFactory.$inject = ['$http', '$location', 'ApiUrl'];

    function SaveFormsFactory($http, $location, ApiUrl) {

        var SaveFormsFactory = {};
        var poe = 'saveforms';

        // Example Get Request

        SaveFormsFactory.customer = function() {

            return $http.get(ApiUrl.connect() + poe + '/customer', {});
        };

        //  Example Post Request

        SaveFormsFactory.retailer = function(data) {

            return $http({
                method: 'POST',
                url: ApiUrl.connect() + poe + '/retailer',
                headers: {},
                data: angular.toJson(data)
            });

        };

        return SaveFormsFactory;
    }
})();
