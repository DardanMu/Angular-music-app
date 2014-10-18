'use strict';

angular.module('angularMusicApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.router',
  'geolocation'
])
  .config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "views/home.html",
      controller: 'HomeCtrl'
    })
    .state('look-up-artist', {
      url: "/look-up-artist?artist",
      reloadOnSearch : false,
      templateUrl: "views/main.html",
      controller: 'SongCtrl'
    })
  });
