var mymodule = require('./v1-mod-filter-ls.js');

var printFilesCb = function(err, listOfFiles) {
    if (err) {
        console.error(err);
        return false;
    }

    for (var i = 0, cur; cur = listOfFiles[i]; ++i) {
        console.log(cur);
    }
};

mymodule(process.argv[2], process.argv[3], printFilesCb);
