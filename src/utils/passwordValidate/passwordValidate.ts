export const passwordValidate = (inputPassword: string) => {
  const specialCharactersRegex = /^(?=.*[!@#$%^&*])(?=.*\d).+$/;
  if (inputPassword.length >= 8) {
    if (specialCharactersRegex.test(inputPassword)) {
      return true;
    }
  }
  return false;
};
