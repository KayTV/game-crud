angular.module('app')
.controller('LoginController', ['$scope', 'httpFactory', function($scope, httpFactory){
  $scope.user = {};
  $scope.title = 'login';

  $scope.login = function() {
    console.log($scope.user);
  }

}]);
