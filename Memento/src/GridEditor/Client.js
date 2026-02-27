"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameMap_1 = require("./GameMap");
var MapHistory_1 = require("./MapHistory");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function () {
        var myMap = new GameMap_1.GameMap();
        var history = new MapHistory_1.MapHistory(myMap);
        history.push(myMap.setTile(1, 1, 'W'));
        history.push(myMap.setTile(5, 5, 'M'));
        history.push(myMap.setTile(0, 0, 'W'));
        history.undo();
    };
    return Client;
}());
(function () {
    new Client().execute();
})();
