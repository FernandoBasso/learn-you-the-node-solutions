var net = require('net');

function zeroPad(str, charToPad) {
    // If str is not a string, try to make a string out of it.
    if (typeof str !== 'string') {
       str = String(str);
    }

    return (str.length === 1) ? (charToPad + str) : str;
}

var serv = net.createServer(function(socket) {

    var dateStr;
    var date = new Date();

    dateStr  = date.getFullYear() + '-';
    // getMonth() start at 0, thus, we add one to it.
    dateStr += zeroPad(date.getMonth() + 1, '0') + '-';
    dateStr += zeroPad(date.getDate(), '0') + ' ';
    dateStr += date.getHours() + ':';
    dateStr += date.getMinutes() + '\n';

    socket.write(dateStr + '\n');

    socket.end();
});

serv.listen(process.argv[2]);
