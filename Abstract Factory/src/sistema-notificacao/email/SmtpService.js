"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmtpService = void 0;
// concrete class
var SmtpService = /** @class */ (function () {
    function SmtpService() {
    }
    SmtpService.prototype.connect = function () {
        return 'SMTP Service connected.';
    };
    return SmtpService;
}());
exports.SmtpService = SmtpService;
