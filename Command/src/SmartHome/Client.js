"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var AirConditionerCommand_1 = require("./commands/AirConditionerCommand");
var LightCommand_1 = require("./commands/LightCommand");
var SecuritySystemCommand_1 = require("./commands/SecuritySystemCommand");
var HomeRoutine_1 = require("./HomeRoutine");
var AirConditionerOverheatReceiver_1 = require("./receivers/AirConditionerOverheatReceiver");
var AirConditionerReceiver_1 = require("./receivers/AirConditionerReceiver");
var BrokenLightReceiver_1 = require("./receivers/BrokenLightReceiver");
var LightReceiver_1 = require("./receivers/LightReceiver");
var SecuritySystemReceiver_1 = require("./receivers/SecuritySystemReceiver");
var SmartRemote_1 = require("./SmartRemote");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.leave = function () {
        var lightReceiver = new LightReceiver_1.LightReceiver();
        var airConditionerReceiver = new AirConditionerReceiver_1.AirConditionerReceiver();
        var securitySystemnReceiver = new SecuritySystemReceiver_1.SecuritySystemReceiver();
        var turnLightsOn = new LightCommand_1.LightCommand(lightReceiver, false);
        var powerAirConditionerOn = new AirConditionerCommand_1.AirConditionerCommand(airConditionerReceiver, false);
        var lockAllDors = new SecuritySystemCommand_1.SecuritySystemCommand(securitySystemnReceiver, false);
        var homeRoutine = new HomeRoutine_1.HomeRoutine([
            turnLightsOn,
            powerAirConditionerOn,
            lockAllDors,
        ]);
        var remoteControl = new SmartRemote_1.SmartRemote();
        remoteControl.pressButton(homeRoutine);
        // Turning lights on!
        // Powering air conditioner on!
        // Locking all dors!
        var timeout = setTimeout(function () {
            remoteControl.pressUndo();
            // Turning lights off!
            // Powering air conditioner off!
            // Unlocking all dors!
            clearTimeout(timeout);
        }, 5000);
    };
    Client.prototype.arrive = function () {
        var lightReceiver = new LightReceiver_1.LightReceiver();
        var airConditionerReceiver = new AirConditionerReceiver_1.AirConditionerReceiver();
        var securitySystemnReceiver = new SecuritySystemReceiver_1.SecuritySystemReceiver();
        var turnLightsOn = new LightCommand_1.LightCommand(lightReceiver, true);
        var powerAirConditionerOn = new AirConditionerCommand_1.AirConditionerCommand(airConditionerReceiver, true);
        var lockAllDors = new SecuritySystemCommand_1.SecuritySystemCommand(securitySystemnReceiver, true);
        var homeRoutine = new HomeRoutine_1.HomeRoutine([
            turnLightsOn,
            powerAirConditionerOn,
            lockAllDors,
        ]);
        var remoteControl = new SmartRemote_1.SmartRemote();
        remoteControl.pressButton(homeRoutine);
        // Turning lights off!
        // Powering air conditioner off!
        // Unlocking all dors!
        var timeout = setTimeout(function () {
            remoteControl.pressUndo();
            // Turning lights on!
            // Powering air conditioner on!
            // Locking all dors!
            clearTimeout(timeout);
        }, 5000);
    };
    Client.prototype.lightException = function () {
        var lightReceiver = new BrokenLightReceiver_1.BrokenLightReceiver();
        var airConditionerReceiver = new AirConditionerReceiver_1.AirConditionerReceiver();
        var securitySystemnReceiver = new SecuritySystemReceiver_1.SecuritySystemReceiver();
        var turnLightsOn = new LightCommand_1.LightCommand(lightReceiver, false);
        var powerAirConditionerOn = new AirConditionerCommand_1.AirConditionerCommand(airConditionerReceiver, false);
        var lockAllDors = new SecuritySystemCommand_1.SecuritySystemCommand(securitySystemnReceiver, false);
        var homeRoutine = new HomeRoutine_1.HomeRoutine([
            turnLightsOn,
            powerAirConditionerOn,
            lockAllDors,
        ]);
        var remoteControl = new SmartRemote_1.SmartRemote();
        remoteControl.pressButton(homeRoutine);
        // ERROR: Light bulb is burnt out! Cannot turn off.!
        var timeout = setTimeout(function () {
            remoteControl.pressUndo();
            // No commands to undo!
        }, 5000);
        clearTimeout(timeout);
    };
    Client.prototype.AirConditionertException = function () {
        var lightReceiver = new LightReceiver_1.LightReceiver();
        var airConditionerReceiver = new AirConditionerOverheatReceiver_1.AirConditionerOverheatReceiver();
        var securitySystemnReceiver = new SecuritySystemReceiver_1.SecuritySystemReceiver();
        var turnLightsOn = new LightCommand_1.LightCommand(lightReceiver, false);
        var powerAirConditionerOn = new AirConditionerCommand_1.AirConditionerCommand(airConditionerReceiver, false);
        var lockAllDors = new SecuritySystemCommand_1.SecuritySystemCommand(securitySystemnReceiver, false);
        var homeRoutine = new HomeRoutine_1.HomeRoutine([
            turnLightsOn,
            powerAirConditionerOn,
            lockAllDors,
        ]);
        var remoteControl = new SmartRemote_1.SmartRemote();
        remoteControl.pressButton(homeRoutine);
        // Turning lights off!
        // ERROR: Hardware Overheat!
        // Turning lights on!
        var timeout = setTimeout(function () {
            remoteControl.pressUndo();
            // No commands to undo!
        }, 5000);
        clearTimeout(timeout);
    };
    return Client;
}());
exports.Client = Client;
(function () {
    var client = new Client();
    client.leave();
    client.arrive();
    client.lightException();
    client.AirConditionertException();
})();
