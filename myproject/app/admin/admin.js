'use strict';

angular.module('myApp.admin', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/admin', {
            templateUrl: 'admin/admin.html',
            controller: 'AdminCtrl'
        });
    }])

    .controller('AdminCtrl', ['$scope','$http','$location', function($scope,$http, $location) {

        $http.get("http://localhost:8081/api/car_list")
            .then(function(response) {
                $scope.cars = response.data;;
            });

        $scope.create = function() {
            console.log( $scope.car);

            var formicEkacTvyalner = $scope.car;

            $http.post('http://localhost:8081/create', (formicEkacTvyalner, response) => {
                const postBody = formicEkacTvyalner.body;
                console.log(postBody);
            });
            /*
                                    $http.post('http://localhost:8081/create',aaa).success(function(aaa, status) {
                                        console.log('Data posted successfully');
                                    })
            */                      function timeoutFunction() {
                setTimeout(function(){location.reload(); }, 3000);
            };
            timeoutFunction();


        };


    }]);

//https://stackoverflow.com/questions/39153424/how-to-pass-a-json-object-to-node-js-server
//https://stackoverflow.com/questions/47706022/error-cannot-find-module-cors