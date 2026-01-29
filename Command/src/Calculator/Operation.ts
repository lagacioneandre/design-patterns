export class Operation {
    private result = 0;

    toAdd(value: number) {
        this.result += value;
        console.log(`Added ${value}, the result is: ${this.result}`);
    }

    toSubtract(value: number) {
        this.result -= value;
        console.log(`Subtracted ${value}, the result is: ${this.result}`);
    }
}