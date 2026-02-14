"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudManager = void 0;
var CloudManager = /** @class */ (function () {
    function CloudManager() {
        this.tryToLaunchCount = 0;
    }
    CloudManager.prototype.startServer = function () {
        var server = this.createServer();
        var connection = server.connect();
        if (!connection)
            throw new Error('Could not possible to connect.');
        this.launchServer(server);
    };
    CloudManager.prototype.launchServer = function (server) {
        var _this = this;
        server.launch();
        var status = server.getStatus();
        if (status === 'ERROR') {
            if (this.tryToLaunchCount < 3) {
                setTimeout(function () {
                    _this.tryToLaunchCount++;
                    _this.launchServer(server);
                    return;
                }, 500);
            }
            throw new Error('Critical Failure: Server could not be provisioned');
        }
        if (status === 'RUNNING')
            console.log('Server is live and healthy!');
    };
    return CloudManager;
}());
exports.CloudManager = CloudManager;
