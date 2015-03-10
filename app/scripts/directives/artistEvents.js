'use strict';

app.directive('artistEvents', function(){
    return {
        restrict: 'A',
        templateUrl: 'views/artist/events.html',
        // scope: {
        //     artistName: '='
        // },
        controller: function($state, $location, $scope, apiDataFactory, usersGeolocationFactory) {

            var geoLocationPromise = usersGeolocationFactory.getLocation();

            var artistName = $location.search().artist;
            $scope.artistName = artistName;

            geoLocationPromise.then(function(location){
                apiDataFactory.getArtistEventData(artistName, location).then(function(events){
                    $scope.events = events.data;
                });
            });

        }
    };
});
