const reverse = (param) => {
  let result = "";
  for (let i = param.length - 1; i >= 0; i--) {
    result += param[i];
  }
  return result;
};
