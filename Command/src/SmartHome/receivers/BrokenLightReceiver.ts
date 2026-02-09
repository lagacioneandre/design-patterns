import { LightReceiver } from "./LightReceiver";

export class BrokenLightReceiver extends LightReceiver {
    turnOff() {
        console.log('ERROR: Light bulb is burnt out! Cannot turn off.')
        return false;
    }
}