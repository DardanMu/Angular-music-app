'use strict';

angular.module('angularMusicApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'SongCtrl',
        reloadOnSearch: false
      })
      // .when('/about', {
      //   templateUrl: 'views/about.html',
      //   controller: 'MainCtrl'
      // })
      .otherwise({
        redirectTo: '/'
      });
  });