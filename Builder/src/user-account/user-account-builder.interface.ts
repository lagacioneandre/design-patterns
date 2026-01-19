import { UserAccount } from "./UserAccount";

export interface IUserAccountBuilder {
    setUserId(id: string): this;
    setUserName(name: string): this;
    setUserEmail(email: string): this;
    isUserVerified(isVerified: boolean): this;
    setRoles(roles?: string[]): this;
    setProfilePictureUrl(url?: string): this;
    build(): UserAccount;
}