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
      templateUrl: "views/home/index.html",
      controller: 'HomeCtrl'
    })
    .state('home.topArtists', {
        views: {
            "currentMusicTrends": { templateUrl: "views/home/topArtists.html" }
        }
    })
    .state('home.hypedArtists', {
        views: {
            "currentMusicTrends": { templateUrl: "views/home/hypedArtists.html" }
        }
    })
    .state('home.events', {
        views: {
            "currentMusicTrends": { templateUrl: "views/home/events.html" }
        }
    })

    .state('look-up-artist', {
      url: "/look-up-artist?artist",
      reloadOnSearch: false,
      templateUrl: "views/main.html",
      controller: 'SongCtrl'
    })
  });
