"use strict";
// import { SandwichType } from "./ingredients.type";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sandwich = void 0;
var Sandwich = /** @class */ (function () {
    function Sandwich() {
    }
    Sandwich.prototype.createSandwich = function (ingredients) {
        this.ingredients = ingredients;
    };
    Sandwich.prototype.build = function () {
        var _a, _b, _c;
        console.log('--- Building your sandwich (Receiver) ---\n');
        console.log('Ingredients:\n');
        console.log("Bread: ".concat(this.ingredients.bread));
        console.log("Meat: ".concat(this.ingredients.meat));
        console.log("Cheese: ".concat((_a = this.ingredients.cheese) !== null && _a !== void 0 ? _a : 'None')); // Adicionado 'None' para campos opcionais
        console.log("Sauce: ".concat((_b = this.ingredients.sauce) !== null && _b !== void 0 ? _b : 'None'));
        // Correção: usa join() para formatar corretamente o array de adicionais
        var additionals = ((_c = this.ingredients.additional) === null || _c === void 0 ? void 0 : _c.length)
            ? this.ingredients.additional.join(', ')
            : 'None';
        console.log("Additionals: ".concat(additionals, "\n"));
    };
    return Sandwich;
}());
exports.Sandwich = Sandwich;
