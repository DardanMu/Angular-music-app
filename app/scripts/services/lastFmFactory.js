'use strict';

app.factory('lastFmFactory', function($http){
    $http.defaults.useXDomain = true;

    var lastFmApi = {
      'artistInfo'          : 'http://music-app-server.local:3000/api/v1.0/artist?name=',
      'artistEvents'        : 'http://music-app-server.local:3000/api/v1.0/eventsByArtist',
      'eventsByLocation'    : 'http://music-app-server.local:3000/api/v1.0/eventsByLocation',
      'topArtists'          : 'http://music-app-server.local:3000/api/v1.0/topArtistsByLocation',
      'hypedArtists'        : 'http://music-app-server.local:3000/api/v1.0/hypedArtists'
    };

    var factory = {};

    factory.getArtistData = function(artistName){
      return $http.get(lastFmApi.artistInfo+artistName);
    };

    factory.getArtistEventData = function(artistName, location){

    };

    factory.getEventsByLocation = function(location){

    };

    factory.getTopArtists = function(location){

    };

    factory.getHypedArtists = function(location){

    };




    return factory;
  });
