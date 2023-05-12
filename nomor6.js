const printOutput = (param) => {
  const low = 2;
  const high = 15;
  const result = param.filter((num) => num >= low && num <= high);
  return result;
};
console.log(printOutput([1, 4, 7, 9, 12]));
