/*jshint latedef:false*/

//Config - btnConfig

(function () {

    'use strict';

    angular
        .module('xyzApp')
        .config(btnConfig);

    btnConfig.$inject = ['$routeProvider'];

    function btnConfig($routeProvider) {

        $routeProvider

            .when('/components/date-picker', {
            templateUrl: 'components/date-picker/component.template.html',
            resolve: {
                test: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'ssDatePicker'
                    }, {
                        name: 'app.service.global'
                    }]);
                }]
            }
        });

    }

})();

/*jshint latedef:false*/

//Controller - DateCtrl

(function () {

    'use strict';

    angular
        .module('xyzApp')
        .controller('DateCtrl', DateCtrl);

    DateCtrl.$inject = ['$scope', '$filter'];

    function DateCtrl($scope, $filter) {
        $scope.dateSet = $filter('date')(new Date(), 'dd/MM/yyyy');
        $scope.minDate = new Date();
        $scope.minDate = $filter('date')($scope.minDate.setDate($scope.minDate.getDate() - 7), 'dd/MM/yyyy');
        $scope.maxDate = new Date();
    }

})();
