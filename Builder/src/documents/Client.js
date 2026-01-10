"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var DocumentDirector_1 = require("./DocumentDirector");
var SpecificDocumentBuilder_1 = require("./SpecificDocumentBuilder");
var TechDocumentBuilder_1 = require("./TechDocumentBuilder");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.buildSpecificDocument = function () {
        var builder = new SpecificDocumentBuilder_1.SpecificDocumentBuilder();
        var director = new DocumentDirector_1.DocumentDirector(builder);
        director.printSimpleIntroduction('This is Specific document builder for Simple introduction');
        director.printCompleteDocument('This is Specific document builder for Complete document');
    };
    Client.prototype.buildTechDocument = function () {
        var builder = new TechDocumentBuilder_1.TechDocumentBuilder();
        var director = new DocumentDirector_1.DocumentDirector(builder);
        director.printSimpleIntroduction('This is Tech document builder for Simple introduction');
        director.printCompleteDocument('This is Tech document builder for Complete document');
    };
    return Client;
}());
exports.Client = Client;
(function () {
    var client = new Client();
    client.buildSpecificDocument();
    client.buildTechDocument();
})();
