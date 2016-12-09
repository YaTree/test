/**
 * Created by yatree on 08/12/16.
 */
angular.module('myApp')
    .directive('chartBuilder', function (dataService) {
        return {
            restrict: 'E',
            scope: {
                title: "@",
                src: "@"
            },
            templateUrl: 'html/directives/chart-builder.html'
        }
    });