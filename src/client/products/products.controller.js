angular.module('app')
.controller('ProductsController', ['$scope', 'httpFactory', function($scope, httpFactory){
  $scope.title = 'Products';

}]);
