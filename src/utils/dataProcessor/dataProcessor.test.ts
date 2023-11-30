import { processData } from './dataProcessor';

describe('addTwoNumbers', () => {
  it('it should return sum of numbers in array', () => {
    const result: number = processData([20, 2, 5, 17]);
    expect(result).toEqual(44);
  });
});
