var app = angular.module('hellaHalah', ['ngRoute', 'ngResource','ngAnimate','ui.bootstrap']);
app.config(function($routeProvider, $locationProvider, $httpProvider){

  $routeProvider
  .when('/', {
    templateUrl: '/client/views/home.html',
    controller: 'HomeController'
  })
  .otherwise({
    redirectTo: '/'
  });
});
