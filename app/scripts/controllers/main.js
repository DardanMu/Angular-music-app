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

    $scope.master = {};
    $scope.update = function(user) {
      $scope.master = angular.copy(user);
    };
    var song = $scope.master;

    console.log('song.name:');
    console.log(song.name);

    // var url = encodeURIComponent('artist:eminem');
    // var url = encodeURIComponent(song.name);
    var apiKey = '435eb016b95cbac6bfa23a58c7e18e89';
    // var something = $resource('http://ws.spotify.com/search/1/track.json?q=' + url);
    var something = $resource('http://tinysong.com/b/eminem+monster?format=json&key=' + apiKey);

    console.log(something.get());

    // $scope.items = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];
    $scope.something = something.get();
  });