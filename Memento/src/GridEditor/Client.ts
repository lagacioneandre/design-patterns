import { GameMap } from "./GameMap";
import { MapHistory } from "./MapHistory";

class Client {
    execute() {
        const myMap = new GameMap();
        const history = new MapHistory(myMap);

        history.push(myMap.setTile(1, 1, 'W'));
        history.push(myMap.setTile(5, 5, 'M'));
        history.push(myMap.setTile(0, 0, 'W'));
        history.undo();
    }
}

(() => {
    new Client().execute();
})();