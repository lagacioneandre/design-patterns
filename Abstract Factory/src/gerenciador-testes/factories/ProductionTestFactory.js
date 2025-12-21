"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductionTestFactory = void 0;
var ProductionAuthService_1 = require("../production/ProductionAuthService");
var RealDatabase_1 = require("../production/RealDatabase");
// concrete factory
var ProductionTestFactory = /** @class */ (function () {
    function ProductionTestFactory() {
    }
    ProductionTestFactory.prototype.authenticate = function () {
        return new ProductionAuthService_1.ProductionAuthService();
    };
    ProductionTestFactory.prototype.databaseConnection = function () {
        return new RealDatabase_1.RealDatabase();
    };
    return ProductionTestFactory;
}());
exports.ProductionTestFactory = ProductionTestFactory;
