import { LandType, TileMemento } from "./TileMemento";

export class GameMap {
    private grid: string[][] = [];

    constructor() {
        this.createEmptyGrid();
    }

    private createEmptyGrid() {
        for (let i = 0; i < 10; i++) {
            this.grid[i] = [];
            for (let j = 0; j < 10; j++) {
                this.grid[i][j] = 'G';
            }
        }
    }

    reset() {
        this.createEmptyGrid();
    }

    setTile(x: number, y: number, type: LandType) {
        this.grid[x][y] = type;
        console.log(`Tile in [${x}, ${y}] changed to ${type}`);
        return new TileMemento(x, y, type);
    }

    display() {
        console.table(this.grid);
    }
}