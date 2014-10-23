'use strict';
var app = angular.module('angularMusicApp');
app.controller('HomeCtrl', function ($scope, apiDataFactory, $state, usersGeolocationFactory) {

  console.log('homepage');

  $state.go('home.intro');

  var geoLocationPromise = usersGeolocationFactory.getLocation();

  geoLocationPromise.then(function(data){
      $scope.location = data;
      console.log(data);
  });

  $scope.look_up_artist = function(artistObj)
  {
      $state.go('look-up-artist', {artist: artistObj.name});
  }

});
