angular.module('app')
.factory('httpFactory', ['$http', function($http){
  var factory = {};

  factory.getGames = function() {
    return $http({
      method: 'GET',
      url: '/games'
    });
  };

  factory.addGame = function(game) {
    return $http ({
      method: 'POST',
      url: '/game',
      data: {game: game}
    });
  };

  factory.getGame = function(id) {
    return $http({
      method: 'GET',
      url: '/showpage/'+id
    });
  };

  factory.getCurrentGame = function() {
      return gameId;
  }

  factory.setCurrentGame = function(id) {
    gameId = id;
    console.log('gameId', gameId);
    return gameId;
  }

  factory.deleteGame = function(id) {
    return $http({
      method: 'DELETE',
      url: '/showpage/'+id
    });
  }

  return factory;

}]);
