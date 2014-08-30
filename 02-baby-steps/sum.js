// Saturday, 14:50 - August 30 - 2014

var total = 0;

for (var i = 2, curNum; curNum = process.argv[i]; ++i) {
    curNum = +(curNum);
    if (!isNaN(curNum)) {
        total += curNum;
    }
    else {
        // console.log(process.argv[i] + ' is invalid.');
    }
}

console.log(total);
