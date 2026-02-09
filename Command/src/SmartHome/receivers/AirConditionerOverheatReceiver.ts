import { AirConditionerReceiver } from "./AirConditionerReceiver";

export class AirConditionerOverheatReceiver extends AirConditionerReceiver {
    powerOff() {
        console.log('ERROR: Hardware Overheat!');
        return false;
    }
}