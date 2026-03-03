import { Attribute, AttributeDelta } from "./AttributeDelta";
import { CharacterSheet } from "./CharacterSheet";

export class UndoManager {
    private history: AttributeDelta[] = [];
    private characteSheet: CharacterSheet;

    constructor(characteSheet: CharacterSheet) {
        this.characteSheet = characteSheet;
    }

    // push(memento: AttributeDelta) {
    //     this.history.push(memento);
    // }

    saveState(type: Attribute) {
        this.history.push(this.characteSheet.createMemento(type));
    }

    undo() {
        // if (!this.history.length) {
        //     console.log('Nothing to undo!');
        //     return;
        // }

        // const memento = this.history.pop();
        // if (memento) {
        //     const { attribute, delta, bio } = memento;
        //     this.characteSheet.undo(attribute, delta, bio);
        //     this.characteSheet.save();
        // }

        const memento = this.history.pop();
        if (memento) {
            this.characteSheet.restore(memento);
        } else {
            console.log('Nothing to undo!');
        }
    }
}