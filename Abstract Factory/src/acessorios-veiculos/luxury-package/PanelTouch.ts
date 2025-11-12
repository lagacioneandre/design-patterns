import { Panel } from "../interfaces/panel.interface";

// concrete class
export class PanelTouch implements Panel {
    configuration(): string {
        return 'Control panel touch screen.'
    }
}