'use strict';

app.directive('events', function(){
    return {
        restrict: 'A',
        templateUrl: 'views/events/events.html',
        controller: function($state, $scope, apiDataFactory, usersGeolocationFactory) {

            var geoLocationPromise = usersGeolocationFactory.getLocation();

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

            $scope.updateEventPage($scope.currentPage);

        }
    };
});
