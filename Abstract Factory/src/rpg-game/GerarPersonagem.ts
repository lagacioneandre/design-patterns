import { PersonagensRPG } from "./factories/interface/rpg.interface";
import { Classe } from "./interfaces/classe.interface";
import { Habilidade } from "./interfaces/habilidade.interface";
import { Personagem } from "./interfaces/personagem.interface";
import { Weapon } from "./interfaces/weapon.interface";

// client
export class GerarPersonagem {
    private classe: Classe;
    private habilidade: Habilidade;
    private personagem: Personagem;
    private arma: Weapon;
    
    constructor (factory: PersonagensRPG) {
        this.classe = factory.getClasse();
        this.habilidade = factory.getHabilidade();
        this.personagem = factory.getPersonagem();
        this.arma = factory.getArma();
    }

    generate() {
        console.log(
            `
             Personagem definido: ${this.personagem.setName()}, da classe ${this.classe.setClass()},
             com a arma ${this.arma.setWeapon()} e a habilidade especial ${this.habilidade.setHabilidade()}
            `
        )
    }
}