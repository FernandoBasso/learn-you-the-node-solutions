## TODO ##

Some stuff to study more...

-----------------------------------------------------------------------------------------
Thanks to @GreenJell, #Node.js on freenode.

    var Promise = require('bluebird');
    var httpGet = function(url){
        return new Promise(function(resolve){
            require('superagent').get(url, resolve);
        });
    };
    var log = function(x){ console.log(x); };

    var urls = process.argv.slice(2);

    Promise.all(urls.map(httpGet)).map(log);


-----------------------------------------------------------------------------------------
Thanks to #chapel, #Node.js on freenode.

var Wreck = require('wreck');

function collectData(count) {
    var results = {};
    var called = 0;
    var index = 0;
    return function (url) {
        results[url] = {
            url: url,
            index: index
        };
        index += 1;
        Wreck.get(url, function (err, res, payload) {
            called += 1;
            results[url].payload = payload;
            if (called === count) {
                done(results);
            }
        });
    }
}

function done(results) {
    var payloads = [];
    Object.keys(results).forEach(function (key) {
        var result = results[key];
        payloads[result.index] = result.payload;
    });
    console.log(payloads.join('\n'));
}

var urls = process.argv.slice(2);
var collector = collectData(urls.length);

urls.forEach(collector);
