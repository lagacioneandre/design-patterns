"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CriarDocumento = void 0;
// client
var CriarDocumento = /** @class */ (function () {
    function CriarDocumento(factory) {
        this.factory = factory;
    }
    CriarDocumento.prototype.build = function () {
        var header = this.factory.header();
        var body = this.factory.body();
        var footer = this.factory.footer();
        console.log(header.title());
        console.log(body.content());
        console.log(footer.corpyright());
    };
    return CriarDocumento;
}());
exports.CriarDocumento = CriarDocumento;
