angular.module('app')
.controller('RegisterController', ['$scope', 'httpFactory', function($scope, httpFactory){
  $scope.user = {};
  $scope.title = 'register';

  $scope.register = function() {
    console.log($scope.user);
  }

}]);
