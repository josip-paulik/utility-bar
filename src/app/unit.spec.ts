import { Unit } from './unit';

describe('Unit', () => {
  it('should create an instance', () => {
    expect(new Unit(1, 'Test', 45)).toBeTruthy();
  });
});
