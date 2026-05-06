import { UserIntrinsicData } from "./UserIntrinsicData";

export class ChatMessage {
    constructor (
        private text: string,
        private timestamp: string,
        private userStyle: UserIntrinsicData
    ) {}

    print() {
        this.userStyle.display(this.text, this.timestamp);
    }
}