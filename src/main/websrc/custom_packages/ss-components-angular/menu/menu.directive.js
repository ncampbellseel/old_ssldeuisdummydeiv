/*jshint latedef:false*/

//Directive - ssMenu

(function () {
    'use strict';

    angular
        .module('ssMenu',[])
        .directive('ssMenu', ssMenu);

    ssMenu.$inject = [];

    function ssMenu() {

        return {
            restrict: 'E',
            templateUrl: 'components/menu/menu.template.html',
            scope: {
                tasks: '=?',
                options: '=',
                media: '=?'
            },
            controller: function ($scope, $location, $timeout, $document) {

                if ($scope.options.type === 'vert') {
                    $scope.menuType = 'vertical-nav';
                } else {
                    $scope.menuType = 'header-nav';
                }

                $scope.expandedItem = null;
                $scope.activeItem = 1;

                if ($scope.media.phone || $scope.media.tablet) {
                    $scope.options.open = false;
                }

                $scope.$on('$routeChangeStart', function (event, next) {
                    if (next.$$route && next.$$route.originalPath) {
                        var newRoute = next.$$route.originalPath;
                        $scope.highlightPage(newRoute);
                    }
                });

                if ($scope.menuType === 'header-nav') {

                    $document.on('click', function () {
                        $scope.$apply(function () {
                            $scope.toggleState($scope.expandedItem);
                        });
                    });
                }

                $scope.highlightPage = function (path) {

                    if ($scope.options && !_.isNil($scope.options.pages)) {

                        if ($scope.menuType === 'vertical-nav') {

                            var current;

                            if (path) {
                                current = path;
                            } else {
                                current = $location.path().substring(1);
                            }

                            var items = $scope.options.pages;
                            var match = _.find(items, _.matchesProperty('link', current));

                            if (match) {
                                $scope.activeItem = match.id;
                                $scope.expandedItem = match.id;
                                return;

                            } else {

                                for (var s = 0; s < items.length; s++) {

                                    var subMatch = _.find(items[s].subPages, _.matchesProperty('link', current));

                                    if (subMatch) {
                                        $scope.activeItem = subMatch.id;
                                        $scope.expandedItem = items[s].id;
                                        return;
                                    }
                                }
                            }
                        }
                    }
                };

                $scope.toggleMenu = function () {
                    $scope.options.open = !$scope.options.open;
                };

                $scope.toggleState = function (id) {
                    if ($scope.expandedItem === id) {
                        $scope.expandedItem = null;
                    } else {
                        $scope.expandedItem = id;
                    }
                };

                $scope.collapseMenu = function () {
                    $scope.options.mini = !$scope.options.mini;

                    $timeout(function () {
                        $scope.$apply();
                    });
                };

                $scope.checkActivePages = function (page) {

                    if ($scope.menuType === 'vertical-nav') {

                        var subPages = page.subPages;

                        if ($scope.activeItem === page.id) {
                            return true;
                        } else {
                            if (subPages) {
                                for (var s = 0; s < subPages.length; s++) {
                                    if (subPages[s].id === $scope.activeItem) {
                                        return true;
                                    }
                                }
                            }
                        }
                        return false;
                    }

                };

                $scope.goToPage = function (e, url, id, parentId) {

                    if (url) {

                        if ($scope.activeItem !== id) {
                            $scope.activeItem = id;

                            if (parentId) {
                                $scope.expandedItem = parentId;
                            } else {
                                $scope.expandedItem = id;
                            }
                        }

                        $location.path('/' + url);

                        if ($scope.media.phone || $scope.media.tablet) {
                            $scope.options.open = false;
                        }

                    } else {
                        if (!parentId) {
                            $scope.toggleState(id);
                        }
                    }
                    e.stopPropagation();
                };

                $scope.checkLink = function (obj) {
                    if (obj.subPages && obj.subPages.length) {
                        return false;
                    } else {
                        return obj.link;
                    }
                };

                var init = function () {

                    $scope.$watch('options.pages', function (newVal) {
                        if (newVal) {
                            $scope.highlightPage();
                        }
                    });
                };

                return init();
            }
        };

    }

})();

/*jshint latedef:false*/

//Directive - ssMenuItem

(function () {
    'use strict';

    angular
        .module('ssMenuItem',[])
        .directive('ssMenuItem', ssMenuItem);

    ssMenuItem.$inject = [];

    function ssMenuItem() {

        return {
            restrict: 'A',
            templateUrl: 'components/menu/menu-item.template.html',
        };
    }

})();
