import { IProfileBuilder } from "./profile-builder.interface";
import { UserProfile } from "./UserProfile";

export class ProfileBuilder implements IProfileBuilder {
    private userProfile: UserProfile;

    constructor (name: string, email: string) {
        this.userProfile = UserProfile.createProfile(name, email);
    }

    setCredentials(pass: string): this {
        this.userProfile.hashPass = pass;
        return this;
    }

    setPhotoUrl(url: string): this {
        this.userProfile.photoUrl = url;
        return this;
    }

    build(): UserProfile {
        return this.userProfile;
    }
}