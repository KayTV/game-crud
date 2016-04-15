angular.module('app')
.controller('ProductsController', ['$scope', 'httpFactory', function($scope, httpFactory){
  $scope.title = 'Game Library';

function activate() {
  httpFactory.getGames()
    .then(function(response){
      console.log(response);
      $scope.games = response.data;
    });
  };
  activate();

  $scope.setCurrentGame = function(id) {
    httpFactory.setCurrentGame(id)
      console.log(id);
  };

}]);
