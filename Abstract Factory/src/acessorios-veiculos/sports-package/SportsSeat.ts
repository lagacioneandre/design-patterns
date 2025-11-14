import { Seat } from "../interfaces/seat.interface";

// concrete class
export class SportsSeat implements Seat {
    description(): string {
        return 'Sports seats.';
    }
}