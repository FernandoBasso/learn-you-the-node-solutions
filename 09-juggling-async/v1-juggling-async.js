var http = require('http');

var arr = initArr(3);
var count = 0;

for (var i = 2, curUrl; curUrl = process.argv[i]; ++i) {


    (function(n) {
        http.get(curUrl, function(response) {

            response.on('data', function(data) {
                arr[n] += data.toString();
            });

            response.on('end', function() {
                // One more full request has completed.
                count += 1;

                if (count === 3) {
                    printAll(arr);
                }
            });
        });
    }(i - 2));
}

// Creates an array with numItems items, each one initialized with
// an empty string and then returns the array.
function initArr(numItems) {

    var arr = [];

    for (var i = 0; i < numItems; ++i) {
        arr[i] = '';
    }

    return arr;
}

function printAll(arr) {
    for (var i = 0, len = arr.length; i < len; ++i) {
        console.log(arr[i]);
    }
}
