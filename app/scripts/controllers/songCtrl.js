'use strict';
var app = angular.module('angularMusicApp');
app.controller('SongCtrl', function ($scope, lastFmFactory, groovesharkFactory, $sce, $routeParams, $location) {

    $scope.update = function(artist) {
      var artistQuery = encodeURIComponent(artist.name);

      //last fm api
      lastFmFactory.getArtistData(artistQuery).then(function(response){
        var data = response.data;
        //get artist events here
        $scope.artistData = data.artist;
        $scope.artistEvents = data.events;
        $scope.artistBio = $sce.trustAsHtml(data.artist.bio.summary);
        artistQuery = data.artist.name;

        //grooveshark api
        groovesharkFactory.getSongs(artistQuery).then(function(response){
          var songs = response.data;
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

    $scope.reset = function (path) {
      //set $scope variables to null and go to base url path
      $scope.playlistValue = null;
      $scope.artistData = null;
      $scope.artistBio = null;

      $location.url(path);
    };

    if ($routeParams.artist) {
      var routeArtist = {'name': $routeParams.artist};
      $scope.update(routeArtist);
    }

  });