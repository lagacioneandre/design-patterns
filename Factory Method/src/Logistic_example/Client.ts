import { RoadLogistics } from "./creators/RoadLogistics";
import { SeaLogistics } from "./creators/SeaLogistics";
import { Logistics } from "./Logistics";

class Client {
    delivery(factory: Logistics) {
        console.log('Invocando a factory');
        factory.planDelivery();
    }
}

(() => {
    const client = new Client();
    client.delivery(new RoadLogistics());
    client.delivery(new SeaLogistics());
})();