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

    .otherwise({redirectTo: '/'});
  });
