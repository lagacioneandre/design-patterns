import { Seat } from "../interfaces/seat.interface";

// concrete class
export class LeatherSeat implements Seat {
    description(): string {
        return 'Leather seats.';
    }
}