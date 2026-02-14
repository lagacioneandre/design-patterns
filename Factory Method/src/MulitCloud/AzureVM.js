"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AzureVM = void 0;
var AzureVM = /** @class */ (function () {
    function AzureVM() {
        this.status = 'PENDING';
    }
    AzureVM.prototype.connect = function () {
        console.log('AzureVM connected.');
        return true;
    };
    AzureVM.prototype.getStatus = function () {
        return this.status;
    };
    AzureVM.prototype.launch = function () {
        var _this = this;
        this.status = 'PENDING';
        console.log("Launch server: ".concat(this.status));
        setTimeout(function () {
            _this.status = 'RUNNING';
            console.log("Launch server: ".concat(_this.status));
        }, 1000);
    };
    return AzureVM;
}());
exports.AzureVM = AzureVM;
