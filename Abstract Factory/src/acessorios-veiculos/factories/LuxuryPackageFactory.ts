import { Panel } from "../interfaces/panel.interface";
import { Seat } from "../interfaces/seat.interface";
import { Wheels } from "../interfaces/wheels.interface";
import { ChromeWheels } from "../luxury-package/ChromeWheels";
import { LeatherSeat } from "../luxury-package/LeatherSeat";
import { PanelTouch } from "../luxury-package/PanelTouch";
import { VehicleAccessories } from "./interface/vehicle-accessories";

// concrete factory
export class LuxuryPackageFactory implements VehicleAccessories {
    getPanel(): Panel {
        return new PanelTouch();
    }

    getSeat(): Seat {
        return new LeatherSeat();
    }

    getWheels(): Wheels {
        return new ChromeWheels();
    }
}