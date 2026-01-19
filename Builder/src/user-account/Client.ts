import { ProfileDirector } from "./ProfileDirector";
import { User } from "./user.type";
import { UserAccountBuilder } from "./UserAccountBuilder";

export class Client {
    createUser() {
        const buider = new UserAccountBuilder();
        const director = new ProfileDirector();
        const user: User = {
            name: 'Andre',
            id: '12345678',
            email: 'mail@mail.com'
        };
        const profile = director.createBasicUser(buider, user);
        profile.getUser();
    }

    createCompleteUser() {
        const buider = new UserAccountBuilder();
        const director = new ProfileDirector();
        const user: User = {
            name: 'Teste',
            id: '12345678',
            email: 'mail@mail.com'
        };
        const profile = director.createCompleteUser(buider, user);
        profile.getUser();
    }

    createUserWithWrongName() {
        try {
            const buider = new UserAccountBuilder();
            const director = new ProfileDirector();
            const user: User = {
                name: 'TesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTeste',
                id: '12345678',
                email: 'mail@mail.com'
            };
            const profile = director.createCompleteUser(buider, user);
            profile.getUser();
        } catch (error) {
            console.error(error);
        }
    }

    createUserWithWrongId() {
        try {
            const buider = new UserAccountBuilder();
            const director = new ProfileDirector();
            const user: User = {
                name: 'Teste 2',
                id: '123456',
                email: 'mail@mail.com'
            };
            const profile = director.createCompleteUser(buider, user);
            profile.getUser();
        } catch (error) {
            console.error(error);
        }
    }

    createUserWithWrongEmail() {
        try {
            const buider = new UserAccountBuilder();
            const director = new ProfileDirector();
            const user: User = {
                name: 'Teste 3',
                id: '123456',
                email: 'mail'
            };
            const profile = director.createCompleteUser(buider, user);
            profile.getUser();
        } catch (error) {
            console.error(error);
        }
    }
}

(function() {
    const client = new Client();
    client.createUser();
    client.createCompleteUser();
    client.createUserWithWrongName();
    client.createUserWithWrongId();
    client.createUserWithWrongEmail();
})();