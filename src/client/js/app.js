angular.module('app', ['ngRoute'])
.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'home/home.html',
      controller: 'HomeController'
    })
    .when('/products', {
      templateUrl: 'products/products.html',
      controller: 'ProductsController'
    })
    .when('/showpage', {
      templateUrl: 'showpage/showpage.html',
      controller: 'ShowpageController'
    })
    .when('/add_game', {
      templateUrl: 'add_game/add_game.html',
      controller: 'AddgameController'
    })
    .when('/register', {
      templateUrl: 'auth/register/register.html',
      controller: 'RegisterController'
    })
    .when('/login', {
      templateUrl: 'auth/login/login.html',
      controller: 'LoginController'
    })
    .when('/logout', {
      controller: 'LogoutController'
    })

    .otherwise({redirectTo: '/'});
  });
