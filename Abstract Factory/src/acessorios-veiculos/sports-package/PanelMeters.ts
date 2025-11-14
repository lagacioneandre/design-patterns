import { Panel } from "../interfaces/panel.interface";

// concrete class
export class PanelMeters implements Panel {
    configuration(): string {
        return 'Control panel with meters.'
    }
}