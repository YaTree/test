/**
 * Created by yatree on 08/12/16.
 */
angular.module('myApp')
    .directive('userActivity', function (dataService) {
        return {
            restrict: 'A',
            scope: {
                someObject: "@"
            },
            templateUrl: 'html/directives/activity.html',
            controller: function ($scope, $rootScope, $element) {
                var object = JSON.parse($scope.someObject);
                $scope.imageSrc = object["image"];
                $scope.title = object["title"];
                $scope.who = object["who"];
                $scope.action = object["action"];
                $scope.what = object["what"];
                $scope.when = dataService.timeLeftFromMin(object["when"]);
            }
        }
    });
