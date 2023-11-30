export const nameValidate = (inputName: string): boolean => {
  const lettersRegex = /^[a-zA-Z]+$/;
  if (inputName.length >= 2 && inputName.length <= 50) {
    if (lettersRegex.test(inputName)) {
      return true;
    }
  }

  return false;
};
