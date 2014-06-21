'use strict';

app.factory('groovesharkFactory', function($http){
    $http.defaults.useXDomain = true;

    var groovesharkApi = {
      'apiUrl'    : 'http://music-app-server.local:3000/api/songs?artist='
    };
    
    var factory = {};
    factory.getSongs = function(artistName){
      return $http.get(groovesharkApi.apiUrl+artistName);
    };
    return factory;
  });