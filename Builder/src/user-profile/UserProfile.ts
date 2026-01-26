export class UserProfile {
    name: string;
    email: string;
    photoUrl!: string;
    hashPass!: string;

    private constructor (name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    static createProfile(name: string, email: string) {
        return new UserProfile(name, email);
    }

    getProfileData() {
        console.log('--- User profile ---');
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Photo URL: ${this.photoUrl || 'Not defined'}`);
        console.log(`Password: ${this.hashPass || 'Not defined'}`);
    }
}