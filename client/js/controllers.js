var app = angular.module('hellaHalah');

app.controller('HomeController', function($scope, projects){
  $scope.projects = projects;
});
