export class UserIntrinsicData {
    constructor (
        private username: string,
        private avatar: string,
        private headerColor: string
    ) {}

    display(messageText: string, timestamp: string) {
        console.log(`Imprimindo mensagem: ${messageText} em ${timestamp} enviado por ${this.username}, ${this.avatar}, ${this.headerColor}`);
    }
}