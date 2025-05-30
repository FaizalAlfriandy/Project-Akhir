import React from 'react';
import { CheckCircle, Users, Award, Clock, Shield, Star, Heart, Target } from 'lucide-react';


const achievements = [
  {
    icon: <Users className="h-8 w-8" />,
    number: '500+',
    label: 'Pelanggan Puas',
    description: 'Telah melayani lebih dari 500 pelanggan dengan tingkat kepuasan 98%'
  },
  {
    icon: <Award className="h-8 w-8" />,
    number: '5+',
    label: 'Tahun Pengalaman',
    description: 'Berpengalaman dalam industri cleaning service sejak 2019'
  },
  {
    icon: <Clock className="h-8 w-8" />,
    number: '24/7',
    label: 'Layanan Siaga',
    description: 'Siap melayani kebutuhan cleaning Anda kapan saja'
  },
  {
    icon: <Shield className="h-8 w-8" />,
    number: '100%',
    label: 'Jaminan Kualitas',
    description: 'Garansi kepuasan dengan standar kualitas internasional'
  },
];

const values = [
  {
    icon: <Heart className="h-6 w-6" />,
    title: 'Kepedulian',
    description: 'Kami peduli terhadap kesehatan dan kenyamanan pelanggan dengan memberikan layanan terbaik.'
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: 'Kualitas',
    description: 'Mengutamakan kualitas dalam setiap layanan dengan standar profesional tinggi.'
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: 'Komitmen',
    description: 'Berkomitmen penuh untuk memberikan hasil yang memuaskan sesuai harapan pelanggan.'
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Kepercayaan',
    description: 'Membangun kepercayaan melalui transparansi, kejujuran, dan konsistensi layanan.'
  },
];

export default function Tentang({ onNavigate }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#75daff] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tentang Bershine</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Penyedia layanan kebersihan profesional terpercaya dengan dedikasi tinggi 
            untuk menciptakan lingkungan yang bersih, sehat, dan nyaman
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <img 
                src="https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Ftest1-emgndhaqd0c9h2db.a01.azurefd.net%2Fimages%2Fd452c227-04c0-4905-97c2-a21de65c15ba.png&s=1024" 
                alt="Bershine Team" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Tentang Kami</h2>
              <p className="text-gray-600 text-lg">
                Bershine didirikan pada tahun 2025 dengan visi sederhana namun kuat: memberikan layanan 
                kebersihan berkualitas tinggi yang dapat diandalkan oleh setiap pelanggan.
              </p>
              <p className="text-gray-600">
                Berawal dari tim kecil yang berdedikasi, kami telah berkembang menjadi penyedia layanan 
                cleaning service terpercaya di wilayah Palembang dan sekitarnya. Dengan pengalaman lebih 
                dari 5 tahun, kami telah melayani ratusan pelanggan dari berbagai segmen.
              </p>
              <p className="text-gray-600">
                Komitmen kami adalah memberikan layanan yang tidak hanya membersihkan, tetapi juga 
                menciptakan lingkungan yang sehat dan nyaman untuk keluarga dan bisnis Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pencapaian Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Angka-angka yang menunjukkan dedikasi dan komitmen kami dalam memberikan layanan terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-[#b5d0ff] rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center text-white">
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold text-[#75daff] mb-2">{achievement.number}</div>
                <h3 className="font-bold mb-2">{achievement.label}</h3>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[#caf1ff] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-[#75daff]">Visi Kami</h3>
              <p className="text-gray-700 text-lg">
                Menjadi penyedia layanan kebersihan terdepan yang diakui secara nasional, 
                dengan standar kualitas internasional dan komitmen terhadap kepuasan pelanggan.
              </p>
            </div>

            <div className="bg-[#b5d0ff] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Misi Kami</h3>
              <ul className="space-y-3 text-white">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Memberikan layanan kebersihan berkualitas tinggi dengan teknologi modern</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Mengembangkan tim profesional yang terlatih dan bersertifikat</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Menciptakan lingkungan yang sehat dan nyaman untuk semua</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Membangun hubungan jangka panjang dengan pelanggan</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nilai-Nilai Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Prinsip-prinsip yang menjadi fondasi dalam setiap layanan yang kami berikan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-[#b5d0ff] rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center text-white">
                  {value.icon}
                </div>
                <h3 className="font-bold mb-3 text-[#75daff]">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mengapa Memilih Bershine?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Keunggulan yang membuat kami berbeda dari penyedia layanan cleaning service lainnya
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="bg-[#b5d0ff] rounded-full p-3 w-12 h-12 mb-4 flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold mb-3">Tim Profesional Bersertifikat</h3>
              <p className="text-gray-600 text-sm">
                Semua anggota tim telah melalui pelatihan intensif dan memiliki sertifikasi resmi 
                dalam bidang cleaning service.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="bg-[#b5d0ff] rounded-full p-3 w-12 h-12 mb-4 flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold mb-3">Asuransi & Jaminan</h3>
              <p className="text-gray-600 text-sm">
                Dilindungi asuransi penuh dengan jaminan kepuasan 100% atau uang kembali 
                untuk setiap layanan yang kami berikan.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="bg-[#b5d0ff] rounded-full p-3 w-12 h-12 mb-4 flex items-center justify-center">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold mb-3">Peralatan Modern</h3>
              <p className="text-gray-600 text-sm">
                Menggunakan peralatan cleaning terdepan dan bahan pembersih ramah lingkungan 
                yang aman untuk keluarga.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="bg-[#b5d0ff] rounded-full p-3 w-12 h-12 mb-4 flex items-center justify-center">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold mb-3">Fleksibilitas Waktu</h3>
              <p className="text-gray-600 text-sm">
                Layanan tersedia 7 hari seminggu dengan jadwal yang dapat disesuaikan 
                dengan kebutuhan Anda.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="bg-[#b5d0ff] rounded-full p-3 w-12 h-12 mb-4 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold mb-3">Harga Transparan</h3>
              <p className="text-gray-600 text-sm">
                Tidak ada biaya tersembunyi. Semua harga dijelaskan dengan jelas 
                sebelum layanan dimulai.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="bg-[#b5d0ff] rounded-full p-3 w-12 h-12 mb-4 flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold mb-3">Layanan Personal</h3>
              <p className="text-gray-600 text-sm">
                Setiap pelanggan mendapat perhatian khusus dengan layanan yang 
                disesuaikan dengan kebutuhan spesifik.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-[#75daff] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ingin Tahu Lebih Lanjut?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Hubungi kami untuk konsultasi gratis dan temukan solusi kebersihan yang tepat untuk Anda
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => onNavigate('pemesanan')}
              className="bg-white text-[#75daff] hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-colors"
            >
              Mulai Pesan
            </button>
            <button
              onClick={() => onNavigate('layanan')}
              className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-full font-medium transition-colors"
            >
              Lihat Layanan
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}