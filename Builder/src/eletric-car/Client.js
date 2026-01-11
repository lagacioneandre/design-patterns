"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var FamiliarModelBuilder_1 = require("./FamiliarModelBuilder");
var SalesPerson_1 = require("./SalesPerson");
var SportsModelBuilder_1 = require("./SportsModelBuilder");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.buySportsModel = function () {
        console.log('=== Sports Model ===');
        var builder = new SportsModelBuilder_1.SportsModelBuilder();
        var salesPerson = new SalesPerson_1.SalesPerson(builder);
        salesPerson.buildDefaultModel().carConfiguration();
    };
    Client.prototype.buyFamiliarModel = function () {
        console.log('=== Familiar Model ===');
        var builder = new FamiliarModelBuilder_1.FamiliarModelBuilder();
        var salesPerson = new SalesPerson_1.SalesPerson(builder);
        salesPerson.buildDefaultModel().carConfiguration();
    };
    return Client;
}());
exports.Client = Client;
(function () {
    var client = new Client();
    client.buySportsModel();
    client.buyFamiliarModel();
})();
