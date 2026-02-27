import { GameMap } from "./GameMap";
import { TileMemento } from "./TileMemento";

export class MapHistory {
    private history: TileMemento[] = [];
    private gameMap: GameMap;

    constructor(gameMap: GameMap) {
        this.gameMap = gameMap;
    }

    push(memento: TileMemento) {
        this.history.push(memento);
    }

    undo() {
        if (!this.history.length) {
            console.log('Nothing to undo!');
            return;
        }

        this.history.pop();
        console.log('Removing the last alteration...');
        this.gameMap.reset();
        for (const memento of this.history) {
            const { x, y, type } = memento;
            this.gameMap.setTile(x, y, type);
        }
    }
}