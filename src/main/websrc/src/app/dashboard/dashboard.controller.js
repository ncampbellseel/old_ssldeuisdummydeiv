/*jshint latedef:false*/

//Controller - DashboardCtrl

(function () {

    'use strict';

    angular
        .module('whitelabelApp')
        .controller('DashboardCtrl', DashboardCtrl);

    DashboardCtrl.$inject = ['$scope', 'FlashFactory', 'TitleFactory', 'ReferenceFactory'];

    function DashboardCtrl($scope, FlashFactory, TitleFactory, ReferenceFactory) {

        TitleFactory.setTitle('app.dashboard.name');

        $scope.errors = [];
        $scope.getGreetings = function () {

            ReferenceFactory.testGetRequest()
                .success(function (data) {
                    $scope.greetings = data.content;
                });
        };
        var init = function () {
            $scope.getGreetings();
        };

        init();
    }

})();
