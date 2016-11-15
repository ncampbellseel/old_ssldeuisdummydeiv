describe('tests/unit/controllers/AppController', function () {

    beforeEach(module('whitelabelApp', function ($provide, $translateProvider) {
        /*
            $translateProvider causes issues when unit testing asynchronous calls
            Creating a custom loader gets around this issue.

            http://angular-translate.github.io/docs/#/guide/22_unit-testing-with-angular-translate
         */
        $provide.factory('customLoader', function ($q) {
            return function () {
                var deferred = $q.defer();
                deferred.resolve({});
                return deferred.promise;
            }
        });

        $translateProvider.useLoader('customLoader');
    }));

    var $controller;
    var $rootScope;
    var $scope;
    var $httpBackend;
    var $interval;
    var $location;
    var GlobalFactory;
    var StorageFactory;
    var testData;
    var matchmedia;
    var AppController;

    beforeEach(inject(function (_$controller_, _$rootScope_, _$httpBackend_, _$interval_, _$location_, _GlobalFactory_, _StorageFactory_, _matchmedia_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $httpBackend = _$httpBackend_;
        $interval = _$interval_;
        $location = _$location_;
        GlobalFactory = _GlobalFactory_;
        StorageFactory = _StorageFactory_;
        matchmedia = _matchmedia_;
    }));

    beforeEach(function () {

        AppController = $controller('AppController', {
            $scope: $scope
        });

        var mockLocation = {
            $$path: '/',
            path: function (url) {
                this.$$path = url;
            }
        };
        spyOn($location, 'path').and.callFake(mockLocation.path);

        spyOn(GlobalFactory, 'removeFromArray');
        spyOn(GlobalFactory, 'dateValid');
        spyOn(GlobalFactory, 'inArray');
    });

    describe('Function :: Is Phone ---------------------- */', function () {

        beforeEach(function () {
            testData = [{
                device: false,
                matchmedia: false,
                expectedOutput: false
            }, {
                device: true,
                matchmedia: false,
                expectedOutput: false
            }, {
                device: false,
                matchmedia: true,
                expectedOutput: false
            }, {
                device: true,
                matchmedia: true,
                expectedOutput: true
            }];
        });

        fit('expects $scope.isPhone to match output from test criteria', function () {
            for (var i in testData) {
                var test = testData[i];
                $scope.device = {};
                /* Set up the dummy responses */
                $scope.device.isMobile = function () {
                        return test.device;
                    }
                    /* Matchmedia needs to have a dummy response too */
                matchmedia.isPhone = function () {
                    return test.matchmedia;
                }

                expect($scope.isPhone()).toEqual(test.expectedOutput);
            }
        });
    });

    describe('Function :: Is Tablet ---------------------- */', function () {

        beforeEach(function () {
            testData = [{
                matchmedia: false,
                expectedOutput: false
            }, {
                matchmedia: true,
                expectedOutput: true
            }];
        });

        it('expects $scope.isTablet to match output from test criteria', function () {
            for (var i in testData) {
                var test = testData[i];

                /* Matchmedia needs to have a dummy response */
                matchmedia.isTablet = function () {
                    return test.matchmedia;
                }

                expect($scope.isTablet()).toEqual(test.expectedOutput);
            }
        });
    });

    describe('Function :: Is Desktop ---------------------- */', function () {

        /* Using the same test criteria from isTablet test so no need to replicate here */

        it('expects $scope.isDesktop to match output from test criteria', function () {
            for (var i in testData) {
                var test = testData[i];

                /* Matchmedia needs to have a dummy response */
                matchmedia.isDesktop = function () {
                    return test.matchmedia;
                }

                expect($scope.isDesktop()).toEqual(test.expectedOutput);
            }
        });
    });

    describe('Function :: Toggle Menu ---------------------- */', function () {

        it('expects $scope.toggleMenu to toggle $scope.navOptionsVert.open between false, then true', function () {
            $scope.toggleMenu();
            expect($scope.navOptionsVert.open).toBe(false);

            $scope.toggleMenu();
            expect($scope.navOptionsVert.open).toBe(true);
        });
    });

    describe('Function :: Update Work Tasks ---------------------- */', function () {

        var notificationsApiUrl;
        var notificationResults;

        beforeEach(function () {
            notificationsApiUrl = 'api/notifications/latest.json';
            notificationResults = [{
                "taskName": "User x started following you",
                "taskStatus": "Completed",
                "taskId": 1,
                "taskDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "taskCreatedOn": 1446670266
            }, {
                "taskName": "User y started following you",
                "taskStatus": "Available",
                "taskId": 2,
                "taskDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "taskCreatedOn": 1446670266
            }, {
                "taskName": "User z started following you",
                "taskStatus": "Available",
                "taskId": 3,
                "taskDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "taskCreatedOn": 1446670266
            }];

            $httpBackend.when('GET', notificationsApiUrl).respond(200, notificationResults);
            $httpBackend.flush();
        });

        it('should load the work tasks', function () {

            expect($scope.completedWorkTasks).toEqual([{
                "taskName": "User x started following you",
                "taskStatus": "Completed",
                "taskId": 1,
                "taskDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "taskCreatedOn": 1446670266
            }]);

            expect($scope.availableWorkTasks).toEqual([{
                "taskName": "User y started following you",
                "taskStatus": "Available",
                "taskId": 2,
                "taskDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "taskCreatedOn": 1446670266
            }, {
                "taskName": "User z started following you",
                "taskStatus": "Available",
                "taskId": 3,
                "taskDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "taskCreatedOn": 1446670266
            }]);

        });

        it('should register the interval', function () {

            spyOn($scope, 'updateWorktasks');

            $interval.flush(180001);

            expect($scope.updateWorktasks).toHaveBeenCalled();
        });
    });

    describe('Function :: To The Top ---------------------- */', function () {

        beforeEach(function () {
            spyOn(window, 'scrollTo');
        });

        it('should scroll back to the top of the page', function () {
            $scope.toTheTop();

            expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
        })
    });

    describe('Function :: Is External ---------------------- */', function () {

        it('expects the current location to be the login page', inject(function ($location, $browser) {
            $location.path('/login');

            expect($scope.isExternal()).toEqual(true);
        }));

        it('expects the current location not to be the login page', function () {
            $location.path('/dashboard');

            expect($scope.isExternal()).toEqual(false);
        });
    });

    describe('Functions With GlobalFactory Calls ---------------------- */', function () {

        it('expects $scope.removeFromArray to call GlobalFactory.removeFromArray', function () {

            $scope.removeFromArray();

            expect(GlobalFactory.removeFromArray).toHaveBeenCalled();
        });

        it('expects $scope.checkValidDate to call GlobalFactory.dateValid', function () {

            $scope.checkValidDate();

            expect(GlobalFactory.dateValid).toHaveBeenCalled();
        });

        it('expects $scope.checkValidTime to call GlobalFactory.dateValid', function () {

            $scope.checkValidTime();

            expect(GlobalFactory.dateValid).toHaveBeenCalled();
        });

        it('expects $scope.inArray to call GlobalFactory.inArray', function () {

            $scope.inArray();

            expect(GlobalFactory.inArray).toHaveBeenCalled();
        });
    });

    describe('Function :: Has Entry ---------------------- */', function () {

        var entry;

        it('expects $scope.hasEntry to return false when entry is undefined', function () {
            expect($scope.hasEntry(entry)).toEqual(false);
        });

        it('expects $scope.hasEntry to return false when entry = 0', function () {
            entry = 0;

            expect($scope.hasEntry(entry)).toEqual(false);
        });

        it('expects $scope.hasEntry to return false when entry = \'0\'', function () {
            entry = '0';

            expect($scope.hasEntry(entry)).toEqual(false);
        });

        it('expects $scope.hasEntry to return false when entry = null', function () {
            entry = null;

            expect($scope.hasEntry(entry)).toEqual(false);
        });

        it('expects $scope.hasEntry to return true when entry = 1', function () {
            entry = 1;

            expect($scope.hasEntry(entry)).toEqual(true);
        });
    });

});
