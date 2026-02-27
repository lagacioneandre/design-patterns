export type LandType = 'G' | 'W' | 'M';

export class TileMemento {
    constructor(
        readonly x: number,
        readonly y: number,
        readonly type: LandType
    ) {}
}