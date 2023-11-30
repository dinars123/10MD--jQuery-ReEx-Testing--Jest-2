import { addTwoNumbers } from './addTwoNumbers';

describe('addTwoNumbers', () => {
  it('it should return sum of two numbers', () => {
    const result: number = addTwoNumbers(10, 10);
    expect(result).toEqual(20);
  });
});
