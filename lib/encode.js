'use strict';

var randomByte = require('./random/random-byte');

function encode(lookup, number, minCharacters) {
    var loopCounter = 0;
    var done;

    var str = '';

    while (!done) {
        str = str + lookup( ( (number >> (4 * loopCounter)) & 0x0f ) | randomByte() );
        done = number < (Math.pow(16, loopCounter + 1 ) );
        loopCounter++;
    }

    while(str.length < minCharacters) {
      str = str + lookup( ( (number >> (4 * str.length)) & 0x0f ) | randomByte() );
    }

    return str;
}

module.exports = encode;
