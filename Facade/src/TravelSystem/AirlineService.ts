export class AirlineService {
    bookFlight(origin: string, dest: string) {
        const result = Math.round(Math.random() * 2);
        if (result < 2) {
            console.log(`[Airline Service]: Nao foi possigem reservar o voo de ${origin} para ${dest}`);
            return false;
        }

        console.log(`[Airline Service]: Voo de ${origin} para ${dest} reservado com sucesso`);
        return true;
    }
}