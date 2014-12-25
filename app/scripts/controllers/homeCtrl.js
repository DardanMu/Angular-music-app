'use strict';
var app = angular.module('angularMusicApp');
app.controller('HomeCtrl', function ($filter, $scope, apiDataFactory, $state, usersGeolocationFactory) {

  if ($state.is('home')) {
      // $state.go('home.intro');
      $state.go('home.hypedArtists');
  };

  var geoLocationPromise = usersGeolocationFactory.getLocation();
  var getTopArtistsByLocation = function(location)
  {
    apiDataFactory.getTopArtists(location)
    .then(function(results){
        $scope.topArtists = results.data.topartists.artist;
        $scope.location_country = results.data.topartists['@attr'].country;
    });
  }

  $scope.look_up_artist = function(artistObj)
  {
      $state.go('look-up-artist', {artist: artistObj.name});
  }

    //hyped artists
    apiDataFactory.getHypedArtists()
        .then(function(hypedArtists){
            $scope.hypedArtists = hypedArtists.data.artists.artist;
        });


    //top artsits
    geoLocationPromise.then(function(location){
        getTopArtistsByLocation(location);
    }, function(defaultLocation){
        getTopArtistsByLocation(defaultLocation);
    });

});
