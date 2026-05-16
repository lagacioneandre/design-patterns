/**
 * A Flyweight Factory (O gerenciador)
 * Esta fabrica garante que nao criaremos dois tipos de arvores identicos
 */

import { TreeType } from "./TreeType";

export class TreeFactory {
    private static treeTypes: { [key: string]: TreeType} = {};

    static getTreeType(name: string, color: string, texture: string): TreeType {
        const key = `${name}_${color}_${texture}`;

        if(!this.treeTypes[key]) {
            console.log(`[Factory]: Criando um novo tipo de arvore: ${name}`);
            this.treeTypes[key] = new TreeType(name, color, texture);
        } else {
            console.log(`[Factory]: Reutilizando tipo de existente: ${name}`);
        }
        
        return this.treeTypes[key];
    }
}