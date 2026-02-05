import { CreateFileCommand } from "./CreateFileCommand";
import { FileManager } from "./FileManager";
import { FileSystem } from "./FileSystem";
import { MoveFileCommand } from "./MoveFileCommand";

export class Client {
    execute() {
        const fileSystem = new FileSystem();
        const fileManager = new FileManager();

        const addPhoto = new CreateFileCommand(fileSystem, 'home', 'photo.png');
        const addPDF = new CreateFileCommand(fileSystem, 'documents', 'doc.pdf');
        const addBill = new CreateFileCommand(fileSystem, 'documents', 'bill.pdf');
        fileManager.execute(addPhoto); // File photo.png added in home
        fileManager.execute(addPDF); // File doc.pdf added in documents
        fileManager.execute(addBill); // File bill.pdf add in documents
        fileManager.undo(); // File bill.pdf removed from documents

        const movePhotoTaAwayPath = new MoveFileCommand(fileSystem, 'home', 'my files', 'photo.png');
        fileManager.execute(movePhotoTaAwayPath); // Destination path not found!

        const movePhotoFromAwayPath = new MoveFileCommand(fileSystem, 'my files', 'home', 'photo.png');
        fileManager.execute(movePhotoFromAwayPath); // Origin path or file not found!

        const moveAwayFile = new MoveFileCommand(fileSystem, 'home', 'documents', 'my-file.jpg');
        fileManager.execute(moveAwayFile); // File not found!

        const movePhoto = new MoveFileCommand(fileSystem, 'home', 'documents', 'photo.png');
        fileManager.execute(movePhoto); // File photo.png moved from home to documents
        fileManager.undo(); // File photo.png moved back to home from documents
    }
}

(function() {
    new Client().execute();
})();
