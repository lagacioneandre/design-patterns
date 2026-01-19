import { IUserAccountBuilder } from "./user-account-builder.interface";
import { User } from "./user.type";

export class ProfileDirector {
    constructor() {}

    createBasicUser(builder: IUserAccountBuilder, {id, name, email}: User) {
        return builder
            .setUserId(id)
            .setUserName(name)
            .setUserEmail(email)
            .build();
    }

    createCompleteUser(builder: IUserAccountBuilder, {id, name, email}: User) {
        return builder
            .setUserId(id)
            .setUserName(name)
            .setUserEmail(email)
            .setProfilePictureUrl('url-profile-picture')
            .isUserVerified(true)
            .setRoles(['ADMIN', 'CTO'])
            .build();
    }
}