import { Reservation } from './reservation';
import { Unit } from './unit';

describe('Reservation', () => {
  it('should create an instance', () => {
    expect(new Reservation(1, [] as Unit[])).toBeTruthy();
  });
});
