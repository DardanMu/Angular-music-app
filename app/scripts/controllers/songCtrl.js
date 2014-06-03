'use strict';
var app = angular.module('angularMusicApp');
app.controller('SongCtrl', function ($scope, lastFmFactory, groovesharkFactory, $sce, $routeParams, $location) {
 
    $scope.update = function(artist) {
      var artistQuery = encodeURIComponent(artist.name);

      //last fm api
      lastFmFactory.getArtistData(artistQuery).success(function(data){

        $scope.artistData = data.artist;
        $scope.artistBio = $sce.trustAsHtml(data.artist.bio.summary);
        artistQuery = data.artist.name;

        //grooveshark api
        groovesharkFactory.getSongs(artistQuery).success(function(songs){

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