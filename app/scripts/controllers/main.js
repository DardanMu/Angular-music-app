'use strict';

angular.module('angularAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .controller('NewCtrl', function ($scope, $http, $resource) {
    $http.defaults.useXDomain = true;
    var something = $resource('https://ws.spotify.com/search/1/track.json?q=kaizers+orchestra');
    // $scope.items = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];
    $scope.something = something.get();
  });