/**
 * Created by yatree on 08/12/16.
 */
angular.module('myApp')
    .directive('messageList', function (dataService) {
        return {
            restrict: 'E',
            scope: {
                titleList: "@"
            },
            templateUrl: 'html/directives/message-list.html',
            controller: function ($scope, $rootScope, $element) {
                $scope.objectList = dataService.getMessages();
                $scope.dataService = dataService;
            }
        }
    });
