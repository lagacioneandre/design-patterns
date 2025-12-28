import { Classe } from "../../interfaces/classe.interface";
import { Habilidade } from "../../interfaces/habilidade.interface";
import { Personagem } from "../../interfaces/personagem.interface";
import { Weapon } from "../../interfaces/weapon.interface";

// abstract factory
export interface PersonagensRPG {
    getPersonagem(): Personagem;
    getClasse(): Classe;
    getArma(): Weapon;
    getHabilidade(): Habilidade;
}