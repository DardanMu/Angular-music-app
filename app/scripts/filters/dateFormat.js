'use strict';

app.filter('dateFormat', function ($filter) {
    return function (date, format) {
        var formattedDate = new Date(date);
        return $filter('date')(formattedDate, format);
    };
});
