/*jshint latedef:false*/

//Directive - ssTabset

(function() {
    'use strict';

    angular
        .module('ssTabset', [
            'ssTab'
        ])
        .directive('ssTabset', ssTabset);

    ssTabset.$inject = [];

    function ssTabset() {

        return {
            restrict: 'E',
            transclude: true,
            templateUrl: 'components/tabs/tabset.template.html',
            scope: {},
            bindToController: true,
            controllerAs: 'ssTabset',
            controller: function() {
                var self = this;
                self.tabs = [];

                self.addTab = function(tab) {
                    self.tabs.push(tab);

                    if (self.tabs.length === 1) {
                        tab.current = true;
                    }
                };

                self.select = function(selectedTab) {
                    angular.forEach(self.tabs, function(tab) {
                        if (tab.current && tab !== selectedTab) {
                            tab.current = false;
                        }
                    });

                    selectedTab.current = true;
                };
            }
        };
    }

})();
