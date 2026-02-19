"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Canvas_1 = require("./Canvas");
var CanvasHistory_1 = require("./CanvasHistory");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function () {
        var canvas = new Canvas_1.Canvas();
        var canvasHistory = new CanvasHistory_1.CanvasHistory(canvas);
        canvas.addShape('circle');
        canvas.setBackgroundColor('red');
        canvasHistory.push(); // Save new state adding new circle shape and red as new color
        canvas.addShape('triangle');
        canvas.setBackgroundColor('blue');
        canvasHistory.push(); // Save new states
        canvas.addShape('star');
        canvasHistory.push(); // And the last state
        canvasHistory.undo(); // Should have cicle and triangle as shapes and red and blue as colors
        canvasHistory.undo(); // Should have cicle as shape and red as color
    };
    return Client;
}());
(function () {
    new Client().execute();
})();
