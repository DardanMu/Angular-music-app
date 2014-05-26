'use strict';
var app = angular.module('angularMusicApp');
app.controller('SongCtrl', function ($scope, artistDataFactory, $sce, $routeParams, $location) {

    var groovesharkApi = {
      'apiUrl'    : 'http://www.corsproxy.com/tinysong.com/s/',
      'urlParams' : '?format=json&limit=10&key=',
      'apiKey'    : '435eb016b95cbac6bfa23a58c7e18e89'
    };

    var lastFmApi = {
      'apiUrl'    : 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=',
      'urlParams' : '&autocorrect=1&format=json&api_key=',
      'apiKey'    : 'b58473f5006d02f1809cfec98c17011d'
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

  });