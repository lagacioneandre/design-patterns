import { ICommand } from "./command.interface";
import { FileSystem } from "./FileSystem";

export class CreateFileCommand implements ICommand {
    private receiver: FileSystem;
    private path: string;
    private file: string;

    constructor (receiver: FileSystem, path: string, file: string) {
        this.receiver = receiver;
        this.path = path;
        this.file = file;
    }

    execte(): boolean {
        return this.receiver.addFile(this.path, this.file);
    }

    undo(): void {
        this.receiver.removeFile(this.path, this.file);
    }
}