/**
 * O Cliente (A Floresta)
 * Veja como podemos crias milhares de arvores usando quase nenhuma memoria adicional para os tipos de dados repetidos.
 */

import { Tree } from "./Tree";
import { TreeFactory } from "./TreeFactory";

class Forest {
    private trees: Tree[] = [];

    plantTree(x: number, y: number, name: string, color: string, texture: string) {
        // A fabrica decide se cria um novo tipo ou reutiliza
        const type = TreeFactory.getTreeType(name, color, texture);
        const tree = new Tree(x, y, type);
        this.trees.push(tree);
    }

    renderForest() {
        this.trees.forEach(tree => tree.draw());
    }
}

// Execucao
const myForest = new Forest();

// Plantando 3 arvores, mas apenas e tipos reais sao criados na memoria
myForest.plantTree(10, 20, 'Carvalho', 'Verde', 'oak_texture.png');
myForest.plantTree(50, 80, 'Pinheiro', 'Verde Escuro', 'pine_texture.png');
myForest.plantTree(100, 200, 'Carvalho', 'Verde', 'oak_texture.png'); // Reutiliza o primeiro!

console.log('--- Total de arvores na lista: 3 ---');
myForest.renderForest();