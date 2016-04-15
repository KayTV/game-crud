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
    .when('/register', {
      templateUrl: 'register/register.html'
    })
    .when('/login', {
      templateUrl: 'login/login.html'
    })
    // .when('/logout', {
    //   templateUrl: 'register/register.html'
    // })

    .otherwise({redirectTo: '/'});
  });
