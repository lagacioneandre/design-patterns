import { Attribute, AttributeDelta } from "./AttributeDelta";

type Delta = {
    attribute: Attribute;
    value: number;
}

export class CharacterSheet {
    // private strength = 10;
    // private agility = 10;
    // private bio = '';
    // private delta: Delta = {
    //     attribute: 'agility',
    //     value: 0,
    // };

    // setAttribute(attribute: Attribute, value: number) {
    //     console.log(`Ability ${attribute} changed to ${value}.`);
    //     this.delta.attribute = attribute;
    //     if (attribute === 'agility') {
    //         this.delta.value = value - this.agility;
    //         this.agility = value;
    //     }
    //     else {
    //         this.delta.value = value - this.strength;
    //         this.strength = value;
    //     }
    // }

    // setBio(bio: string) {
    //     if (!bio.length) return;
    //     console.log(`Bio changed to ${bio}.`);
    //     this.bio = bio;
    // }

    // save() {
    //     console.log('Saving changes...');
    //     const { attribute, value } = this.delta;
    //     return new AttributeDelta(attribute, value, this.bio);
    // }

    // undo(attribute: Attribute, value: number, bio: string) {
    //     let newValue = 0;
    //     if (attribute === 'agility') newValue = this.agility + (value);
    //     else newValue = this.strength + (value);
    //     this.setAttribute(attribute, newValue);
    //     this.setBio(bio);
    // }

    // getDetails() {
    //     console.log(`Your strength is ${this.strength}, your agility is ${this.agility} and your bio: ${this.bio}.`);
    // }

    private strength = 10;
    private agility = 10;
    private bio = '';

    createMemento(type: Attribute) {
        if (type === 'bio') return new AttributeDelta('bio', this.bio);
        return new AttributeDelta(type, type === 'agility' ? this.agility : this.strength);
    }

    restore(memento: AttributeDelta) {
        console.log(`Restoring ${memento.attribute}...`);
        if (memento.attribute === 'bio') this.bio = memento.prevValue as string;
        else if (memento.attribute === 'agility') this.agility = memento.prevValue as number;
        else this.strength = memento.prevValue as number;
    }

    setAttribute(attr: Attribute, value: number) {
        if (attr === 'agility') this.agility = value;
        else this.strength = value;
    }

    setBio(bio: string) {
        this.bio = bio;
    }

    getDetails() {
        console.log(`STR: ${this.strength}, AGI: ${this.agility}, BIO: "${this.bio}"`);
    }
}