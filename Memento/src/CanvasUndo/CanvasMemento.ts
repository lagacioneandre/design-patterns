export class CanvasMemento {
    private readonly shapes: string[] = [];
    private readonly backgroundColor: string;

    constructor(shapes: string[], backgroundColor: string) {
        this.shapes = shapes;
        this.backgroundColor = backgroundColor;
    }

    getShapes() {
        return this.shapes;
    }

    getBackgroundColor() {
        return this.backgroundColor;
    }
}