'use strict';
var app = angular.module('angularMusicApp');
app.controller('SongCtrl', function ($scope, apiDataFactory, $sce, $stateParams, $location) {

      var resetView = function () {
      $scope.playlistValue = null;
      $scope.artistData = null;
      $scope.artistBio = null;
    };

    $scope.look_up_artist = function(artist) {
      resetView();
      var artistQuery = encodeURIComponent(artist.name);

      //last fm api
      apiDataFactory.getArtistData(artistQuery).then(function(response){
        var data = response.data;
        $location.search('artist', data.artist.name);
        //get artist events here
        $scope.artistData = data.artist;
        // $scope.artistEvents = data.events;
        // console.log(data);
        $scope.artistBio = $sce.trustAsHtml(data.artist.bio.summary);

        //grooveshark api
        apiDataFactory.getSongs(data.artist.name).then(function(response){
          var songs = response.data;
          var playlistValue = '';
          songs.forEach(function(song) {
            playlistValue = playlistValue + song.SongID +',';
          });

          $scope.playlistValue = playlistValue;

        }); // end grooveshark api call
      }); //end lastfm api call
    };

    if ($stateParams.artist) {
      var routeArtist = {'name': $stateParams.artist};
      $scope.look_up_artist(routeArtist);
    }

  });
