var app = angular.module('myApp2', []);
app.controller('myCtrl2', function($scope, $http) {
    $http.get("contact.json")
        .then(function(response) {
            $scope.myWelcome = response.data;
            console.log($scope.myWelcome.data.componies);


        });
    $scope.myImg = {
        "width" : "250px",
        "height" : "200px",
        "margin-top": "20px"
    };

});