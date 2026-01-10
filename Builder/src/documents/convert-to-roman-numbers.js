"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONVERT_TO_ROMAN_NUMBERS = void 0;
var CONVERT_TO_ROMAN_NUMBERS = function (number) {
    if (typeof number !== 'number' || number < 1 || number > 3999) {
        return number; // Retorna o número ou algo para indicar erro/limite
    }
    var valores = [
        1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1
    ];
    var simbolos = [
        'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'
    ];
    var roman = '';
    for (var i = 0; i < valores.length; i++) {
        while (number >= valores[i]) {
            roman += simbolos[i];
            number -= valores[i];
        }
    }
    return roman;
};
exports.CONVERT_TO_ROMAN_NUMBERS = CONVERT_TO_ROMAN_NUMBERS;
