"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudError = void 0;
var CloudError = /** @class */ (function () {
    function CloudError() {
        this.status = 'PENDING';
    }
    CloudError.prototype.connect = function () {
        console.log('CloudError connected.');
        return true;
    };
    CloudError.prototype.getStatus = function () {
        return this.status;
    };
    CloudError.prototype.launch = function () {
        this.status = 'ERROR';
    };
    return CloudError;
}());
exports.CloudError = CloudError;
