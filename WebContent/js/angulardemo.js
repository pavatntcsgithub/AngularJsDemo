   var app = angular.module("demoApp", []);
    app.controller("demoCtrl", function($scope) {
        $scope.user = "TCS user @ Humana";
        $scope.location = "Louisville, KY";
        $scope.image="/img/go365.png";
    });