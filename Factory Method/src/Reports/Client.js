"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CSVGenerator_1 = require("./CSVGenerator");
var HTMLGenerator_1 = require("./HTMLGenerator");
var PDFGenerator_1 = require("./PDFGenerator");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.generateReport = function (factory) {
        factory.export('Geracao de relatorio iniciada!!');
    };
    return Client;
}());
(function () {
    var client = new Client();
    console.log('Deve gerar o relatorio em PDF!');
    client.generateReport(new PDFGenerator_1.PDFGenerator());
    console.log('\nDeve gerar o relatorio em HTML!');
    client.generateReport(new HTMLGenerator_1.HTMLGenerator());
    console.log('\nDeve gerar o relatorio em CSV!');
    client.generateReport(new CSVGenerator_1.CSVGenerator());
})();
