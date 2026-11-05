const dataBerita = [
  {
    id: 1,
    judul: "Belajar DOM JavaScript",
    deskripsi:
      "Belajar cara mengakses dan memanipulasi elemen HTML menggunakan JavaScript",
    isi: "DOM (Document Object Model) merupakan salah satu materi penting dalam pembelajaran pemrograman web. Melalui materi ini, siswa mempelajari cara mengakses, mengubah, dan memanipulasi elemen HTML menggunakan JavaScript. Dengan memahami DOM, siswa dapat membuat halaman website yang lebih dinamis dan interaktif, seperti mengubah teks, warna, serta menambahkan elemen baru berdasarkan tindakan pengguna.",
  },
  {
    id: 2,
    judul: "Websites Interaktif",
    deskripsi: "Membuat website yang dapat berinteraksi dengan pengguna",
    isi: "Website interaktif merupakan website yang memungkinkan pengguna berinteraksi secara langsung dengan berbagai fitur yang tersedia. Dalam pembelajaran ini, siswa mempelajari penggunaan HTML, CSS, dan JavaScript untuk membuat tombol, formulir, menu navigasi, serta berbagai fitur lainnya. Dengan kemampuan tersebut, siswa diharapkan mampu mengembangkan website yang menarik, dinamis, dan mudah digunakan.",
  },
  {
    id: 3,
    judul: "Template HTML",
    deskripsi:
      "Template dapat digunakan kembali untuk menampilkan konten secara dinamis",
    isi: "Template HTML merupakan kerangka halaman website yang dapat digunakan kembali untuk berbagai kebutuhan. Penggunaan template dapat mempermudah proses pengembangan website karena pengembang tidak perlu membuat struktur halaman dari awal. Dalam pembelajaran ini, siswa mempelajari cara membuat dan menggunakan template HTML untuk menampilkan konten secara dinamis serta menjaga konsistensi tampilan website.",
  },
  {
    id: 4,
    judul: "Sekolah Gelar Kegiatan Literasi",
    deskripsi:
      "Siswa mengikuti kegiatan literasi untuk meningkatkan minat baca dan memperluas wawasan",
    isi: "Sekolah mengadakan kegiatan literasi sebagai salah satu upaya untuk meningkatkan minat baca dan memperluas wawasan siswa. Kegiatan ini diikuti oleh para siswa melalui berbagai aktivitas membaca dan memahami informasi dari bahan bacaan. Melalui kegiatan tersebut, siswa diharapkan dapat meningkatkan kemampuan berpikir kritis, menambah pengetahuan, serta membangun kebiasaan membaca dalam kehidupan sehari-hari.",
  },
  {
    id: 5,
    judul: "Siswa SMK Pesat Raih Prestasi",
    deskripsi:
      "Siswa SMK Pesat berhasil meraih juara dalam kompetisi teknologi tingkat nasional berkat inovasi dan kreativitasnya",
    isi: "Siswa SMK Pesat berhasil meraih prestasi dalam kompetisi teknologi tingkat nasional. Pencapaian tersebut merupakan hasil dari kerja keras, kreativitas, dan kemampuan siswa dalam mengembangkan inovasi di bidang teknologi. Keberhasilan ini diharapkan dapat menjadi motivasi bagi siswa lainnya untuk terus belajar, mengembangkan keterampilan, dan berani mengikuti berbagai kompetisi.",
  },
  {
    id: 6,
    judul: "Pameran Karya Kreatif Siswa",
    deskripsi:
      "Sekolah mengadakan pameran karya kreatif siswa yang menampilkan berbagai hasil desain, seni, dan inovasi",
    isi: "Sekolah mengadakan pameran karya kreatif siswa yang menampilkan berbagai hasil karya di bidang desain, seni, dan teknologi. Kegiatan ini menjadi kesempatan bagi siswa untuk menunjukkan kemampuan serta kreativitas yang telah dikembangkan selama proses pembelajaran. Selain menjadi ajang apresiasi, pameran ini juga diharapkan dapat meningkatkan rasa percaya diri dan mendorong siswa untuk terus menghasilkan karya yang bermanfaat.",
  },
];

const dataArtikelWellora = [
  {
    kategori: "Nutrisi",
    waktuBaca: "5 menit baca",
    judul: "5 Langkah Memulai Pola Makan Sehat Tanpa Diet Menyiksa",
    ringkasan:
      "Pelajari cara menyeimbangkan porsi karbohidrat, protein, dan serat harian secara bertahap tanpa perlu rasa lapar berlebihan.",
    gambar: "assets/Sayur.jpeg",
    alt: "Makanan sehat",
    tautan: "artikel1.html",
  },
  {
    kategori: "Kebugaran",
    waktuBaca: "5 menit baca",
    judul: "Berapa Banyak Langkah Kaki yang Sebenarnya Dibutuhkan Tubuh?",
    ringkasan:
      "Mulailah dari kebiasaan berjalan yang terasa nyaman, lalu sesuaikan secara bertahap dengan kondisi dan rutinitas Anda.",
    gambar: "assets/Naik Tangga.jpeg",
    alt: "Seseorang berjalan menaiki tangga",
    tautan: "artikel2.html",
  },
  {
    kategori: "Pola Tidur",
    waktuBaca: "5 menit baca",
    judul: "Rahasia Tidur Nyenyak Demi Produktivitas Maksimal",
    ringkasan:
      "Kenali pola istirahat Anda dan bangun rutinitas tidur dengan perubahan kecil yang terasa nyaman.",
    gambar: "assets/Tidur.jpeg",
    alt: "Kamar tidur untuk beristirahat",
    tautan: "artikel3.html",
  },
];

const artikelGrid = document.querySelector(".artikel-grid");


// mengambil elemen template dari HTML
const template = document.getElementById("template");
const daftarkartu = document.getElementById("daftar-kartu");

// memastikan elemen ada
if (daftarkartu && template) {

dataBerita.forEach(({ id, judul, deskripsi }) => {
  //membuat salinan template html yang akan yang akan diisi dengan data berita
  const templateClone = template.content.cloneNode(true);

  //mengambil element artikel dari salinan template dan mengisi datanya
  const kartu = templateClone.querySelector(".kartu");
  kartu.href = `detail-berita.html?id=${id}&jenis=berita`;

  // mengisi data
  kartu.querySelector(".judul").textContent = judul;
  kartu.querySelector(".deskripsi").textContent = deskripsi;

  //menambahkan kartu kedalam daftar kartu
  daftarkartu.appendChild(kartu);
});
}
const detailBerita = document.getElementById("detail-berita");

// memastikan elemen detail berita tersedia 
if(detailBerita) {
  // mengambil parameter dari url
  const parameter = new URLSearchParams(window.location.search)


  // mengamnbil id dari parameter
  const idBerita = parseInt(parameter.get("id"));


  //mencari berita berdasarkan id
  const berita = dataBerita.find((item) => item.id === idBerita);


  //memastikan berita ditemukan
  if (berita){

    //mengambil elemen html
    const judulBerita = document.getElementById("judul-berita")
    const deskripsiBerita = document.getElementById("deskripsi-berita")
    const isiBerita = document.getElementById("isi-berita")

    //mengisi data setiap elemen
    judulBerita.textContent = berita.judul
    deskripsiBerita.textContent = berita.deskripsi
    isiBerita.textContent = berita.isi

    document.title = `${berita.judul} - Wellora`
    detailBerita.hidden = false;
  }
}
