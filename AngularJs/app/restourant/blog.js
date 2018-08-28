var app = angular.module('myApp1', []);
app.controller('myCtrl1', function($scope, $http) {
    $http.get("blog.json")
        .then(function(response) {
            $scope.myWelcome = response.data;
            console.log($scope.myWelcome.data.restoran);


        });
    $scope.myImg = {
        "width" : "250px",
        "height" : "200px",
        "margin-top": "20px"
    };

});