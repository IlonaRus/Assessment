import { CentsToMonetaryUnitPipe } from './cents-to-monetary-unit.pipe';

describe('CentsToMonetaryUnitPipe', () => {
  it('create an instance', () => {
    const pipe = new CentsToMonetaryUnitPipe();
    expect(pipe).toBeTruthy();
  });
});
