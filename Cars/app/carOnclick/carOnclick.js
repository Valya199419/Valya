'use strict';

angular.module('myApp.carOnclick', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/carOnclick', {
            templateUrl: 'carOnclick/carOnclick.html',
            controller: 'CarOnclickCtrl'
        });
    }])
    .controller('CarOnclickCtrl', ['$scope','$http','$location',function($scope,$http,$location) {

        $http.get("http://localhost:8081/api/car_list")
            .then(function(response) {
                var cars = response.data;

                var PageUrl = $location.url();
                console.log(PageUrl);
                var carId = PageUrl.slice(12);
                var FindCarById = function(TakeId){
                    return cars.find(x => x._id === TakeId);
                }
                     $scope.oneCar =  FindCarById(carId);


                // $scope.hashik = $location.hash();


            });
    }]);
