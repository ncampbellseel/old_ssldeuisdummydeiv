/*jshint latedef:false*/

//Controller - HomeCtrl

(function () {

    'use strict';

    angular
        .module('xyzApp')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$scope', 'TitleFactory'];

    function HomeCtrl($scope, TitleFactory) {

        TitleFactory.setTitle('app.home.name');

        $scope.errors = [];

        var init = function () {};

        init();
    }

})();
