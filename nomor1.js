const faktorial = (n) => {
  if (n === 0) {
    return 0;
  } else {
    let hasil = 1;
    for (let i = 1; i <= n; i++) {
      hasil *= i;
      console.log((hasil *= i));
    }
    return hasil;
  }
};

console.log(faktorial(4));
