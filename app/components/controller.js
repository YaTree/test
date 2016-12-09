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
                $scope.openMenu = function () {
                    $scope.active = !$scope.active;
                };
            }]
        );
})();
