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
      templateUrl: 'register/register.html',
      controller: 'RegisterController'
    })
    .when('/login', {
      templateUrl: 'login/login.html',
      controller: 'LoginController'
    })
    // .when('/logout', {
    //   templateUrl: 'register/register.html'
    // })

    .otherwise({redirectTo: '/'});
  });
