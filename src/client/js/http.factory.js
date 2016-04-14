angular.module('app')
.factory('httpFactory', ['$http', function($http){
  var factory = {};

  factory.getGames = function() {
    return $http({
      method: 'GET',
      url: '/games'
    });
  };

  return factory;

}]);
