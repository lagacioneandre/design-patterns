"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AirlineService_1 = require("./AirlineService");
var CarRentalService_1 = require("./CarRentalService");
var HotelService_1 = require("./HotelService");
var TravelFacade_1 = require("./TravelFacade");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function () {
        var airlineService = new AirlineService_1.AirlineService();
        var hotelService = new HotelService_1.HotelService();
        var carRentalService = new CarRentalService_1.CarRentalService();
        var travelFacade = new TravelFacade_1.TravelFacade(airlineService, hotelService, carRentalService);
        travelFacade.bookCompleteTrip('Sao Paulo', 'Paris');
    };
    return Client;
}());
(function () {
    new Client().execute();
})();
