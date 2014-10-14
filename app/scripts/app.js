'use strict';

angular.module('angularMusicApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.router',
  'geolocation'
])
  // .config(function ($routeProvider) {
  //   $routeProvider
  //     .when('/', {
  //       templateUrl: 'views/main.html',
  //       controller: 'SongCtrl',
  //       reloadOnSearch: false
  //     })
  //     // .when('/about', {
  //     //   templateUrl: 'views/about.html',
  //     //   controller: 'MainCtrl'
  //     // })
  //     .otherwise({
  //       redirectTo: '/'
  //     });
  // });


  .config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "views/home.html",
      controller: 'HomeCtrl'
    })
    .state('look-up-artist', {
      url: "/look-up-artist",
      templateUrl: "views/main.html",
      controller: 'SongCtrl'
    })
  });
