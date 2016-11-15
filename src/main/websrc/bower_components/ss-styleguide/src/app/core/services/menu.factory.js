/*jshint latedef:false*/

//Factory - MenuFactory

(function() {
    /*jshint -W004 */

    'use strict';

    angular
        .module('xyz.service.menu', [])
        .factory('MenuFactory', MenuFactory);

    MenuFactory.$inject = ['$http'];

    function MenuFactory($http) {

        var MenuFactory = {};

        MenuFactory.menu = function() {
            return $http.get('/routes.json');
        };

        MenuFactory.main = function() {


            var menu = [{
                id: 1,
                title: 'Home',
                icon: 'fa-home',
                link: 'home',
                primary: true
            }, {
                id: 2,
                title: 'Best Practices',
                icon: 'fa-bullseye',
                link: 'best-practices',
                subPages: [{
                    id: 21,
                    title: 'Accessibility',
                    link: 'accessibility'
                }, {
                    id: 22,
                    title: 'CSS Guidelines',
                    link: 'css-guidelines'
                }, {
                    id: 23,
                    title: 'SASS Guidelines',
                    link: 'sass-guidelines'
                }, {
                    id: 24,
                    title: 'Responsive Design',
                    link: 'responsive-design'
                }]
            }, {
                id: 3,
                title: 'Layout',
                icon: 'fa-object-group',
                link: false,
                subPages: [{
                    id: 31,
                    title: 'Breakpoints',
                    link: 'breakpoints'
                }, {
                    id: 32,
                    title: 'Grid',
                    link: 'grid'
                }, {
                    id: 33,
                    title: 'Spacing',
                    link: 'spacing'
                }, {
                    id: 34,
                    title: 'Widths',
                    link: 'widths'
                }, {
                    id: 35,
                    title: 'Vertical Rhythm',
                    link: 'vertical-rhythm'
                }]
            }, {
                id: 4,
                title: 'Type',
                icon: 'fa-font',
                link: false,
                subPages: [{
                    id: 41,
                    title: 'Typography',
                    link: 'typography'
                }, {
                    id: 42,
                    title: 'Font Families',
                    link: 'font-families'
                }]
            }, {
                id: 5,
                title: 'Elements',
                icon: 'fa-puzzle-piece',
                link: false,
                subPages: [{
                    id: 51,
                    title: 'Borders',
                    link: 'borders'
                }, {
                    id: 52,
                    title: 'Colors',
                    link: 'colors'
                }, {
                    id: 53,
                    title: 'Forms',
                    link: 'forms'
                }, {
                    id: 54,
                    title: 'Images',
                    link: 'images'
                }, {
                    id: 55,
                    title: 'Icons',
                    link: 'icons'
                }, {
                    id: 56,
                    title: 'Links',
                    link: 'links'
                }, {
                    id: 57,
                    title: 'Lists',
                    link: 'lists'
                }, {
                    id: 58,
                    title: 'Tables',
                    link: 'tables'
                }]
            }, {
                id: 6,
                title: 'Animations',
                icon: 'fa-repeat',
                link: false,
                subPages: [{
                    id: 61,
                    title: 'Animations',
                    link: 'animations'
                }, {
                    id: 62,
                    title: 'Transitions',
                    link: 'transitions'
                }]
            }, {
                id: 7,
                title: 'Components',
                icon: 'fa-cubes',
                link: false,
                subPages: [{
                    id: 71,
                    title: 'Buttons',
                    link: 'buttons'
                }, {
                    id: 72,
                    title: 'Text Input',
                    link: 'text-input'
                }, {
                    id: 73,
                    title: 'Dropdown',
                    link: 'dropdown'
                }, {
                    id: 74,
                    title: 'Radios and Checkboxes',
                    link: 'radios-and-checkboxes'
                }]
            }];

            MenuFactory.menu().success(function(data) {

                    _.forEach(data, function(value, key) {

                        var match = _.find(menu, _.matchesProperty('title', value.type));

                        if(match) {
                            match.subPages.push(value.item);
                        }
                    });

                })
                .error(function(data) {
                    console.log(data);
                });

            return menu;
        };

        return MenuFactory;

    }

})();
