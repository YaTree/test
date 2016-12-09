/**
 * Created by yatree on 08/12/16.
 */
angular.module('myApp')
    .directive('userTask', function (dataService) {
        return {
            restrict: 'A',
            scope: {
                someObject: "@"
            },
            templateUrl: 'html/directives/task.html',
            controller: function ($scope, $rootScope, $element) {
                var object = JSON.parse($scope.someObject);
                $scope.imageSrc = object["image"];
                $scope.title = object["title"];
                $scope.textMessage  = object["text"];

                if (parseInt(object["delay"]) > 0) {
                    $scope.failed = true;
                    $scope.taskState = object["delay"] + " day(s) delay";
                } else {
                    $scope.taskState = object["left"] + " day(s) left";
                }
            }
        }
    });
