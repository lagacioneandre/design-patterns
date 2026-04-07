import { BoldDecorator } from "./BoldDecorator";
import { CodeDecorator } from "./CodeDecorator";
import { ItalicDecorator } from "./ItalicDecorator";
import { PlainText } from "./PlainText";
import { TextElement } from "./text-element.interface";

class Client {
    execute() {
        let text: TextElement = new PlainText('Ola mundo');
        text = new CodeDecorator(text);
        text = new ItalicDecorator(text);
        text = new BoldDecorator(text);
        console.log(text.render());
    }
}

(() => {
    new Client().execute();
})();