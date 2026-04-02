import { Coffee } from "./coffee.interface";
import { MilkDecorator } from "./MilkDecorator";
import { SimpleCoffee } from "./SimpleCoffee";
import { WhippedCreamDecorator } from "./WhippedCreamDecorator";

class Client {
    execute() {
        // 1. um cafe simples
        let meuCafe: Coffee = new SimpleCoffee();
        console.log(`${meuCafe.getDescription()} -> R$ ${meuCafe.cost()}`);
        // Saida: Cafe simples -> R$ 5

        // 2. Queremos adicionar leite (envolvemos o cafe simples no decorator de leite)
        meuCafe = new MilkDecorator(meuCafe);
        console.log(`${meuCafe.getDescription()} -> R$ ${meuCafe.cost()}`);
        // Saida: Cafe simples, Leite -> R$ 7

        // 3. Agora queremos adicionar chantilly por cima de tudo
        meuCafe = new WhippedCreamDecorator(meuCafe);
        console.log(`${meuCafe.getDescription()} -> R$ ${meuCafe.cost()}`);
        // Saida: Cafe simples, Leite, Chantilly -> R$ 10.5

        // 4. E se eu quisesse um cafe com DUAS porcoes de leite?
        let cafeDuploLeite: Coffee = new SimpleCoffee();
        cafeDuploLeite = new MilkDecorator(cafeDuploLeite);
        cafeDuploLeite = new MilkDecorator(cafeDuploLeite);
        console.log(`${cafeDuploLeite.getDescription()} -> R$ ${cafeDuploLeite.cost()}`);
        // Saida: Cafe simples, leite, leite -> R$ 9
    }
}

new Client().execute();