import { CharacterSheet } from "./CharacterSheet";
import { UndoManager } from "./UndoManager";

class Client {
    execute() {
        const character = new CharacterSheet();
        const manager = new UndoManager(character);

        // character.setAttribute('strength', 12);
        // const save1 = character.save();
        // character.getDetails(); // Your strength is 12, your agility is 10 and your bio:.
        // manager.push(save1);
        // character.setAttribute('agility', 11);
        // const save2 = character.save();
        // character.getDetails(); // Your strength is 12, your agility is 11 and your bio:.
        // manager.push(save2);
        // character.setBio('A warrior');
        // const save3 = character.save();
        // character.getDetails(); // Your strength is 12, your agility is 11 and your bio: A warrior.
        // manager.push(save3);
        // manager.undo();
        // character.getDetails(); // Your strength is 12, your agility is 11 and your bio:.

        manager.saveState('strength'); // Save 10
        character.setAttribute('strength', 12);

        manager.saveState('bio'); // save ""
        character.setBio('A warrior');

        character.getDetails(); // STR: 12, AGI: 10, BIO: "A warrior"

        manager.undo(); // Restaura a Bio para ""
        character.getDetails(); // STR: 12, AGI: 10, BIO: ""

        manager.undo(); // Restaura a Força para 10
        character.getDetails(); // STR: 10, AGI: 10, BIO: ""
    }
}

(() => {
    new Client().execute();
})();