"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveFileCommand = void 0;
class MoveFileCommand {
    constructor(receiver, originPath, destinationPath, file) {
        this.receiver = receiver;
        this.originPath = originPath;
        this.destinationPath = destinationPath;
        this.file = file;
    }
    execte() {
        const removeFileOperation = this.receiver.removeFile(this.originPath, this.file);
        if (!removeFileOperation) {
            console.log('Origin path or file not found!');
            return false;
        }
        const isDestinationPathExists = this.receiver.getPath(this.destinationPath);
        if (!isDestinationPathExists) {
            console.log('Destination path not found!');
            this.receiver.addFile(this.originPath, this.file);
            return false;
        }
        this.receiver.addFile(this.destinationPath, this.file);
        console.log(`File ${this.file} moved from ${this.originPath} to ${this.destinationPath}`);
        return true;
    }
    undo() {
        this.receiver.removeFile(this.destinationPath, this.file);
        this.receiver.addFile(this.originPath, this.file);
        console.log(`File ${this.file} moved back to ${this.originPath} from ${this.destinationPath}`);
    }
}
exports.MoveFileCommand = MoveFileCommand;
