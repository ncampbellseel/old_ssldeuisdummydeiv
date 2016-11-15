/*jshint latedef:false*/

//Config - timePickerConfig

(function () {

    'use strict';

    angular
        .module('xyzApp')
        .config(timePickerConfig);

    timePickerConfig.$inject = ['$routeProvider'];

    function timePickerConfig($routeProvider) {

        $routeProvider

            .when('/components/time-picker', {
            templateUrl: 'components/time-picker/component.template.html',
            resolve: {
                test: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'ssTimePicker'
                    }, {
                        name: 'app.service.global'
                    }]);
                }]
            }
        });

    }

})();

/*jshint latedef:false*/

//Controller - TimeCtrl

(function () {

    'use strict';

    angular
        .module('xyzApp')
        .controller('TimeCtrl', TimeCtrl);

    TimeCtrl.$inject = ['$scope', '$filter'];

    function TimeCtrl($scope, $filter) {
        $scope.selectedTime = '18:00';
        $scope.date = $filter('date')(new Date(), 'dd/MM/yyyy');
        $scope.minDate = new Date();
        $scope.minDate = $filter('date')($scope.minDate.setDate($scope.minDate.getDate() - 7), 'dd/MM/yyyy');
    }

})();
