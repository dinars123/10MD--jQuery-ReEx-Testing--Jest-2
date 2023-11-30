import { passwordValidate } from './passwordValidate';

describe('passwordValidate', () => {
  it('it should return false if shorter than 8 letters', () => {
    const result: boolean = passwordValidate('asfsaga');
    expect(result).toEqual(false);
  });
  it('it should return false if numbers has nod included', () => {
    const result: boolean = passwordValidate('asfsads@aga');
    expect(result).toEqual(false);
  });
  it('it should return false if special symbol has not included', () => {
    const result: boolean = passwordValidate('asfs53aga');
    expect(result).toEqual(false);
  });
  it('it should return true if it has atlease8 characters, atlease 1 special character and number', () => {
    const result: boolean = passwordValidate('a$sfs53aga');
    expect(result).toEqual(true);
  });
});
