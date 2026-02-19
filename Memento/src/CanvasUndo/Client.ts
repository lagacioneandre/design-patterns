import { Canvas } from "./Canvas";
import { CanvasHistory } from "./CanvasHistory";

class Client {
    execute() {
        const canvas = new Canvas();
        const canvasHistory = new CanvasHistory(canvas);

        canvas.addShape('circle');
        canvas.setBackgroundColor('red');
        canvasHistory.push(); // Save new state adding new circle shape and red as new color

        canvas.addShape('triangle');
        canvas.setBackgroundColor('blue');
        canvasHistory.push(); // Save new states

        canvas.addShape('star');
        canvasHistory.push(); // And the last state

        canvasHistory.undo(); // Should have cicle and triangle as shapes and red and blue as colors
        canvasHistory.undo(); // Should have cicle as shape and red as color
    }
}

(() => {
    new Client().execute();
})();