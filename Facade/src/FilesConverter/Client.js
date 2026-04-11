"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VideoConverterFacade_1 = require("./VideoConverterFacade");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function () {
        var converter = new VideoConverterFacade_1.VideoConverterFacade();
        converter.convert('FilePath', 'MP4');
    };
    return Client;
}());
(function () {
    new Client().execute();
})();
