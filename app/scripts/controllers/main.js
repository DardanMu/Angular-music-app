'use strict';

angular.module('angularAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .controller('NewCtrl', function ($scope, $http) {
    $http.defaults.useXDomain = true;

    $scope.artist2 = {};
    var apiKey = '435eb016b95cbac6bfa23a58c7e18e89';
 
    $scope.update = function(artist) {
      // var artist = angular.copy(artist);
      // console.log(artist);
      $scope.artist2 = angular.copy(artist);
      var urlQuery = encodeURIComponent(artist.name);

      $http.get('http://www.corsproxy.com/tinysong.com/b/'+urlQuery+'?format=json&key=' + apiKey)
      .success(function(data){
        var playlistValue = 'hostname=cowbell.grooveshark.com&songIDs='+ data.SongID +'&bbg=B4D5DA&bth=B4D5DA&pfg=B4D5DA&lfg=B4D5DA&bt=813B45&pbg=813B45&pfgh=813B45&si=813B45&lbg=813B45&lfgh=813B45&sb=813B45&bfg=B1BABF&pbgh=B1BABF&lbgh=B1BABF&sbh=B1BABF&p=0';
        console.log(playlistValue);
        $scope.playlistValue = playlistValue;
        $scope.data = data;
        // angular.element('#test').remove();
      });
    };


  })
  .directive('ngPlaylistwidget', function(){
    return {
        // templateUrl: 'views/templates/flash-widget.html'
        link: function(scope, element, attrs) {
          attrs.$observe('data', function(value) {
            if (value) {
              element.html(
                '<object width="450" height="250">'+
                  '<param name="movie" value="http://grooveshark.com/widget.swf">'+
                  '<param name="wmode" value="window"><param name="allowScriptAccess" value="always">'+
                  '<param name="flashvars" value="'+value+'">'+
                '</object>');
            } else {
              element.html('<div></div>');
            }
          });
        },
      };
  });
  