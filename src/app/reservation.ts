import { Unit } from './unit';

export class Reservation {
    id: number;
    unitsReserved: Array<Unit>;

    constructor(id: number, unitsReserved: Array<Unit>) {
        this.id = id;
        this.unitsReserved = unitsReserved;
    }
}
