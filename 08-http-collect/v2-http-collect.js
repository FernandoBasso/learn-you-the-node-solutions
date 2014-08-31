//
// This solution uses the concat-stream community module.
//

var http = require('http');
var concatStream = require('concat-stream');

http.get(process.argv[2], function(response) {

    // Why doesn't it help here?
    //response.setEncoding('utf8');

    // concatStream() doesn't take an error as the first argument.
    response.pipe(concatStream(function(data) {

        // console.log(data)
        console.log(data.length);
        console.log(data.toString());

    }));
});
