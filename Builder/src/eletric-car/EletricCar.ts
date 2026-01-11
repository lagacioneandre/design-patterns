export class EletricCar {
    private engine!: string;
    private color!: string;
    private battery!: string;
    private wheels!: string;

    protected constructor () {}

    static createCar(): EletricCar {
        return new EletricCar();
    }

    setEngine(engine: string) {
        this.engine = engine;
    }

    setColor(color: string) {
        this.color = color;
    }

    setBattery(battery: string) {
        this.battery = battery;
    }

    setWheels(wheels: string) {
        this.wheels = wheels;
    }

    carConfiguration() {
        console.log("\n==================================");
        console.log(`Carro Montado:`);
        console.log(`  Motor:   ${this.engine}`);
        console.log(`  Bateria: ${this.battery}`);
        console.log(`  Cor:     ${this.color}`);
        console.log(`  Rodas:   ${this.wheels}`);
        console.log("==================================");
    }
}