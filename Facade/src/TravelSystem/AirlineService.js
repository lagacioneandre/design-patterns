"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirlineService = void 0;
var AirlineService = /** @class */ (function () {
    function AirlineService() {
    }
    AirlineService.prototype.bookFlight = function (origin, dest) {
        var result = Math.round(Math.random() * 2);
        if (result < 2) {
            console.log("[Airline Service]: Nao foi possigem reservar o voo de ".concat(origin, " para ").concat(dest));
            return false;
        }
        console.log("[Airline Service]: Voo de ".concat(origin, " para ").concat(dest, " reservado com sucesso"));
        return true;
    };
    return AirlineService;
}());
exports.AirlineService = AirlineService;
