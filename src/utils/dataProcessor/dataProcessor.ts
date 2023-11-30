export const processData = (data: number[]): number => {
  const result = data.reduce((acc, num) => acc + num, 0);
  return result;
};
