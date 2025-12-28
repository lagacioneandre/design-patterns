import { Androide } from "../ficcao/Androide";
import { Blaster } from "../ficcao/Blaster";
import { CampoDeForca } from "../ficcao/CampoDeForca";
import { Engenheiro } from "../ficcao/Engenheiro";
import { Classe } from "../interfaces/classe.interface";
import { Habilidade } from "../interfaces/habilidade.interface";
import { Personagem } from "../interfaces/personagem.interface";
import { Weapon } from "../interfaces/weapon.interface";
import { PersonagensRPG } from "./interface/rpg.interface";

// concrete factory
export class FiccaoFactory implements PersonagensRPG {
    getArma(): Weapon {
        return new Blaster();
    }

    getClasse(): Classe {
        return new Engenheiro();
    }

    getHabilidade(): Habilidade {
        return new CampoDeForca();
    }

    getPersonagem(): Personagem {
        return new Androide();
    }
}