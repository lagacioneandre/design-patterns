import { AirlineService } from "./AirlineService";
import { CarRentalService } from "./CarRentalService";
import { HotelService } from "./HotelService";

export class TravelFacade {
    constructor(
        private airlineService: AirlineService,
        private hotelService: HotelService,
        private carRentalService: CarRentalService
    ) {}

    bookCompleteTrip(origin: string, dest: string) {
        const airlineReservation = this.airlineService.bookFlight(origin, dest);
        if (!airlineReservation) {
            console.log('Erro ao reservar as passagens aereas, nao e possivel seguir para as demais reservas!');
            return false;
        }

        this.hotelService.bookRoom(dest);
        this.carRentalService.rentCer(dest);
        return true;
    }
}