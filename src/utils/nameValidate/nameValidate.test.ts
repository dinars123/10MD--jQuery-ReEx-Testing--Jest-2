import { nameValidate } from './nameValidate';

describe('nameValidate', () => {
  it('it should return false if name is shorter than 1 letter', () => {
    const result: boolean = nameValidate('a');
    expect(result).toEqual(false);
  });
  it('it should return false if name is longer than 50 letters', () => {
    const result: boolean = nameValidate('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaas');
    expect(result).toEqual(false);
  });
  it('it should include only letters', () => {
    const result: boolean = nameValidate('12mynameis');
    expect(result).toEqual(false);
  });
  it('it should return true if its between 8 and 50 letters long', () => {
    const result: boolean = nameValidate('aaaabbbb');
    expect(result).toEqual(true);
  });
});
