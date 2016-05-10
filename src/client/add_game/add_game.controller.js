angular.module('app')
.controller('AddgameController', ['$scope', '$location', 'httpFactory', function($scope, $location, httpFactory){
  $scope.title = 'Add Game';

  $scope.addGame = function() {
    httpFactory.addGame($scope.newGame)
    .then(function(response){
      console.log('success', response);
    })
  }

}]);
