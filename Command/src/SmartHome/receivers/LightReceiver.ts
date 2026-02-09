export class LightReceiver {
    private isOn = false;
    
    turnOn() {
        console.log('Turning lights on!');
        this.isOn = true;
        return true;
    }

    turnOff() {
        console.log('Turning lights off!');
        this.isOn = false;
        return true;
    }

    get currentState() {
        return this.isOn;
    }
}