'use strict';

app.factory('apiDataFactory', function($http){
    $http.defaults.useXDomain = true;

    var apiUrls = {
      'songsByArtist'       : 'http://music-app-server.local:3000/api/v1.0/songsByArtist?artist=',
      'artistInfo'          : 'http://music-app-server.local:3000/api/v1.0/artist?name=',
      'artistEvents'        : 'http://music-app-server.local:3000/api/v1.0/eventsByArtist?artist=',

      'eventsByLocation'    : 'http://music-app-server.local:3000/api/v1.0/eventsByLocation',
      'topArtists'          : 'http://music-app-server.local:3000/api/v1.0/topArtistsByLocation',
      'hypedArtists'        : 'http://music-app-server.local:3000/api/v1.0/hypedArtists'
    };

    var factory = {};

    factory.getSongs = function(artistName){
        return $http.get(apiUrls.songsByArtist+artistName);
    };

    factory.getArtistData = function(artistName){
        return $http.get(apiUrls.artistInfo+artistName);
    };

    factory.getArtistEventData = function(artistName, location){
        return $http.get(apiUrls.artistEvents+artistName+ '&lat='+ location.lat+ '&long='+ location.long);
    };

    factory.getEventsByLocation = function(location){
        return $http.get(apiUrls.eventsByLocation+ '?lat='+ location.lat+ '&long='+ location.long);
    };

    factory.getTopArtists = function(location){
        return $http.get(apiUrls.topArtists+ '?lat='+ location.lat+ '&long='+ location.long);
    };

    factory.getHypedArtists = function(){
        return $http.get(apiUrls.hypedArtists);
    };


    return factory;
  });
