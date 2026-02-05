export class FileSystem {
    private fileSystem = new Map<string, string[]>();

    addFile(path: string, file: string) {
        const filesPath = this.fileSystem.get(path);
        if (!filesPath) {
            this.fileSystem.set(path, [file]);
            console.log(`File ${file} added in ${path}.`);
            return true;
        }
        const fileIndex = filesPath.indexOf(file);
        if (fileIndex > -1) {
            console.log('This file already exists!');
            return false;
        }
        filesPath.push(file);
        this.fileSystem.set(path, filesPath);
        console.log(`File ${file} added in ${path}.`);
        return true;
    }

    removeFile(path: string, file: string) {
        const filesPath = this.fileSystem.get(path);
        if (!filesPath) {
            console.log('Path not found!');
            return false;
        }
        const fileIndex = filesPath.indexOf(file);
        if (fileIndex < 0) {
            console.log('File not found!');
            return false;
        }
        filesPath.splice(fileIndex, 1);
        if (!filesPath.length) {
            this.fileSystem.delete(path);
        } else {
            this.fileSystem.set(path, filesPath);
        }
        console.log(`File ${file} removed from ${path}`);
        return true;
    }

    getPath(path: string) {
        return this.fileSystem.get(path);
    }
}