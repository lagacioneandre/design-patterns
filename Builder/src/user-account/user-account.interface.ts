export interface IUserAccount {
    userId: string;
    userName: string;
    email: string;
    isVerified?: boolean;
    roles?: string[];
    profilePictureUrl?: string | null;
}