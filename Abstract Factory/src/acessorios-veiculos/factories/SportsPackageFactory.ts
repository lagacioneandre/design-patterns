import { Panel } from "../interfaces/panel.interface";
import { Seat } from "../interfaces/seat.interface";
import { Wheels } from "../interfaces/wheels.interface";
import { AlloyWheels } from "../sports-package/AlloyWheels";
import { PanelMeters } from "../sports-package/PanelMeters";
import { SportsSeat } from "../sports-package/SportsSeat";
import { VehicleAccessories } from "./interface/vehicle-accessories";

// concrete factory
export class SportsPackageFactory implements VehicleAccessories {
    getPanel(): Panel {
        return new PanelMeters();
    }

    getSeat(): Seat {
        return new SportsSeat();
    }

    getWheels(): Wheels {
        return new AlloyWheels();
    }
}