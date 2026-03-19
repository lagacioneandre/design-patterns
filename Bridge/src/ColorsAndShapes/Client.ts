import { BlueColor } from "./BlueColor";
import { Circle } from "./Circle";
import { GreenColor } from "./GreenColor";
import { RedColor } from "./RedColor";
import { Square } from "./Square";
import { Triangle } from "./Triangle";

class Client {
    execute() {
        // Criamos as implementacoes
        const red = new RedColor();
        const blue = new BlueColor();

        // criamos as abstracoes passando a implementacao desejada via "Ponte"
        const redCircle = new Circle(red, 10);
        const blueSquare = new Square(blue, 5);

        redCircle.draw(); // Saida: Desenhando um Circulo da raio 10 na cor Vermelho
        blueSquare.draw(); // Saida: Desenhando um quadrado de lado 5 na cor Azul

        // O poder do Bridge: Podemos trocar a cor de um objeto existente ou criar novas combinacoes facilmente
        const blueCircle = new Circle(blue, 20);
        blueCircle.draw(); // Saida: Desenhando um Circulo de raio 20 na cor Azul

        const green = new GreenColor();
        const greenSquare = new Square(green, 10);
        const greenTriangle = new Triangle(green, 5);
        const redTriangle = new Triangle(red, 10);

        greenSquare.draw();
        greenTriangle.draw();
        redTriangle.draw();
    }
}

(() => {
    new Client().execute();
})();