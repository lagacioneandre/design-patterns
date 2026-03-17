// Adaptee
export class LegacyPay {
    // O sistema antigo trabalha com centavos (inteiro) e nao com reais (decimal)
    executeTrade(amountInCents: number) {
        console.log(`LegacyPay: Processando transacao de ${amountInCents} centavos.`);
    }

    checkStatus() {
        // Retorna um booleano, mas nosso sistema espera uma string descritiva
        return true;
    }
}