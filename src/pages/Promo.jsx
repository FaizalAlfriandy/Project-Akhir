import React, { useState } from "react";

// Gambar benefit dari /public/bersih.jpg, tampil besar dan responsif, aspect ratio tetap
const BENEFIT_IMG = (
  <img
    src="/bersih.jpg"
    alt="Benefit Cleaning Bershine"
    className="block w-full max-w-[520px] rounded-3xl shadow-2xl object-cover aspect-[4/3] md:max-h-[420px] h-auto border-4 border-white"
    style={{ background: "#e0f2fe" }}
  />
);

// SVG cleaning banner (flat, cartoon style)
const SVG_BANNER = (
  <svg viewBox="0 0 250 120" className="w-64 h-36 mx-auto" fill="none">
    <ellipse cx="125" cy="110" rx="100" ry="10" fill="#e0f2fe" />
    <rect x="110" y="30" width="30" height="60" rx="8" fill="#0ea5e9" />
    <rect x="120" y="10" width="10" height="30" rx="5" fill="#38bdf8" />
    <rect x="115" y="85" width="20" height="12" rx="6" fill="#bae6fd" />
    <circle cx="125" cy="22" r="8" fill="#7dd3fc" />
    <rect x="90" y="60" width="20" height="15" rx="6" fill="#60a5fa" />
    <rect x="140" y="60" width="20" height="15" rx="6" fill="#60a5fa" />
    <rect x="95" y="75" width="18" height="8" rx="4" fill="#bae6fd" />
    <rect x="137" y="75" width="18" height="8" rx="4" fill="#bae6fd" />
    <rect x="123" y="5" width="4" height="22" rx="2" fill="#0284c7"/>
  </svg>
);

const SVG_CTA = (
  <svg viewBox="0 0 90 90" className="w-20 h-20 mb-4 mx-auto" fill="none">
    <ellipse cx="45" cy="83" rx="32" ry="6" fill="#e0f2fe" />
    <rect x="42" y="10" width="6" height="50" rx="3" fill="#38bdf8" />
    <rect x="31" y="57" width="28" height="14" rx="7" fill="#7dd3fc" />
    <ellipse cx="45" cy="71" rx="13" ry="5" fill="#bae6fd" />
    <circle cx="30" cy="60" r="2" fill="#e0f2fe"/>
    <circle cx="60" cy="65" r="1.5" fill="#bae6fd"/>
    <circle cx="37" cy="50" r="1" fill="#7dd3fc"/>
  </svg>
);

const benefitFeatures = [
  {
    icon: (
      <svg className="w-11 h-11 text-sky-400" fill="none" stroke="currentColor" strokeWidth={2.3} viewBox="0 0 24 24">
        <path d="M12 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm0 2c-2.7 0-8 1.3-8 4v2c0 0.6 0.4 1 1 1h14c0.6 0 1-0.4 1-1v-2c0-2.7-5.3-4-8-4z"/>
      </svg>
    ),
    label: "Tim Profesional",
    desc: "Petugas sudah terlatih, bersertifikat, dan ramah. Siap menjaga privasi serta kebersihan rumah/kantor Anda."
  },
  {
    icon: (
      <svg className="w-11 h-11 text-sky-400" fill="none" stroke="currentColor" strokeWidth={2.3} viewBox="0 0 24 24">
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M16 10h.01" />
      </svg>
    ),
    label: "Alat Modern",
    desc: "Dukungan alat cleaning terbaru & vakum HEPA, hasil lebih bersih, proses cepat, minim suara bising."
  },
  {
    icon: (
      <svg className="w-11 h-11 text-sky-400" fill="none" stroke="currentColor" strokeWidth={2.3} viewBox="0 0 24 24">
        <rect x="8" y="8" width="8" height="8" rx="4" />
        <rect x="4" y="16" width="16" height="4" rx="2" />
      </svg>
    ),
    label: "Chemical Aman",
    desc: "Cairan pembersih ramah lingkungan, tanpa bau menyengat, aman bagi anak & hewan peliharaan."
  },
  {
    icon: (
      <svg className="w-11 h-11 text-sky-400" fill="none" stroke="currentColor" strokeWidth={2.3} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4" />
        <circle cx="12" cy="16" r="1" />
      </svg>
    ),
    label: "CS Fast Response",
    desc: "Admin & Customer Service selalu online. Booking, komplain, dan konsultasi lebih mudah via chat."
  }
];

const promoData = [
  {
    title: "Diskon 25% Semua Layanan",
    subtitle: "Bersih Hemat di Awal Bulan!",
    description:
      "Dapatkan diskon 25% untuk semua jenis layanan cleaning (rumah, kantor, karpet, jendela, pasca konstruksi). Berlaku tanpa minimum order.",
    code: "BERSIH25",
    image: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 64 64">
        <ellipse cx="32" cy="54" rx="22" ry="7" fill="#d0f1fa"/>
        <rect x="30" y="10" width="4" height="32" rx="2" fill="#60a5fa"/>
        <rect x="28" y="40" width="8" height="8" rx="2" fill="#93c5fd"/>
        <rect x="23" y="47" width="18" height="8" rx="4" fill="#38bdf8"/>
        <rect x="18" y="51" width="28" height="6" rx="3" fill="#7dd3fc"/>
      </svg>
    ),
    badge: "Spesial Bulan Ini",
    valid: "s/d 15 Juni 2025",
  },
  {
    title: "Bundling Keluarga Hemat",
    subtitle: "Pesan 3x, GRATIS 1x",
    description:
      "Booking layanan cleaning 3 kali (boleh beda tanggal), dapat 1x sesi gratis untuk rumah/kantor yang sama. Cocok untuk keluarga & jadwal rutin.",
    code: "BUNDEL4",
    image: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 64 64">
        <ellipse cx="32" cy="56" rx="24" ry="6" fill="#d0f1fa"/>
        <circle cx="19" cy="31" r="7" fill="#60a5fa"/>
        <circle cx="45" cy="31" r="7" fill="#38bdf8"/>
        <circle cx="32" cy="26" r="8" fill="#7dd3fc"/>
        <rect x="10" y="39" width="12" height="13" rx="6" fill="#60a5fa"/>
        <rect x="42" y="39" width="12" height="13" rx="6" fill="#38bdf8"/>
        <rect x="24" y="34" width="16" height="18" rx="8" fill="#0ea5e9"/>
        <rect x="26" y="45" width="12" height="8" rx="4" fill="#bae6fd"/>
      </svg>
    ),
    badge: "Hot Deal",
    valid: "Untuk 50 customer pertama"
  },
  {
    title: "First Order Bonus Disinfektan",
    subtitle: "Pelanggan Baru = Bebas Kuman!",
    description:
      "Khusus order pertama, dapatkan layanan semprot disinfektan GRATIS tanpa biaya tambahan. Rumah makin bersih & sehat.",
    code: "AUTOMATIC",
    image: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 64 64">
        <ellipse cx="32" cy="56" rx="24" ry="6" fill="#d0f1fa"/>
        <rect x="24" y="16" width="16" height="32" rx="7" fill="#0ea5e9"/>
        <rect x="28" y="11" width="8" height="8" rx="4" fill="#38bdf8"/>
        <rect x="30" y="6" width="4" height="7" rx="2" fill="#60a5fa"/>
        <rect x="26" y="44" width="12" height="6" rx="3" fill="#7dd3fc"/>
        <rect x="38" y="26" width="8" height="4" rx="2" fill="#bae6fd"/>
        <rect x="18" y="26" width="8" height="4" rx="2" fill="#bae6fd"/>
      </svg>
    ),
    badge: "Welcome Gift",
    valid: "Otomatis order pertama"
  }
];

const testimonials = [
  {
    name: "Ayu Pratiwi",
    review:
      "Promo BERSIH25 beneran bikin hemat! Rumahku jadi kinclong, petugasnya ramah dan ontime. Mantap banget, recommended!",
    rating: 5,
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Budi Santoso",
    review:
      "Suka banget sama bonus disinfektan. Proses booking mudah, hasil bersih maksimal, harga promo bikin nagih, pokoknya puas.",
    rating: 5,
    img: "https://randomuser.me/api/portraits/men/48.jpg",
  },
  {
    name: "Linda Wijaya",
    review:
      "Bundling keluarga sangat membantu, apalagi buat yang sering butuh cleaning rutin. Terima kasih Bershine!",
    rating: 5,
    img: "https://randomuser.me/api/portraits/women/47.jpg",
  },
];

const StarIcon = ({ filled }) => (
  <svg
    className={`w-5 h-5 ${filled ? "text-yellow-400" : "text-gray-300"}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M10 2l2.09 5.85H18l-4.51 3.65L15.18 18 10 14.48 4.82 18l1.69-6.5L2 7.85h5.91L10 2z" />
  </svg>
);

export default function Promo() {
  const [notif, setNotif] = useState("");

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setNotif("Kode promo berhasil disalin!");
    setTimeout(() => setNotif(""), 1800);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#e3f3fa] via-[#fafdff] to-[#cbeafe] py-10 md:py-16 px-2 flex flex-col items-center relative">
      {/* Notifikasi */}
      {notif && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-gradient-to-r from-sky-400 to-blue-500 text-white px-6 py-3 rounded-2xl shadow-lg font-bold animate-bounce text-lg">
          <svg className="w-6 h-6 inline mr-2 -mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
          {notif}
        </div>
      )}

      {/* HEADLINE */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-sky-700 drop-shadow mb-2 tracking-tight">
          Promo Cleaning Service
          <br />
          Bershine
        </h1>
        <p className="text-lg md:text-xl text-sky-700/90 mb-5 font-medium">
          <span className="font-bold text-sky-500">Bersih Lebih Mudah & Hemat</span> dengan promo spesial dari Bershine!
        </p>
        <div className="flex justify-center">{SVG_BANNER}</div>
      </div>

      {/* CARD PROMO */}
      <div className="w-full max-w-6xl grid gap-10 md:grid-cols-3 mb-16">
        {promoData.map((promo, idx) => (
          <div
            key={idx}
            className="group relative bg-white/90 border border-sky-100 shadow-xl rounded-3xl flex flex-col items-center
            hover:scale-[1.04] hover:shadow-blue-200 hover:border-sky-300 transition-all duration-300 overflow-hidden"
          >
            <span className="absolute top-5 right-5 z-10 bg-gradient-to-tr from-sky-400 to-blue-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow tracking-wide">
              {promo.badge}
            </span>
            <div className="w-full flex justify-center mt-7 mb-3">
              <div className="rounded-2xl bg-sky-100/60 border border-sky-200 shadow w-24 h-24 flex items-center justify-center overflow-hidden">
                {promo.image}
              </div>
            </div>
            <div className="px-5 flex-1 w-full flex flex-col justify-between text-center">
              <h2 className="text-2xl font-extrabold text-sky-700 mb-1">
                {promo.title}
              </h2>
              <div className="text-base font-semibold text-blue-400 mb-2">
                {promo.subtitle}
              </div>
              <p className="text-[#22577a] mb-6">{promo.description}</p>
            </div>
            <div className="mb-5 flex flex-col items-center w-full">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-xl font-bold text-lg border border-blue-100 shadow">
                  {promo.code}
                </span>
                <button
                  className="bg-gradient-to-tr from-sky-400 to-blue-500 hover:from-blue-500 hover:to-sky-400 text-white font-bold px-4 py-2 rounded-lg shadow transition text-sm"
                  onClick={() => handleCopy(promo.code)}
                >
                  Copy Code
                </button>
              </div>
              <span className="block text-xs text-blue-500 font-semibold">
                {promo.valid}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* BENEFIT SECTION */}
      <div className="w-full max-w-6xl mx-auto mb-16">
        <div className="rounded-3xl bg-gradient-to-br from-[#e5f6fd] via-white to-[#e2f0ff] shadow-2xl border border-sky-100 px-10 py-14 flex flex-col md:flex-row md:items-center gap-12">
          <div className="flex-1 min-w-[300px]">
            <h3 className="text-3xl md:text-4xl font-extrabold text-sky-700 mb-5 tracking-tight drop-shadow">
              Kenapa Pilih <span className="text-sky-500">Bershine?</span>
            </h3>
            <p className="text-[#22577a] mb-10 text-lg max-w-lg leading-relaxed">
              Bershine adalah solusi cleaning service terpercaya yang mengutamakan kualitas, keamanan, dan kenyamanan pelanggan.
              Kami hadir dengan tim profesional, alat modern, chemical yang teruji, serta layanan cepat & CS responsif.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefitFeatures.map((f, i) => (
                <div key={i} className="flex flex-col items-center text-center bg-white/95 border border-sky-50 hover:border-sky-300 hover:shadow-lg rounded-2xl py-5 px-4 transition-all duration-200 shadow group">
                  <span className="mb-2">{f.icon}</span>
                  <span className="text-lg font-bold text-sky-700 mb-1">{f.label}</span>
                  <span className="text-xs text-blue-800/80">{f.desc}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center relative min-w-[320px]">
            <div className="absolute -top-8 left-2 w-16 h-16 bg-blue-100 rounded-full blur-2xl opacity-40 z-0"/>
            <div className="absolute -bottom-4 right-2 w-24 h-12 bg-cyan-100 rounded-full blur-2xl opacity-40 z-0"/>
            <div className="relative z-10 flex justify-center items-center w-full h-full">
              {BENEFIT_IMG}
            </div>
          </div>
        </div>
      </div>

      {/* TESTIMONI SECTION */}
      <div className="w-full max-w-6xl mx-auto mb-16">
        <h3 className="text-2xl md:text-3xl font-extrabold text-sky-700 mb-8 text-center">
          Testimoni Pelanggan
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/90 rounded-3xl shadow-xl border border-sky-100 p-7 flex flex-col items-center hover:shadow-2xl transition group text-center"
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-16 h-16 rounded-full border-2 border-sky-200 object-cover mb-3 shadow"
              />
              <p className="italic text-[#1479c9] font-medium mb-4">
                "{t.review}"
              </p>
              <div className="flex justify-center mb-2">
                {[1, 2, 3, 4, 5].map((idx) => (
                  <StarIcon key={idx} filled={idx <= t.rating} />
                ))}
              </div>
              <div className="font-bold text-sky-600">{t.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ / Q&A SECTION */}
      <div className="w-full max-w-4xl mx-auto mb-20">
        <h3 className="text-3xl md:text-4xl font-extrabold text-sky-700 mb-8 text-center">
          FAQ Promo Cleaning Service
        </h3>
        <div className="bg-white/90 rounded-2xl border border-sky-100 shadow px-9 py-9 space-y-7">
          <div>
            <div className="font-semibold text-sky-700 mb-1 text-base">
              Q: Promo berlaku untuk seluruh area?
            </div>
            <div className="text-[#22577a] text-base">
              A: Ya, promo berlaku di seluruh area layanan Bershine selama slot tersedia.
            </div>
          </div>
          <div>
            <div className="font-semibold text-sky-700 mb-1 text-base">
              Q: Gimana cara pakai kode promo?
            </div>
            <div className="text-[#22577a] text-base">
              A: Klik <b>Copy Code</b> pada promo, lalu tempel saat booking layanan di website.
            </div>
          </div>
          <div>
            <div className="font-semibold text-sky-700 mb-1 text-base">
              Q: Jika ada kendala saat redeem promo?
            </div>
            <div className="text-[#22577a] text-base">
              A: Hubungi admin kami via WhatsApp atau chat website, kami siap membantu!
            </div>
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="w-full max-w-3xl mx-auto text-center mb-6">
        <div className="rounded-3xl bg-gradient-to-r from-sky-400 to-blue-500 py-12 px-7 shadow-2xl flex flex-col items-center border border-sky-200">
          {SVG_CTA}
          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2 drop-shadow">
            Ayo Booking & Rasakan Bedanya!
          </h3>
          <p className="text-white text-lg mb-5">
            Kami siap membuat rumah/kantormu kinclong dan sehat, promo terbatas hanya di bulan ini! Jangan lewatkan kesempatan emas ini.
          </p>
          <a
            href="/pemesan"
            className="inline-block bg-white text-sky-600 font-bold px-8 py-3 rounded-xl shadow-lg hover:bg-sky-100 transition text-lg mt-2"
          >
            Pesan Sekarang
          </a>
        </div>
      </div>
    </div>
  );
}