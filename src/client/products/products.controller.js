angular.module('app')
.controller('ProductsController', ['$scope', 'httpFactory', function($scope, httpFactory){
  $scope.title = 'Products';

function activate() {
  httpFactory.getGames()
    .then(function(response){
      console.log(response);
      $scope.games = response.data;
    });
  };
  activate();

}]);
