"use strict";
// 4. Criadores concretos (A decisao de criacao fica aqui)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoadLogistics = void 0;
var Logistics_1 = require("../Logistics");
var Truck_1 = require("../products/Truck");
var RoadLogistics = /** @class */ (function (_super) {
    __extends(RoadLogistics, _super);
    function RoadLogistics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // A filha "conversa" com o pai fornecendo o objeto correto
    RoadLogistics.prototype.createTransport = function () {
        return new Truck_1.Truck();
    };
    return RoadLogistics;
}(Logistics_1.Logistics));
exports.RoadLogistics = RoadLogistics;
