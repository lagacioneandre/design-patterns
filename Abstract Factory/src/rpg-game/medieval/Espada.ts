import { Weapon } from "../interfaces/weapon.interface";

// concrete class
export class Espada implements Weapon {
    setWeapon(): string {
        return 'Espada';
    }
}