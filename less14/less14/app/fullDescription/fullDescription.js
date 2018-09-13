'use strict';

angular.module('myApp.fullDescription', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/fullDescription', {
            templateUrl: 'fullDescription/fullDescription.html',
            controller: 'FullDescriptionCtrl'
        });
    }])

    .controller('FullDescriptionCtrl',['$scope','$http','$location',function($scope, $http,$location) {

    }]);