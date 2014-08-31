var mymodule = require('./v1-mod-filter-ls.js');

mymodule(process.argv[2], process.argv[3], function(err, data) {
    if (err) {
        console.error(err);
        return false;
    }

    for (var i = 0, cur; cur = data[i]; ++i) {
        console.log(cur);
    }
});
