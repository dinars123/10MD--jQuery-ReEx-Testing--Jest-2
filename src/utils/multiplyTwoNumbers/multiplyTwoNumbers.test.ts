import { multiplyTwoNumbers } from './multiplyTwoNumbers';

describe('multiplyTwoNumbers', () => {
  it('it should multiply two numbers', () => {
    const result: number = multiplyTwoNumbers(10, 10);
    expect(result).toEqual(100);
  });
});
