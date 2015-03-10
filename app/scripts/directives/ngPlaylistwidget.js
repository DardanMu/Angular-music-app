'use strict';

app.directive('playlistwidget', function(){
    return {
        // templateUrl: 'views/templates/flash-widget.html'
        link: function(scope, element, attrs) {
          attrs.$observe('data', function(songIds) {
            if (songIds) {
              element.html(
                '<object height="330">'+
                  '<param name="movie" value="http://grooveshark.com/widget.swf">'+
                  '<param name="wmode" value="window"><param name="allowScriptAccess" value="always">'+
                  '<param name="flashvars" value="hostname=cowbell.grooveshark.com&songIDs='+songIds+'&bbg=333333&bth=B4D5DA&pfg=B4D5DA&lfg=B4D5DA&bt=017b5a&pbg=017b5a&pfgh=017b5a&si=017b5a&lbg=017b5a&lfgh=017b5a&sb=017b5a&bfg=B1BABF&pbgh=B1BABF&lbgh=B1BABF&sbh=B1BABF&p=0">'+
                  '<embed src="http://grooveshark.com/widget.swf" type="application/x-shockwave-flash" flashvars="hostname=cowbell.grooveshark.com&songIDs='+songIds+'&bbg=333333&bth=B4D5DA&pfg=B4D5DA&lfg=B4D5DA&bt=017b5a&pbg=017b5a&pfgh=017b5a&si=017b5a&lbg=017b5a&lfgh=017b5a&sb=017b5a&bfg=B1BABF&pbgh=B1BABF&lbgh=B1BABF&sbh=B1BABF&p=0" allowscriptaccess="always" wmode="window" height="330">'+
                '</object>');
            } else {
              element.html('<div></div>');
            }
          });
        },
      };
  });
