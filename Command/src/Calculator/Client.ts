import { AdditionCommand } from "./AdditionCommand";
import { Calculator } from "./Calculator";
import { Operation } from "./Operation";
import { SubtractionCommand } from "./SubtractionCommand";

export class Client {
    execute() {
        const operations = new Operation();
        const calculator = new Calculator();
        const add10 = new AdditionCommand(operations, 10);
        const add5 = new AdditionCommand(operations, 5);
        const remove3 = new SubtractionCommand(operations, 3);
        calculator.execute(add10); // 10
        calculator.execute(add5); // 15
        calculator.execute(remove3); // 12
        calculator.undo(); // 15
        calculator.undo(); // 10
        calculator.undo(); // 0
        calculator.undo(); // No items in history
    }
}

(function() {
    new Client().execute();
})();
