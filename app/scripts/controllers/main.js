'use strict';

angular.module('angularMusicApp').

  controller('SongCtrl', function ($scope, artistDataFactory, $sce, $routeParams, $location) {

    var groovesharkApi = {
      'apiUrl' : 'http://www.corsproxy.com/tinysong.com/s/',
      'urlParams' : '?format=json&limit=10&key=',
      'apiKey' : '435eb016b95cbac6bfa23a58c7e18e89'
    };

    var lastFmApi = {
      'apiUrl' : 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=',
      'urlParams' : '&autocorrect=1&format=json&api_key=',
      'apiKey' : 'b58473f5006d02f1809cfec98c17011d'
    };
 
    $scope.update = function(artist) {
      var artistQuery = encodeURIComponent(artist.name);

      //last fm api
      artistDataFactory.getArtistData(lastFmApi, artistQuery).success(function(data){

        $scope.artistData = data.artist;
        $scope.artistBio = $sce.trustAsHtml(data.artist.bio.summary);
        artistQuery = data.artist.name;

        //grooveshark api
        artistDataFactory.getArtistData(groovesharkApi, artistQuery).success(function(songs){

          var playlistValue = '';
          songs.forEach(function(song) {
            playlistValue = playlistValue + song.SongID +',';
          });

          console.log('songs: '+ playlistValue);
          $scope.playlistValue = playlistValue;
          // update url param
          $location.search('artist', artistQuery);
        }); // end grooveshark api call
      }); //end lastfm api call
    };

    if ($routeParams.artist) {
      var routeArtist = {'name': $routeParams.artist};
      $scope.update(routeArtist);
    }

  }).

  directive('ngPlaylistwidget', function(){
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
  }).

  factory('artistDataFactory', function($http){
    $http.defaults.useXDomain = true;
    var factory = {};
    factory.getArtistData = function(apiObj, artistName){
      return $http.get(apiObj.apiUrl+artistName+apiObj.urlParams+apiObj.apiKey);
    };
    return factory;
  });
  