function printDigitValue(str) {
  // Buat variabel untuk menyimpan angka sementara
  let tempNum = "";

  // Loop melalui setiap karakter dalam string
  for (let i = 0; i < str.length; i++) {
    // Jika karakter saat ini adalah angka, tambahkan ke variabel angka sementara
    if (!isNaN(parseInt(str[i]))) {
      tempNum += str[i];
    } else {
      // Jika karakter saat ini bukan angka, cetak angka sementara dan tambahkan nol sebanyak jumlah karakter yang tersisa
      console.log(tempNum.padEnd(str.length - i, "0"));
      tempNum = "";
    }
  }

  // Cetak angka sementara yang tersisa di akhir string
  console.log(tempNum.padEnd(1, "0"));
}
printDigitValue("9.86-A5.321");
