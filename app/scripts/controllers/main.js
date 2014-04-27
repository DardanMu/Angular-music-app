'use strict';

angular.module('angularAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .controller('NewCtrl', function ($scope, $http, $routeParams, $location) {
    $http.defaults.useXDomain = true;

    var apiKey = '&key=435eb016b95cbac6bfa23a58c7e18e89';
    var urlParams = '?format=json&limit=10';
    var apiUrl = 'http://www.corsproxy.com/tinysong.com/s/';
 
    $scope.update = function(artist) {
      var artistQuery = encodeURIComponent(artist.name);

      $http.get(apiUrl+artistQuery+urlParams+apiKey)
      .success(function(data){

        var playlistValue = '';
        data.forEach(function(song) {
          playlistValue = playlistValue + song.SongID +',';
        });

        console.log('songs: '+ playlistValue);
        $scope.playlistValue = playlistValue;
        // update url
        $location.search('artist', artist.name);
      });
    };

    if ($routeParams.artist) {
      var routeArtist = {'name': $routeParams.artist};
      $scope.update(routeArtist);
    }

  })
  .directive('ngPlaylistwidget', function(){
    return {
        // templateUrl: 'views/templates/flash-widget.html'
        link: function(scope, element, attrs) {
          attrs.$observe('data', function(value) {
            if (value) {
              element.html(
                '<object width="90%" height="380">'+
                  '<param name="movie" value="http://grooveshark.com/widget.swf">'+
                  '<param name="wmode" value="window"><param name="allowScriptAccess" value="always">'+
                  '<param name="flashvars" value="hostname=cowbell.grooveshark.com&songIDs='+value+'&bbg=B4D5DA&bth=B4D5DA&pfg=B4D5DA&lfg=B4D5DA&bt=813B45&pbg=813B45&pfgh=813B45&si=813B45&lbg=813B45&lfgh=813B45&sb=813B45&bfg=B1BABF&pbgh=B1BABF&lbgh=B1BABF&sbh=B1BABF&p=0">'+
                '</object>');
            } else {
              element.html('<div></div>');
            }
          });
        },
      };
  });
  