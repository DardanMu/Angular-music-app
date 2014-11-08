'use strict';
var app = angular.module('angularMusicApp');
app.controller('HomeCtrl', function ($filter, $scope, apiDataFactory, $state, usersGeolocationFactory) {

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

        apiDataFactory.getEventsByLocation(location, '1')
            .then(function(results){
                $scope.events = results.data.events.event;
            });

    });

    $scope.dataset_test = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    $scope.currentPage = 1;

    $scope.updateEventPage = function(pageNumber)
    {
        $scope.events = null;
        $scope.currentPage = pageNumber;

        geoLocationPromise.then(function(location){
            apiDataFactory.getEventsByLocation(location, pageNumber.toString())
                .then(function(results){
                    $scope.events = results.data.events.event;
                });
        });
    }

    // var datetest = new Date('2014-11-22 20:00:00');

    // console.log($filter('date')(datetest, 'shortTime'));



});
