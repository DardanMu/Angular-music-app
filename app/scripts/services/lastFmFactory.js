'use strict';

app.factory('lastFmFactory', function($http){
    $http.defaults.useXDomain = true;

    var lastFmApi = {
      'apiUrl'    : 'http://music-app-server.local:3000/api/artist?name='
    };

    var factory = {};
    factory.getArtistData = function(artistName){
      return $http.get(lastFmApi.apiUrl+artistName);
    };
    return factory;
  });