var net = require('net');
var zeroPad = require('./v2-module-zero-pad.js');

var serv = net.createServer(function(socket) {

    var dateStr;
    var date = new Date();

    dateStr  = date.getFullYear() + '-';
    // getMonth() start at 0, thus, we add one to it.
    dateStr += zeroPad(date.getMonth() + 1, '0') + '-';
    dateStr += zeroPad(date.getDate(), '0') + ' ';
    dateStr += zeroPad(date.getHours(), '0') + ':';
    dateStr += zeroPad(date.getMinutes(), '0') + '\n';

    socket.write(dateStr + '\n');

    socket.end();
});

serv.listen(process.argv[2]);
