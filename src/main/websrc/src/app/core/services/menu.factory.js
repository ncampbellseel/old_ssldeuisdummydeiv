/*jshint latedef:false*/

//Factory - MenuFactory

(function () {
    /*jshint -W004 */

    'use strict';

    angular
        .module('app.service.menu', [])
        .factory('MenuFactory', MenuFactory);

    MenuFactory.$inject = [];

    function MenuFactory() {

        var MenuFactory = {};

        MenuFactory.main = function () {
            var menu = [{
                id: 1,
                title: 'app.dashboard.name',
                nav: 'app.dashboard.name',
                description: null,
                icon: 'fa-home',
                link: 'dashboard',
                dash: false,
                primary: true,
                roles: ['admin']
            }];

            return menu;
        };

        MenuFactory.account = function () {
            var menu = [{
                id: 1000,
                nav: 'John Smithington',
                icon: 'fa-user',
                link: '#',
                primary: true,
                roles: ['admin'],
                subPages: [{
                    id: 1001,
                    nav: 'My Account',
                    icon: 'fa-key',
                    link: '#',
                    roles: ['admin']
                }, {
                    id: 1002,
                    nav: 'app.global.logout',
                    icon: 'fa-key',
                    link: 'logout',
                    roles: ['admin']
                }]
            }];

            return menu;
        };

        return MenuFactory;

    }

})();
