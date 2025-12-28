import { Weapon } from "../interfaces/weapon.interface";

// concrete class
export class Blaster implements Weapon {
    setWeapon(): string {
        return 'Blaster';
    }
}