"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const CreateFileCommand_1 = require("./CreateFileCommand");
const FileManager_1 = require("./FileManager");
const FileSystem_1 = require("./FileSystem");
const MoveFileCommand_1 = require("./MoveFileCommand");
class Client {
    execute() {
        const fileSystem = new FileSystem_1.FileSystem();
        const fileManager = new FileManager_1.FileManager();
        const addPhoto = new CreateFileCommand_1.CreateFileCommand(fileSystem, 'home', 'photo.png');
        const addPDF = new CreateFileCommand_1.CreateFileCommand(fileSystem, 'documents', 'doc.pdf');
        const addBill = new CreateFileCommand_1.CreateFileCommand(fileSystem, 'documents', 'bill.pdf');
        fileManager.execute(addPhoto); // File photo.png added in home
        fileManager.execute(addPDF); // File doc.pdf added in documents
        fileManager.execute(addBill); // File bill.pdf add in documents
        fileManager.undo(); // File bill.pdf removed from documents
        const movePhotoTaAwayPath = new MoveFileCommand_1.MoveFileCommand(fileSystem, 'home', 'my files', 'photo.png');
        fileManager.execute(movePhotoTaAwayPath); // Destination path not found!
        const movePhotoFromAwayPath = new MoveFileCommand_1.MoveFileCommand(fileSystem, 'my files', 'home', 'photo.png');
        fileManager.execute(movePhotoFromAwayPath); // Origin path or file not found!
        const moveAwayFile = new MoveFileCommand_1.MoveFileCommand(fileSystem, 'home', 'documents', 'my-file.jpg');
        fileManager.execute(moveAwayFile); // File not found!
        const movePhoto = new MoveFileCommand_1.MoveFileCommand(fileSystem, 'home', 'documents', 'photo.png');
        fileManager.execute(movePhoto); // File photo.png moved from home to documents
        fileManager.undo(); // File photo.png moved back to home from documents
    }
}
exports.Client = Client;
(function () {
    new Client().execute();
})();
