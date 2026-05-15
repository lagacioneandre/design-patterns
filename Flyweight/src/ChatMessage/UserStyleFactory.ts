import { UserIntrinsicData } from "./UserIntrinsicData";

export class UserStyleFactory {
    private static usersMessage: { [key: string]: UserIntrinsicData } = {};

    static getUserData(username: string, avatar: string, headerColor: string) {
        const key = `${username}_${avatar}_${headerColor}`;

        if(!this.usersMessage[key]) {
            console.log(`[Factory]: Criando um novo usuario no chat: ${username}`);
            this.usersMessage[key] = new UserIntrinsicData(username, avatar, headerColor);
        }

        return this.usersMessage[key];
    }
}