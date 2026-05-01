"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TravelFacade = void 0;
var TravelFacade = /** @class */ (function () {
    function TravelFacade(airlineService, hotelService, carRentalService) {
        this.airlineService = airlineService;
        this.hotelService = hotelService;
        this.carRentalService = carRentalService;
    }
    TravelFacade.prototype.bookCompleteTrip = function (origin, dest) {
        var airlineReservation = this.airlineService.bookFlight(origin, dest);
        if (!airlineReservation) {
            console.log('Erro ao reservar as passagens aereas, nao e possivel seguir para as demais reservas!');
            return;
        }
        this.hotelService.bookRoom(dest);
        this.carRentalService.rentCer(dest);
    };
    return TravelFacade;
}());
exports.TravelFacade = TravelFacade;
