'use strict';

app.factory('groovesharkFactory', function($http){
    $http.defaults.useXDomain = true;

    var groovesharkApi = {
      'apiUrl'    : 'http://www.corsproxy.com/tinysong.com/s/',
      'urlParams' : '?format=json&limit=10&key=',
      'apiKey'    : '435eb016b95cbac6bfa23a58c7e18e89'
    };
    
    var factory = {};
    factory.getSongs = function(artistName){
      return $http.get(groovesharkApi.apiUrl+artistName+groovesharkApi.urlParams+groovesharkApi.apiKey);
    };
    return factory;
  });