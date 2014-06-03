'use strict';

app.factory('lastFmFactory', function($http){
    $http.defaults.useXDomain = true;

    var lastFmApi = {
      'apiUrl'    : 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=',
      'urlParams' : '&autocorrect=1&format=json&api_key=',
      'apiKey'    : 'b58473f5006d02f1809cfec98c17011d'
    };

    var factory = {};
    factory.getArtistData = function(artistName){
      return $http.get(lastFmApi.apiUrl+artistName+lastFmApi.urlParams+lastFmApi.apiKey);
    };
    return factory;
  });