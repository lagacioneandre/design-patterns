import { IUserAccountBuilder } from "./user-account-builder.interface";
import { IUserAccount } from "./user-account.interface";
import { UserAccount } from "./UserAccount";

export class UserAccountBuilder implements IUserAccountBuilder {
    private userId!: string;
    private userName!: string;
    private email!: string;
    private isVerified = false;
    private roles: string[] = [];
    private profilePictureUrl: string | null = null;
    private TOTAL_NAME_LENGTH = 50;
    private TOTAL_UUID_LENGTH = 8;
    
    constructor () {}

    setUserId(id: string): this {
        this.userId = id;
        return this;
    }

    setUserName(name: string): this {
        this.userName = name;
        return this;
    }

    setUserEmail(email: string): this {
        this.email = email;
        return this;
    }

    isUserVerified(isVerified: boolean): this {
        this.isVerified = isVerified;
        return this;
    }

    setRoles(roles: string[]): this {
        this.roles = [...roles];
        return this;
    }

    setProfilePictureUrl(url?: string): this {
        this.profilePictureUrl = url || null;
        return this;
    }

    build(): UserAccount {
        const isValidName = this.validateUserName(this.userName);
        const isValidId = this.validateUUID(this.userId);
        const isValidEmail = this.validateEmail(this.email);

        if (!isValidName) {
            throw new Error(`Name must to be less than ${this.TOTAL_NAME_LENGTH} characters.`);
        }

        if (!isValidId) {
            throw new Error(`ID must to be more than ${this.TOTAL_UUID_LENGTH} characters.`);
        }

        if (!isValidEmail) {
            throw new Error(`Email is invalid`);
        }

        const userAccountData: IUserAccount = {
            userId: this.userId,
            userName: this.userName,
            email: this.email,
            isVerified: this.isVerified,
            roles: this.roles,
            profilePictureUrl: this.profilePictureUrl,
        };

        return new UserAccount(userAccountData);
    }

    private validateUserName(name: string) {
        return name.length < this.TOTAL_NAME_LENGTH;
    }

    private validateUUID(id: string) {
        return id.length >= this.TOTAL_UUID_LENGTH;
    }

    private validateEmail(email: string) {
        const regex: RegExp = /@/;
        return email.length && regex.test(email);
    }
}