/*jshint latedef:false*/

//Factory - StorageFactory

(function() {
    /*jshint -W004 */

    'use strict';

    angular
        .module('app.service.storage', [
            'LocalStorageModule'
        ])
        .factory('StorageFactory', StorageFactory);

    StorageFactory.$inject = ['localStorageService'];

    function StorageFactory(localStorageService) {

        var StorageFactory = {};

        // Search Query local save

        StorageFactory.getSearchQuery = function() {

            if (localStorageService.get('search_query')) {
                return localStorageService.get('search_query');
            }
        };

        StorageFactory.setSearchQuery = function(search_query) {

            if (search_query) {
                localStorageService.set('search_query', search_query);
            } else {
                StorageFactory.removeDepartureDate();
            }
        };

        StorageFactory.removeSearchQuery = function() {

            localStorageService.remove('search_query');
        };

        // Search Results local save

        StorageFactory.getSearchResults = function() {

            if (localStorageService.get('search_results')) {
                return localStorageService.get('search_results');
            }
        };

        StorageFactory.setSearchResults = function(search_results) {

            if (search_results) {
                localStorageService.set('search_results', search_results);
            } else {
                StorageFactory.removeDepartureDate();
            }
        };

        StorageFactory.removeSearchResults = function() {

            localStorageService.remove('search_results');
        };

        return StorageFactory;
    }
})();
