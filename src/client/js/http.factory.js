angular.module('app')
.factory('httpFactory', ['$http', function($http){
  var factory = {};

  factory.getGames = function() {
    return $http({
      method: 'GET',
      url: '/games'
    });
  };

  factory.getGame = function(id) {
    return $http({
      method: 'GET',
      url: '/showpage/'+id
    });
  };

  factory.getCurrentGame = function() {
      return movieId;
  }

  factory.setCurrentGame = function(id) {
    gameId = id;
    console.log('gameId', gameId);
    return gameId;
  }

  return factory;

}]);
