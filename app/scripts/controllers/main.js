'use strict';

angular.module('angularAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .controller('NewCtrl', function ($scope, $http) {
    $http.defaults.useXDomain = true;

    // var url = encodeURIComponent('artist:eminem');
    // var url = encodeURIComponent(song.name);
    var apiKey = '435eb016b95cbac6bfa23a58c7e18e89';
    // var something = $resource('http://ws.spotify.com/search/1/track.json?q=' + url);
    $http.get('http://www.corsproxy.com/tinysong.com/b/eminem+monster?format=json&key=' + apiKey)
    .success(function(data){

      var playlistValue = 'hostname=cowbell.grooveshark.com&songIDs='+ '40220269' +'&bbg=B4D5DA&bth=B4D5DA&pfg=B4D5DA&lfg=B4D5DA&bt=813B45&pbg=813B45&pfgh=813B45&si=813B45&lbg=813B45&lfgh=813B45&sb=813B45&bfg=B1BABF&pbgh=B1BABF&lbgh=B1BABF&sbh=B1BABF&p=0';

      $scope.playlistValue = playlistValue;
      $scope.data = data;
      
    });

    $scope.templates = [ { name: 'template1.html', url: 'views/template1.html'} ];
    $scope.template = $scope.templates[0];

  });