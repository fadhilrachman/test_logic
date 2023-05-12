const konversiBilangan = (n) => {
  let bilangan = [
    "",
    "satu",
    "dua",
    "tiga",
    "empat",
    "lima",
    "enam",
    "tujuh",
    "delapan",
    "sembilan",
    "sepuluh",
    "sebelas",
  ];
  if (n >= 1 && n <= 11) {
    return bilangan[n];
  } else if (n >= 12 && n <= 19) {
    return bilangan[n % 10] + " belas";
  } else if (n >= 20 && n <= 99) {
    return bilangan[Math.floor(n / 10)] + " puluh " + bilangan[n % 10];
  } else if (n == 100) {
    return "seratus";
  } else if (n > 100) {
    return "silahkan masukkan bilangan 1-100";
  }
};
