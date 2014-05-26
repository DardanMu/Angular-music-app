'use strict';

app.factory('artistDataFactory', function($http){
    $http.defaults.useXDomain = true;
    var factory = {};
    factory.getArtistData = function(apiObj, artistName){
      return $http.get(apiObj.apiUrl+artistName+apiObj.urlParams+apiObj.apiKey);
    };
    return factory;
  });