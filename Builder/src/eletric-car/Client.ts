import { FamiliarModelBuilder } from "./FamiliarModelBuilder";
import { SalesPerson } from "./SalesPerson";
import { SportsModelBuilder } from "./SportsModelBuilder";

export class Client {

    buySportsModel() {
        console.log('=== Sports Model ===');
        const builder = new SportsModelBuilder();
        const salesPerson = new SalesPerson(builder);
        salesPerson.buildDefaultModel().carConfiguration();
    }

    buyFamiliarModel() {
        console.log('=== Familiar Model ===');
        const builder = new FamiliarModelBuilder();
        const salesPerson = new SalesPerson(builder);
        salesPerson.buildDefaultModel().carConfiguration();
    }
}

(function () {
    const client = new Client();
    client.buySportsModel();
    client.buyFamiliarModel();
})();