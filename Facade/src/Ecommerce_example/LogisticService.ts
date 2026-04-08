// Subsistema 3: Servico de logistica

export class LogisticService {
    calculateShipping(zipCode: string) {
        console.log(`[Logisitica] Calculando frete para ${zipCode}...`);
        return 25;
    }

    scheduleDelivery(prodcutId: string, zipCode: string) {
        console.log(`[Logisitica] Entrega agendada para o produto ${prodcutId} no CEP ${zipCode}`);
    }
}