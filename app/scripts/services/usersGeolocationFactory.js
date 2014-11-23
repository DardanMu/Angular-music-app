'use strict';

app.factory('usersGeolocationFactory', function($q, geolocation){
    var factory = {};

    var location;

    factory.getLocation = function(){

        var deferred = $q.defer();

        if (location) {
            deferred.resolve(location);
        }else{
            geolocation.getLocation().then(function(data){
                location = {lat:data.coords.latitude, long:data.coords.longitude};
                deferred.resolve(location);

            }).catch(function(error){
                console.log(error);
                console.log('Your default location will be set to London, UK');

                var defaultLocation = {lat: 51.5072928, long: -0.1276536};
                deferred.reject(defaultLocation);
            });
        }
        return deferred.promise;
    };

    return factory;
  });
