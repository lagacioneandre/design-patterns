import { Box } from "./Box";
import { Prodcut } from "./Product";

class Client {
    execute() {
        const iphone = new Prodcut('iPhone', 5000, 0.5);
        const capaCelular = new Prodcut('Capa de celular', 100, 0.1);
        const carregador = new Prodcut('Carregador', 200, 0.1);
        const comboSmartPhone = new Box();
        comboSmartPhone.add(iphone);
        comboSmartPhone.add(capaCelular);
        comboSmartPhone.add(carregador);
        const notebook = new Prodcut('Notebook', 8000, 2);
        const carrinho = new Box();
        carrinho.add(comboSmartPhone);
        carrinho.add(notebook);
        console.log(`O preco do combo smartphone e R$${comboSmartPhone.getPrice()} e o seu peso e ${comboSmartPhone.getWeight()}`);
        console.log(`O preco total do carrinho e de R$${carrinho.getPrice()} e o peso total e de ${carrinho.getWeight()}`);
    }
}

(() => {
    new Client().execute();
})();