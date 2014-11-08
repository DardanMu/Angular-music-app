'use strict';

app.factory('usersGeolocationFactory', function($q, geolocation){
    var factory = {};

    var location;

    factory.getLocation = function(){

        var deferred = $q.defer();

        if (location) {
            console.log('already got it lol');
            deferred.resolve(location);
        }else{
            console.log('searching...');
            geolocation.getLocation().then(function(data){
                location = {lat:data.coords.latitude, long:data.coords.longitude};
                deferred.resolve(location);

            }).catch(function(error){
                deferred.reject(false);
            });
        }
        return deferred.promise;
    };

    return factory;
  });
