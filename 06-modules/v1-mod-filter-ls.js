module.exports = function(dirname, file_extension, callback) {

    var fs = require('fs');
    var extname = require('path').extname;

    fs.readdir(dirname, function(err, contents) {

        if (err) return callback(err);

        var arr = [];
        for (var i = 0, cur; cur = contents[i]; ++i) {
            //if (path.extname(cur) === '.' + file_extension) {
            if (extname(cur) === '.' + file_extension) {
                arr.push(cur);
            }
        }

        return callback(null, arr);
    });
};
