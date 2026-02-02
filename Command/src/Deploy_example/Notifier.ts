/**
 * RECEPTOR 3: Notificacao (Simulacao)
 * Responsavel por enviar mensagens.
 */

export class Notifier {
    sendEmail(recipient: string, message: string) {
        console.log(`[Notificador] Enviando email para ${recipient}: "${message}"`);
        // Logica real para envio de email via API
    }
}