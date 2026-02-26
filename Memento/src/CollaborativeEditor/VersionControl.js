"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionControl = void 0;
var VersionControl = /** @class */ (function () {
    function VersionControl(document) {
        this.histoty = [];
        this.document = document;
    }
    VersionControl.prototype.save = function () {
        this.histoty.push(this.document.save());
    };
    VersionControl.prototype.undo = function () {
        if (!this.histoty.length) {
            console.log('Nothing to undo.');
            return;
        }
        this.histoty.pop();
        var rebuiltContent = '';
        for (var _i = 0, _a = this.histoty; _i < _a.length; _i++) {
            var memento = _a[_i];
            var _b = memento.getDetails(), action = _b.action, index = _b.index, text = _b.text;
            if (action === 'INSERT') {
                rebuiltContent = rebuiltContent.slice(0, index) + text + rebuiltContent.slice(index);
            }
            else {
                rebuiltContent = rebuiltContent.slice(0, index) + rebuiltContent.slice(index + text.length);
            }
        }
        this.document.restore(rebuiltContent);
    };
    return VersionControl;
}());
exports.VersionControl = VersionControl;
