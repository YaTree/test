/**
 * Created by yatree on 08/12/16.
 */
angular.module('myApp')
    .directive('userMessage', function (dataService) {
        return {
            restrict: 'A',
            scope: {
                someObject: "@"
            },
            templateUrl: 'html/directives/message.html',
            controller: function ($scope, $rootScope, $element) {
                var object = JSON.parse($scope.someObject);
                $scope.imageSrc = object["image"];
                $scope.userName = object["name"];
                $scope.timeLeft = dataService.timeLeftFromMin(object["received"]);
                $scope.textMessage  = object["text"];

                if (object["isNew"] == 1) {
                    $scope.isNew = true;
                }

                $scope.markMessage = function () {
                    if($scope.isNew == true) {
                        $scope.isNew = false;
                        dataService.count--
                    }
                }
            }
        }
    });
