function checkTahunKabisat(y) {
  if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) {
    return y + " adalah tahun kabisat";
  } else {
    return y + " bukan tahun kabisat";
  }
}
