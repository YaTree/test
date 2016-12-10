/**
 * Created by yatree on 08/12/16.
 */
angular.module('myApp')
    .directive('activityList', function (dataService) {
        return {
            restrict: 'E',
            scope: {
                titleList: "@"
            },
            templateUrl: 'html/directives/activity-list.html',
            controller: function ($scope, $rootScope, $element) {
                $scope.objectList = dataService.getActivitys();
                $scope.dataService = dataService;
            }
        }
    });
