export class AirConditionerReceiver {
    private isOn = false;

    powerOn() {
        console.log('Powering air conditioner on!');
        this.isOn = true;
        return true;
    }

    powerOff() {
        console.log('Powerinf air conditioner off!');
        this.isOn = false;
        return true;
    }

    get currentState() {
        return this.isOn;
    }
}