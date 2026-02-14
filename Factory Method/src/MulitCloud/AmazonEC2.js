"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmazonEC2 = void 0;
var AmazonEC2 = /** @class */ (function () {
    function AmazonEC2() {
        this.status = 'PENDING';
    }
    AmazonEC2.prototype.connect = function () {
        console.log('AmazonEC2 connected.');
        this.status = 'RUNNING';
        return true;
    };
    AmazonEC2.prototype.getStatus = function () {
        return this.status;
    };
    AmazonEC2.prototype.launch = function () {
        this.status = 'PENDING';
        var randomNumber = Math.random();
        if (randomNumber < 0.2) {
            console.log("Launch server: ".concat(this.status));
            this.status = 'ERROR';
            return;
        }
        this.status = 'RUNNING';
        console.log("Launch server: ".concat(this.status));
    };
    return AmazonEC2;
}());
exports.AmazonEC2 = AmazonEC2;
