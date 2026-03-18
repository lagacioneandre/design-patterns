import { UserProfile } from "./user-profile.interface";

// Target interface
export interface UserProvider {
    fetchUser(id: string): UserProfile;
}