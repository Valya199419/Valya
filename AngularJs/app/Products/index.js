var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http.get("index.json")
        .then(function(response) {
            $scope.myWelcome = response.data;
            console.log($scope.myWelcome.data.products);


        });
    $scope.myImg = {
        "width" : "250px",
        "height" : "200px",
        "margin-top": "20px"
    };

});