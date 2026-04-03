import { BaseStream } from "./BaseStream";
import { CompressionDecorator } from "./CompressionDecorator";
import { EncryptionDecorator } from "./EncryptionDecorator";
import { ProfanityFilterDecorator } from "./ProfanityFilterDecorator";

class Client {
    execute() {
        let message = new BaseStream();
        message = new CompressionDecorator(message);
        message = new ProfanityFilterDecorator(message);
        message = new EncryptionDecorator(message);
        const result = message.process('  olha esse bobo   ')
        console.log(result);
    }

    execute2() {
        let message = new BaseStream();
        message = new ProfanityFilterDecorator(message);
        message = new EncryptionDecorator(message);
        message = new CompressionDecorator(message);
        const result = message.process('  aquele tanso ali ')
        console.log(result);
    }
}

new Client().execute();
new Client().execute2();