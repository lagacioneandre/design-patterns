"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameMap = void 0;
var TileMemento_1 = require("./TileMemento");
var GameMap = /** @class */ (function () {
    function GameMap() {
        this.grid = [];
        this.createEmptyGrid();
    }
    GameMap.prototype.createEmptyGrid = function () {
        for (var i = 0; i < 10; i++) {
            this.grid[i] = [];
            for (var j = 0; j < 10; j++) {
                this.grid[i][j] = 'G';
            }
        }
    };
    GameMap.prototype.reset = function () {
        this.createEmptyGrid();
    };
    GameMap.prototype.setTile = function (x, y, type) {
        this.grid[x][y] = type;
        console.log("Tile in [".concat(x, ", ").concat(y, "] changed to ").concat(type));
        return new TileMemento_1.TileMemento(x, y, type);
    };
    GameMap.prototype.display = function () {
        console.table(this.grid);
    };
    return GameMap;
}());
exports.GameMap = GameMap;
