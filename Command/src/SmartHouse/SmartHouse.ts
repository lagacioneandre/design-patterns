export class SmartHouse {
    private isLightOn = false;
    private temperature = 15;

    toggleLight(lightState: boolean) {
        this.isLightOn = lightState;
        console.log(`Light now is ${this.isLightOn ? 'on' : 'off'}!`);
    }

    changeTemperature(totalOfChange: number) {
        this.temperature += totalOfChange;
        console.log(`Temperature is changed to ${this.temperature} degrees!`);
    }
}