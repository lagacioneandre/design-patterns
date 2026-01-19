import { IUserAccount } from "./user-account.interface";

export class UserAccount {
    readonly userId!: string;
    readonly userName!: string;
    readonly email!: string;
    readonly isVerified: boolean = false;
    readonly roles: ReadonlyArray<string> = [];
    readonly profilePictureUrl: string | null = null;

    constructor({
            userId,
            userName,
            email,
            isVerified = false,
            roles = [],
            profilePictureUrl = null,
        }: IUserAccount
    ) {
        this.userId = userId;
        this.userName = userName;
        this.email = email;
        this.isVerified = isVerified;
        this.roles = Object.freeze([...roles]);
        this.profilePictureUrl = profilePictureUrl;
    }

    getUser() {
        console.log('=== User created ===');
        console.log(`User ID: ${this.userId}`);
        console.log(`User name: ${this.userName}`);
        console.log(`Email: ${this.email}`);
        console.log(`Is verified: ${this.isVerified ? 'Yes' : 'No'}`);
        console.log(`Profile picture: ${this.profilePictureUrl}`);
        console.log(`Roles: ${this.roles.forEach(role => role)}`);
    }
}