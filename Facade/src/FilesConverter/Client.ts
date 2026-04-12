import { VideoConverterFacade } from "./VideoConverterFacade";

class Client {
    execute() {
        const converter = new VideoConverterFacade();
        converter.convert('FilePath', 'MP4');
    }
}

(() => {
    new Client().execute();
})();