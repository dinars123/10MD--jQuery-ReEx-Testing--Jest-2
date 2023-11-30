import { validateEmail } from './validateEmail';

describe('validateEmail', () => {
  it('it should return false if there is not ...@...something', () => {
    const result: boolean = validateEmail('afas@afasf');
    expect(result).toEqual(false);
  });
  it('it should return false if there is not dot before domain part ', () => {
    const result: boolean = validateEmail('some@gmailcom');
    expect(result).toEqual(false);
  });
  it('it should return true if there is all parts : something@something.com', () => {
    const result: boolean = validateEmail('something@something.com');
    expect(result).toEqual(true);
  });
});
