/**
 * Created by yatree on 30/09/16.
 */
(function mainController() {
    'use strict';

    angular.module('myApp')
        .controller('mainController', ['$scope',
            function ($scope) {
                console.log('Running Main Controller!');

                $scope.active = true;
                $scope.arrowClass = 'menu-arrow-open';
                $scope.openMenu = function () {
                    $scope.active = !$scope.active;
                    if ($scope.active) {
                        $scope.arrowClass = 'menu-arrow-open'
                    } else {
                        $scope.arrowClass = 'menu-arrow-close'
                    }
                };
            }]
        );
})();
