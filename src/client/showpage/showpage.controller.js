angular.module('app')
.controller('ShowpageController', ['$scope', '$location', 'httpFactory', function($scope, $location, httpFactory){
  $scope.title = 'test';
  function activate() {
    var id = httpFactory.getCurrentGame();
    httpFactory.getGame(id)
    .then(function(response){
      console.log(response);
      $scope.game = response.data;
    });
  }
  activate();

}]);
