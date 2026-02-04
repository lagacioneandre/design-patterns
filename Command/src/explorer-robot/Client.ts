import { MoveToEast } from "./MoveToEast";
import { MoveToNorth } from "./MoveToNorth";
import { MoveToSouth } from "./MoveToSouth";
import { MoveToWest } from "./MoveToWest";
import { Robot } from "./Robot";
import { RobotControl } from "./RobotControl";

export class Client {
    execute() {
        const robot = new Robot();
        const robotControl = new RobotControl();

        robotControl.go(new MoveToNorth(robot)); // x: 0 y: 1
        robotControl.go(new MoveToNorth(robot)); // x: 0 y: 2
        robotControl.go(new MoveToSouth(robot)); // x: 0 y: 1
        robotControl.go(new MoveToEast(robot)); // x: 1 y: 1
        robotControl.go(new MoveToEast(robot)); // x: 2 y: 1
        robotControl.go(new MoveToWest(robot)); // x: 1 y: 1
        robotControl.back(); // x: 2 y: 1
        robotControl.back(); // x: 1 y: 1
    }
}

(function() {
    new Client().execute();
})();