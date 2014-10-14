'use strict';

app.factory('usersGeolocationFactory', function(geolocation){

    var location;

    var factory = {};

    factory.getLocation = function(){

      if (location) {
        return location;
      }else{

        geolocation.getLocation().then(function(data){
            // $scope.coords = {lat:data.coords.latitude, long:data.coords.longitude};
            location = {lat:data.coords.latitude, long:data.coords.longitude};
            return location;
        }).fail(function(error){
            console.log(error);
            return false;
        });

      }

    };

    // factory.setLocation = function(usersLocation){
    //   location = usersLocation;
    // };



    return factory;

  });
