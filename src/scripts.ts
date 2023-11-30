import { addTwoNumbers } from './utils/addTwoNumbers/addTwoNumbers';
import { multiplyTwoNumbers } from './utils/multiplyTwoNumbers/multiplyTwoNumbers';
import { processData } from './utils/dataProcessor/dataProcessor';
import { nameValidate } from './utils/nameValidate/nameValidate';
import { validateEmail } from './utils/validateEmail/validateEmail';
import { passwordValidate } from './utils/passwordValidate/passwordValidate';

const result = addTwoNumbers(2, 3);
console.log(result);

const multi = multiplyTwoNumbers(10, 10);
console.log(multi);

const process = processData([2, 4, 8, 28, 1]);
console.log(process);

export const validateForm = () => {
  const form = document.querySelector('.form');

  const name: HTMLInputElement = document.querySelector('.input--name');
  const email: HTMLInputElement = document.querySelector('.input--email');
  const password: HTMLInputElement = document.querySelector('.input--password');

  const nameError = document.querySelector('.name-error');
  const emailError = document.querySelector('.email-error');
  const passwordError = document.querySelector('.password-error');

  form.addEventListener('submit', (e) => {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    const nameMesaages = [];
    const emailMessages = [];
    const passwordMessages = [];
    if (!nameValidate(nameValue)) {
      nameMesaages.push(`
      <ul>
      <li>At least 2 letters</li>
      <li>Maximum 50 letters</li>
      <li>Contains only letters</li>
    </ul>
      `);
    }
    if (!validateEmail(emailValue)) {
      emailMessages.push('Invalid email');
    }
    if (!passwordValidate(passwordValue)) {
      passwordMessages.push(`
      <ul>
      <li>At least 8 characters</li>
      <li>Contain at least 1 number</li>
      <li>Contain at least 1 Special character (!, @, #, $, %, ^, &, *)</li>
    </ul>
      `);
    }
    if (nameMesaages.length > 0 || emailMessages.length > 0 || passwordMessages.length > 0) {
      e.preventDefault();
      nameError.innerHTML = nameMesaages.join(', ');
      emailError.innerHTML = emailMessages.join(', ');
      passwordError.innerHTML = passwordMessages.join(', ');
    } else {
      alert('signup successfull');
    }
  });
};

validateForm();
