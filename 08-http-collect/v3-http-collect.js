//
// This solution uses the bl community module.
//

var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function(response) {

    // Why doesn't it help here?
    //response.setEncoding('utf8');

    response.pipe(bl(function(err, data) {

        if (err) return console.error(err);

        // console.log(data)
        console.log(data.length);
        console.log(data.toString());

    }));
});
