//use strict

var ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

var ID_LENGTH = 8;

//152 Billion ID space
module.exports = function (l, set) {

    this.idLength = l || ID_LENGTH;
    this.characterSet = set || ALPHABET;

    this.generateId = function (){
        var rtn = '';
        for (var i = 0; i < this.idLength; i++) {
            rtn += this.characterSet.charAt(Math.floor(Math.random() * this.characterSet.length));
        }
        return rtn;
    };

};