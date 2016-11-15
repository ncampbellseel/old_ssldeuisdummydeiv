/*jshint latedef:false*/

//Directive - ssBackToTop

(function () {
    'use strict';

    angular
        .module('ssBackToTop', [])
        .directive('ssBackToTop', ssBackToTop);

    ssBackToTop.$inject = ['$compile'];

    function ssBackToTop($compile) {

        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            templateUrl: 'components/back-to-top/back-to-top.template.html',
            scope: {
                text: '@buttonText',
                speed: '@scrollSpeed'
            },
            link: function (scope, element) {
                $compile(element.contents())(scope.$new());

                var self = element;

                scope.currentYPosition = function () {

                    if (self.pageYOffset) {
                        return self.pageYOffset;
                    }
                    if (document.documentElement && document.documentElement.scrollTop) {
                        return document.documentElement.scrollTop;
                    }
                    if (document.body.scrollTop) {
                        return document.body.scrollTop;
                    }
                    return 0;
                };

                scope.smoothScroll = function () {
                    var startY = scope.currentYPosition();
                    var stopY = 0;
                    var distance = stopY > startY ? stopY - startY : startY - stopY;
                    if (distance < 100) {
                        scrollTo(0, stopY);
                        return;
                    }
                    var speed = Math.round(scope.speed / 100);
                    var step = Math.round(distance / 25);
                    var leapY = stopY > startY ? startY + step : startY - step;
                    var timer = 0;
                    if (stopY > startY) {
                        for (var i = startY; i < stopY; i += step) {
                            setTimeout('window.scrollTo(0, ' + leapY + ')', timer * speed);
                            leapY += step;
                            if (leapY > stopY) {
                                leapY = stopY;
                            }
                            timer++;
                        }
                        return;
                    }
                    for (var j = startY; j > stopY; j -= step) {
                        setTimeout('window.scrollTo(0, ' + leapY + ')', timer * speed);
                        leapY -= step;
                        if (leapY < stopY) {
                            leapY = stopY;
                        }
                        timer++;
                    }
                };

                scope.button = $(element).find('button');

                scope.button.on('click', function () {
                    scope.smoothScroll();
                    $(element).removeClass('show');
                });

                window.addEventListener('scroll', function () {
                    var top = (window.scrollY || window.pageYOffset);
                    if (top > 0) {
                        $(element).addClass('show');
                    } else {
                        $(element).removeClass('show');
                    }
                });
            }
        };
    }

})();
