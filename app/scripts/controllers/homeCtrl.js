'use strict';
var app = angular.module('angularMusicApp');
app.controller('HomeCtrl', function ($scope, apiDataFactory, $state, usersGeolocationFactory) {

  if ($state.is('home')) {
      $state.go('home.intro');
  };

  var geoLocationPromise = usersGeolocationFactory.getLocation();

  // geoLocationPromise.then(function(data){
  //     $scope.location = data;
  //     // console.log(data);
  // });

  $scope.look_up_artist = function(artistObj)
  {
      $state.go('look-up-artist', {artist: artistObj.name});
  }

    //hyped artists
    apiDataFactory.getHypedArtists()
        .then(function(hypedArtists){
            $scope.hypedArtists = hypedArtists.data.artists.artist;
            // console.log(hypedArtists.data);
        });


    //top artsits
    geoLocationPromise.then(function(location){

        apiDataFactory.getTopArtists(location)
            .then(function(results){
                $scope.topArtists = results.data.topartists.artist;
                $scope.location_country = results.data.topartists['@attr'].country;
            });

        apiDataFactory.getEventsByLocation(location)
            .then(function(results){
                $scope.events = results.data.events.event;
                // console.log(results);
                // $scope.location_country = results.data.topartists['@attr'].country;
            });

    });



});
