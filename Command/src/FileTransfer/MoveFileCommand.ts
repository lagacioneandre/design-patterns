import { ICommand } from "./command.interface";
import { FileSystem } from "./FileSystem";

export class MoveFileCommand implements ICommand {
    private receiver: FileSystem;
    private originPath: string;
    private destinationPath: string;
    private file: string;

    constructor (receiver: FileSystem, originPath: string, destinationPath: string, file: string) {
        this.receiver = receiver;
        this.originPath = originPath;
        this.destinationPath = destinationPath;
        this.file = file;
    }

    execte(): boolean {
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

    undo(): void {
        this.receiver.removeFile(this.destinationPath, this.file);
        this.receiver.addFile(this.originPath, this.file);
        console.log(`File ${this.file} moved back to ${this.originPath} from ${this.destinationPath}`);
    }
}