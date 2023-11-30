export const validateEmail = (inputEmail: string) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailRegex.test(inputEmail)) {
    return true;
  }
  return false;
};
