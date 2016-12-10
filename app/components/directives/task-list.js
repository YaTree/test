/**
 * Created by yatree on 08/12/16.
 */
angular.module('myApp')
    .directive('taskList', function (dataService) {
        return {
            restrict: 'E',
            scope: {
                titleList: "@"
            },
            templateUrl: 'html/directives/task-list.html',
            controller: function ($scope, $rootScope, $element) {
                $scope.objectList = dataService.getTasks();
                $scope.dataService = dataService;
            }
        }
    });
