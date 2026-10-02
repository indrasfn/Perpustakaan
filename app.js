function prosesTambahBuku(formData) {
  // konversi ke number
  const jumlahHalaman = parseInt(formData.halaman, 10);
  const tahunTerbit = parseInt(formData.tahun, 10);
  const stokAwal = parseInt(formData.stok, 10);

  // validasi after konfersi
  if (isNaN(jumlahHalaman) || jumlahHalaman <= 0) {
    return {sukses: false, pesan: "Jumlah halaman tidak valid!"};
  }

  if (isNaN(tahunTerbit) || tahunTerbit <= 1945 || tahunTerbit > 2026) {
    return {sukses: false, pesan: "Tahun terbit tidak valid!"};
  }

  if (isNaN(stokAwal) || stokAwal < 0) {
    return {sukses: false, pesan: "Stok awal tidak boleh negatif!"};
  }

  const judul = formData.judul?.trim();
  const penulis = formData.penulis?.trim();

  if (!judul || judul.length === 0) {
    return {sukses: false, pesan: "Judul tidak boleh kosong!"};
  }

  return {
    sukses: true,
    buku: {judul, penulis, jumlahHalaman, tahunTerbit, stokAwal}
  };
}

// isi function
const dataBuku = prosesTambahBuku({
  judul: "Laskar Pelangi",
  penulis: "Andrea Hirata",
  halaman: "529",
  tahun: "2026",
  stok: "3"
});

console.log(dataBuku);