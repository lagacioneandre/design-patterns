
export type Attribute = 'strength' | 'agility' | 'bio';

export class AttributeDelta {
    constructor (
        readonly attribute: Attribute,
        // readonly delta: number | string,
        readonly prevValue: number | string,
    ) {}
}