import { ProfileBuilder } from "./ProfileBuilder";

class Client {
    buildCompleteProfile() {
        const profile = new ProfileBuilder('Andre', 'email@mail.com')
            .setCredentials('password')
            .setPhotoUrl('photo-url')
            .build();
        profile.getProfileData();
    }

    buildSimpleProfile() {
        const profile = new ProfileBuilder('Dani', 'dani@email.com')
            .build();
        profile.getProfileData();
    }
}

(function() {
    const client = new Client();
    client.buildCompleteProfile();
    client.buildSimpleProfile();
})();