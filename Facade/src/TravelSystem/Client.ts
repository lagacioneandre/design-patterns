import { AirlineService } from "./AirlineService";
import { CarRentalService } from "./CarRentalService";
import { HotelService } from "./HotelService";
import { TravelFacade } from "./TravelFacade";

class Client {
    execute() {
        const airlineService = new AirlineService();
        const hotelService = new HotelService();
        const carRentalService = new CarRentalService();
        const travelFacade = new TravelFacade(airlineService, hotelService, carRentalService);
        const isReservationsSuccess = travelFacade.bookCompleteTrip('Sao Paulo', 'Paris');
        if (!isReservationsSuccess) {
            console.log('Erro ao efetuar as reservas!');
            return;
        }

        console.log('Reservas efetuadas com sucesso, os detalhes das reservas podem ser conferidos abaixo!');
    }
}

(() => {
    new Client().execute();
})();