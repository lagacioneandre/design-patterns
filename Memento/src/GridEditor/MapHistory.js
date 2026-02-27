"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapHistory = void 0;
var MapHistory = /** @class */ (function () {
    function MapHistory(gameMap) {
        this.history = [];
        this.gameMap = gameMap;
    }
    MapHistory.prototype.push = function (memento) {
        this.history.push(memento);
    };
    MapHistory.prototype.undo = function () {
        if (!this.history.length) {
            console.log('Nothing to undo!');
            return;
        }
        this.history.pop();
        console.log('Removing the last alteration...');
        this.gameMap.reset();
        for (var _i = 0, _a = this.history; _i < _a.length; _i++) {
            var memento = _a[_i];
            var x = memento.x, y = memento.y, type = memento.type;
            this.gameMap.setTile(x, y, type);
        }
    };
    return MapHistory;
}());
exports.MapHistory = MapHistory;
