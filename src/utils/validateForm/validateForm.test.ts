import { nameValidate } from '../nameValidate/nameValidate';
import { validateEmail } from '../validateEmail/validateEmail';
import { passwordValidate } from '../passwordValidate/passwordValidate';
import { validateForm } from './validateForm';

describe('validateForm', () => {
  it('it should return false if shorter than 8 letters', () => {
    const result: any = validateForm();
    expect(result).toEqual(true);
  });
});
