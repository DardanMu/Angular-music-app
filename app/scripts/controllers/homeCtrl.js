'use strict';
var app = angular.module('angularMusicApp');
app.controller('HomeCtrl', function ($scope, apiDataFactory, $state, usersGeolocationFactory) {

  console.log('homepage');

  var geoLocationPromise = usersGeolocationFactory.getLocation();

  geoLocationPromise.then(function(data){
      $scope.location = data;
  });

  $scope.look_up_artist = function(artistName)
  {
      $state.go('look-up-artist', {artist: artistName});
  }

});
