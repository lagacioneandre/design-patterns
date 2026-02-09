"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeRoutine = void 0;
var HomeRoutine = /** @class */ (function () {
    function HomeRoutine(commands) {
        this.commands = commands;
    }
    HomeRoutine.prototype.execute = function () {
        /**
         * no for comentado abaixo temos um problema de que, se o segundo comando falhar, o primeiro comando que ja foi
         * executado com sucesso nao 'e desfeito, dessa forma o estado dos comandos fica inconsistente.
         * por exemplo se estou saindo de casa e quero desligar tudo, a luz ficaria apagada, mas o ar condicionada ligado
         * e o comando para trancar as portas nem seria executado. O correto 'e desfazer o comando de apagar as luzes
         * acendendo-as novamente
         *
         * o codigo nao comentado 'e a implementacao correta de uma automacao
         */
        // for (const command of this.commands) {
        //     const response = command.execute();
        //     if (!response) return false;
        // }
        var executedCommands = [];
        for (var _i = 0, _a = this.commands; _i < _a.length; _i++) {
            var command = _a[_i];
            var response = command.execute();
            if (response)
                executedCommands.push(command);
            else {
                // Rolback de emergencia: desfaz o que ja tinha funcionado
                executedCommands.reverse().forEach(function (c) { return c.undo(); });
                return false;
            }
        }
        return true;
    };
    HomeRoutine.prototype.undo = function () {
        /**
         * corrigindo essa implementacao abaixo, dessa forma o metodo reverse vai alterar o array original,
         * isso causara efeitos colaterais, o correto 'e clonar o array original e ai sim usar o metodo reverse
         */
        // const reverseCommands = this.commands.reverse() -> essa 'e a forma original usada e abaixo a forma correta
        var reverseCommands = __spreadArray([], this.commands, true).reverse();
        reverseCommands.forEach(function (command) { return command.undo(); });
    };
    return HomeRoutine;
}());
exports.HomeRoutine = HomeRoutine;
