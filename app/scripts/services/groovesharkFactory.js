'use strict';

app.factory('groovesharkFactory', function($http){
    $http.defaults.useXDomain = true;

    var groovesharkApi = {
      'songsByArtist'    : 'http://music-app-server.local:3000/api/v1.0/songsByArtist?artist='
    };

    var factory = {};
    factory.getSongs = function(artistName){
      return $http.get(groovesharkApi.songsByArtist+artistName);
    };
    return factory;
  });
