module.exports = function zeroPad(str, charToPad) {
    // If str is not a string, try to make a string out of it.
    if (typeof str !== 'string') {
       str = String(str);
    }

    return (str.length === 1) ? (charToPad + str) : str;
};
