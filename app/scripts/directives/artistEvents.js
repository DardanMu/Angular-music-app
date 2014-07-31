'use strict';

app.directive('artistEvents', function(){
    return {
        restrict: 'A',
        templateUrl: 'views/templates/events.html',
        controller: function($state, $scope, lastFmFactory) {

        }
    };
});
