import { CanvasMemento } from "./CanvasMemento";

export class Canvas {
    private shapes: string[] = [];
    private backgroundColor!: string;

    addShape(shape: string) {
        console.log(`${shape} added!`);
        this.shapes.push(shape);
    }

    setBackgroundColor(color: string) {
        console.log(`${color} defined as background color!`);
        this.backgroundColor = color;
    }

    save() {
        console.log('Saving...', JSON.stringify(this.shapes));
        return new CanvasMemento([...this.shapes], this.backgroundColor);
    }

    restore(memento: CanvasMemento) {
        console.log('Restoring...');
        const mementoShapes = memento.getShapes();
        console.log(mementoShapes)
        this.shapes = new Array(...mementoShapes);
        console.log('Actual state: ', JSON.stringify(this.shapes));
    }
}