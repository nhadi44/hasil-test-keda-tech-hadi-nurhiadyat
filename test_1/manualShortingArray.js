function manualShortingArray(number) {
  // membuat salinan array menghindari perubahan bentuk dari array asli
  const sortedArray = number.slice();

  for (let i = 0; i < sortedArray.length; i++) {
    // perulangan untuk membandingkan setiap elemen array dengan elemen berikutnya
    for (let j = 0; j < sortedArray.length; j++) {
      // urutkan elemen array dari nilai terbesar ke terkecil
      if (sortedArray[j] < sortedArray[j + 1]) {
        // simpan elemen array ke variabel temp agar tidak hilang saat proses pertukaran nilai
        const temp = sortedArray[j];

        // pindahkan elemen yang lebih besar ke sebelah kiri
        sortedArray[j] = sortedArray[j + 1];

        // pindahkan elemen yang lebih kecil ke sebelah kanan
        sortedArray[j + 1] = temp;
      }
    }
  }
  return sortedArray;
}

module.exports = manualShortingArray;
