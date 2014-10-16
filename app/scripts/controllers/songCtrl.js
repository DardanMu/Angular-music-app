'use strict';
var app = angular.module('angularMusicApp');
app.controller('SongCtrl', function ($scope, apiDataFactory, $sce, $stateParams, $location) {

      var resetView = function () {
      $scope.playlistValue = null;
      $scope.artistData = null;
      $scope.artistBio = null;
    };

    $scope.update = function(artist) {
      resetView();
      var artistQuery = encodeURIComponent(artist.name);

      //last fm api
      apiDataFactory.getArtistData(artistQuery).then(function(response){
        var data = response.data;
        //get artist events here
        $scope.artistData = data.artist;
        $scope.artistEvents = data.events;
        $scope.artistBio = $sce.trustAsHtml(data.artist.bio.summary);

        //grooveshark api
        apiDataFactory.getSongs(data.artist.name).then(function(response){
          var songs = response.data;
          var playlistValue = '';
          songs.forEach(function(song) {
            playlistValue = playlistValue + song.SongID +',';
          });

          $scope.playlistValue = playlistValue;

          // update url param
          //this refreshes the page, need to find a better way to do it.
          // $location.search('artist', artistQuery);

        }); // end grooveshark api call
      }); //end lastfm api call
    };

    if ($stateParams.artist) {
      var routeArtist = {'name': $stateParams.artist};
      $scope.update(routeArtist);
    }

  });
