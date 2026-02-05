"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFileCommand = void 0;
class CreateFileCommand {
    constructor(receiver, path, file) {
        this.receiver = receiver;
        this.path = path;
        this.file = file;
    }
    execte() {
        return this.receiver.addFile(this.path, this.file);
    }
    undo() {
        this.receiver.removeFile(this.path, this.file);
    }
}
exports.CreateFileCommand = CreateFileCommand;
