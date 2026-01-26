import { UserProfile } from "./UserProfile";

export interface IProfileBuilder {
    setCredentials(pass: string): this;
    setPhotoUrl(url: string): this;
    build(): UserProfile;
}