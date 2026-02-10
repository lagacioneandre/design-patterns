"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LightOffCommand_1 = require("./LightOffCommand");
var LightOnCommand_1 = require("./LightOnCommand");
var RemoteControl_1 = require("./RemoteControl");
var SmartHouse_1 = require("./SmartHouse");
var ThermostatUpCommand_1 = require("./ThermostatUpCommand");
var ThernostatDownCommand_1 = require("./ThernostatDownCommand");
function client() {
    var receiver = new SmartHouse_1.SmartHouse();
    var turnsLightOnCommand = new LightOnCommand_1.LightOnCommand(receiver);
    var turnsLightOffCommand = new LightOffCommand_1.LightOffCommand(receiver);
    var thermostatUpTemperatureCommand = new ThermostatUpCommand_1.ThermostatUpCommand(receiver);
    var thermostatDownTemperatureCommand = new ThernostatDownCommand_1.ThermostatDownCommand(receiver);
    // turns light on
    var remoteControl1 = new RemoteControl_1.RemoteControl(turnsLightOnCommand);
    remoteControl1.pressButton();
    // turns light off
    var remoteControl2 = new RemoteControl_1.RemoteControl(turnsLightOffCommand);
    remoteControl2.pressButton();
    // increase the temperature
    var remoteControl3 = new RemoteControl_1.RemoteControl(thermostatUpTemperatureCommand);
    remoteControl3.pressButton();
    // decrease temperature
    var remoteControl4 = new RemoteControl_1.RemoteControl(thermostatDownTemperatureCommand);
    remoteControl4.pressButton();
}
client();
