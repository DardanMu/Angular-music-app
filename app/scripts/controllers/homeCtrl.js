'use strict';
var app = angular.module('angularMusicApp');
app.controller('HomeCtrl', function ($scope, apiDataFactory, $state, usersGeolocationFactory) {

  console.log('homepage');

  var geoLocationPromise = usersGeolocationFactory.getLocation();

  geoLocationPromise.then(function(data){
      $scope.location = data;
  });

  $scope.test2 = function(){
      geoLocationPromise.then(function(data){
          console.log(data);
      });
  }

});
