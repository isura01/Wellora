const formBmi = document.getElementById("form-bmi");

if (formBmi) {
  const inputTinggi = document.getElementById("tinggi-badan");
  const inputBerat = document.getElementById("berat-badan");
  const hasilBmi = document.getElementById("hasil-bmi");
  const skorBmi = document.getElementById("skor-bmi");
  const kategoriBmi = document.getElementById("kategori-bmi");
  const saranBmi = document.getElementById("saran-bmi");
  const segmenBmi = document.querySelectorAll(".bmi-scale-segmen");

  const kategori = [
    {
      kunci: "kurus",
      label: "Kurus",
      saran: "Tingkatkan asupan makanan bergizi dan konsultasikan dengan ahli gizi bila perlu.",
    },
    {
      kunci: "normal",
      label: "Normal",
      saran: "Berat badan Anda sudah ideal. Pertahankan pola makan sehat dan rutin bergerak.",
    },
    {
      kunci: "berlebih",
      label: "Berat Badan Berlebih",
      saran: "Coba tingkatkan aktivitas fisik dan perhatikan porsi makan secara bertahap.",
    },
    {
      kunci: "obesitas",
      label: "Obesitas",
      saran: "Sebaiknya konsultasikan dengan tenaga medis untuk mendapatkan pendampingan yang sesuai.",
    },
  ];

  const bacaAngka = (input) => {
    const nilai = String(input.value).trim().replace(",", ".");
    return nilai === "" ? NaN : Number(nilai);
  };

  formBmi.addEventListener("submit", (event) => {
    event.preventDefault();

    const tinggiCm = bacaAngka(inputTinggi);
    const beratKg = bacaAngka(inputBerat);

    const tidakValid =
      !Number.isFinite(tinggiCm) ||
      !Number.isFinite(beratKg) ||
      tinggiCm < 50 ||
      tinggiCm > 250 ||
      beratKg < 10 ||
      beratKg > 300;

    if (tidakValid) {
      hasilBmi.dataset.kategori = "invalid";
      skorBmi.textContent = "--";
      kategoriBmi.textContent = "Data belum valid";
      saranBmi.textContent =
        "Masukkan tinggi badan 50–250 cm dan berat badan 10–300 kg.";

      segmenBmi.forEach((segmen) => segmen.classList.remove("aktif"));
      return;
    }

    const tinggiMeter = tinggiCm / 100;
    const nilaiBmi = beratKg / (tinggiMeter * tinggiMeter);
    const skor = nilaiBmi.toFixed(1);

    let hasil;

    if (nilaiBmi < 18.5) {
      hasil = kategori[0];
    } else if (nilaiBmi < 25) {
      hasil = kategori[1];
    } else if (nilaiBmi < 30) {
      hasil = kategori[2];
    } else {
      hasil = kategori[3];
    }

    hasilBmi.dataset.kategori = hasil.kunci;
    skorBmi.textContent = skor;
    kategoriBmi.textContent = hasil.label;
    saranBmi.textContent = hasil.saran;

    segmenBmi.forEach((segmen) => {
      segmen.classList.toggle("aktif", segmen.dataset.kategori === hasil.kunci);
    });
  });
}
