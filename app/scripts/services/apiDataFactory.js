'use strict';

app.factory('apiDataFactory', function($http){
    $http.defaults.useXDomain = true;

    var ENV = 'development';

    var baseUrl = {
            development: {
                'url' : 'http://music-app-server.local:3000'
            },
            production: {
                'url' : 'http://music-discovery-app.dardanmu.com'
            }
    }

    var apiEndpoints = {
      'songsByArtist'       : '/api/v1.0/songsByArtist?artist=',
      'artistInfo'          : '/api/v1.0/artist?name=',
      'artistEvents'        : '/api/v1.0/eventsByArtist?artist=',

      'eventsByLocation'    : '/api/v1.0/eventsByLocation',
      'topArtists'          : '/api/v1.0/topArtistsByLocation',
      'hypedArtists'        : '/api/v1.0/hypedArtists'
    };

    var factory = {};

    factory.getSongs = function(artistName){
        return $http.get(baseUrl[ENV].url + apiEndpoints.songsByArtist+artistName);
    };

    factory.getArtistData = function(artistName){
        return $http.get(baseUrl[ENV].url + apiEndpoints.artistInfo+artistName);
    };

    factory.getArtistEventData = function(artistName, location){
        return $http.get(baseUrl[ENV].url + apiEndpoints.artistEvents+artistName+ '&lat='+ location.lat+ '&long='+ location.long);
    };

    factory.getEventsByLocation = function(location, pageNumber){
        return $http.get(baseUrl[ENV].url + apiEndpoints.eventsByLocation+ '?lat='+ location.lat+ '&long='+ location.long+ '&page='+ pageNumber);
    };

    factory.getTopArtists = function(location){
        return $http.get(baseUrl[ENV].url + apiEndpoints.topArtists+ '?lat='+ location.lat+ '&long='+ location.long);
    };

    factory.getHypedArtists = function(){
        return $http.get(baseUrl[ENV].url + apiEndpoints.hypedArtists, { cache: true});
    };


    return factory;
  });
