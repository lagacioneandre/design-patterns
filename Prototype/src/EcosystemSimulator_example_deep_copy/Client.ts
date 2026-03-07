import { Organism } from "./Organism";

class Client {
    execute() {
        // 1. Criamos o organismo original
        const original = new Organism('Celular primario', ['A', 'T', 'G', 'C'], 1.5, { x: 0, y: 0 });

        // 2. clonamos o organismo
        const mutant = original.clone();

        // 3. modificamos o MUTANTE (incluimos o DNA que 'e um objeto aninhado)
        mutant.species = 'Celular mutante';
        mutant.mutate(0, 'Z'); // Muda 'A' para 'Z' no DNA
        mutant.position.x = 100;

        console.log("--- Original ---");
        original.display(); 
        // Saída: Celular Primário | DNA: A-T-C-G | Pos: (0,0) -> PERMANECEU INTACTO!

        console.log("--- Mutante ---");
        mutant.display();   
        // Saída: Celular Mutante | DNA: Z-T-C-G | Pos: (100,0)
    }
}

(() => {
    new Client().execute();
})();