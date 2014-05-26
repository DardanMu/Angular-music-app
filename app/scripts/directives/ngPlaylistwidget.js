'use strict';

app.directive('ngPlaylistwidget', function(){
    return {
        // templateUrl: 'views/templates/flash-widget.html'
        link: function(scope, element, attrs) {
          attrs.$observe('data', function(value) {
            if (value) {
              element.html(
                '<object height="380">'+
                  '<param name="movie" value="http://grooveshark.com/widget.swf">'+
                  '<param name="wmode" value="window"><param name="allowScriptAccess" value="always">'+
                  '<param name="flashvars" value="hostname=cowbell.grooveshark.com&songIDs='+value+'&bbg=B4D5DA&bth=B4D5DA&pfg=B4D5DA&lfg=B4D5DA&bt=813B45&pbg=813B45&pfgh=813B45&si=813B45&lbg=813B45&lfgh=813B45&sb=813B45&bfg=B1BABF&pbgh=B1BABF&lbgh=B1BABF&sbh=B1BABF&p=0">'+
                '</object>');
            } else {
              element.html('<div></div>');
            }
          });
        },
      };
  });