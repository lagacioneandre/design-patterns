"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var MoveToEast_1 = require("./MoveToEast");
var MoveToNorth_1 = require("./MoveToNorth");
var MoveToSouth_1 = require("./MoveToSouth");
var MoveToWest_1 = require("./MoveToWest");
var Robot_1 = require("./Robot");
var RobotControl_1 = require("./RobotControl");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function () {
        var robot = new Robot_1.Robot();
        var robotControl = new RobotControl_1.RobotControl();
        robotControl.go(new MoveToNorth_1.MoveToNorth(robot)); // x: 0 y: 1
        robotControl.go(new MoveToNorth_1.MoveToNorth(robot)); // x: 0 y: 2
        robotControl.go(new MoveToSouth_1.MoveToSouth(robot)); // x: 0 y: 1
        robotControl.go(new MoveToEast_1.MoveToEast(robot)); // x: 1 y: 1
        robotControl.go(new MoveToEast_1.MoveToEast(robot)); // x: 2 y: 1
        robotControl.go(new MoveToWest_1.MoveToWest(robot)); // x: 1 y: 1
        robotControl.back(); // x: 2 y: 1
        robotControl.back(); // x: 1 y: 1
    };
    return Client;
}());
exports.Client = Client;
(function () {
    new Client().execute();
})();
