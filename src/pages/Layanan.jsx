import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Clock, Users, Shield, Star } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Pembersihan Rumah',
    description: 'Layanan pembersihan rumah menyeluruh untuk kenyamanan keluarga Anda',
    icon: '🏠',
    price: 'Mulai dari Rp 150.000',
    duration: '2-4 jam',
    features: [
      'Pembersihan seluruh ruangan',
      'Vacuum karpet dan sofa',
      'Pembersihan kamar mandi',
      'Pembersihan dapur',
      'Pel lantai seluruh rumah',
      'Pembersihan jendela dalam'
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop'
  },
  {
    id: 2,
    title: 'Pembersihan Kantor',
    description: 'Buat lingkungan kerja lebih nyaman dan produktif dengan layanan pembersihan kantor kami',
    icon: '🏢',
    price: 'Mulai dari Rp 200.000',
    duration: '3-6 jam',
    features: [
      'Pembersihan area kerja',
      'Pembersihan meeting room',
      'Pembersihan pantry/dapur',
      'Pembersihan toilet',
      'Vacuum karpet kantor',
      'Pembersihan meja dan kursi'
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=300&fit=crop'
  },
  {
    id: 3,
    title: 'Pembersihan Karpet',
    description: 'Bersihkan karpet dari debu, kotoran, dan bakteri dengan teknologi modern',
    icon: '🧹',
    price: 'Mulai dari Rp 50.000/m²',
    duration: '1-3 jam',
    features: [
      'Deep cleaning dengan mesin khusus',
      'Penghilangan noda membandel',
      'Sanitasi anti bakteri',
      'Pengeringan cepat',
      'Perlindungan serat karpet',
      'Garansi hasil bersih'
    ],
    image: 'https://minimalis123.com/wp-content/smush-webp/2022/04/Carpet-1.jpg.webp'
  },
  {
    id: 4,
    title: 'Pembersihan Jendela',
    description: 'Jendela bersih dan berkilau untuk pemandangan yang lebih baik',
    icon: '🪟',
    price: 'Mulai dari Rp 25.000/jendela',
    duration: '30 menit - 2 jam',
    features: [
      'Pembersihan kaca dalam dan luar',
      'Pembersihan frame jendela',
      'Pembersihan kusen',
      'Hasil bebas goresan',
      'Menggunakan alat profesional',
      'Aman untuk lantai tinggi'
    ],
    image: 'https://www.housedigest.com/img/gallery/the-most-important-place-to-use-window-cleaner-that-youre-probably-missing/l-intro-1658151113.jpg'
  },
  {
    id: 5,
    title: 'Pembersihan Pasca Konstruksi',
    description: 'Bersihkan sisa-sisa konstruksi dan siapkan ruangan untuk ditempati',
    icon: '🏗️',
    price: 'Mulai dari Rp 300.000',
    duration: '4-8 jam',
    features: [
      'Pembersihan debu konstruksi',
      'Penghilangan sisa cat dan lem',
      'Pembersihan lantai kasar',
      'Pembersihan sisa material',
      'Sanitasi menyeluruh',
      'Siap huni langsung'
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=300&fit=crop'
  },
  {
    id: 6,
    title: 'Layanan Khusus',
    description: 'Layanan pembersihan khusus sesuai kebutuhan spesifik Anda',
    icon: '✨',
    price: 'Harga disesuaikan',
    duration: 'Fleksibel',
    features: [
      'Pembersihan event/acara',
      'Pembersihan gudang',
      'Pembersihan pabrik',
      'Pembersihan rumah sakit',
      'Pembersihan hotel',
      'Konsultasi gratis'
    ],
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&h=300&fit=crop'
  },
];

const packages = [
  {
    name: 'Paket Basic',
    price: 'Rp 150.000',
    duration: '2-3 jam',
    suitable: 'Rumah 1-2 kamar',
    features: [
      'Pembersihan ruang tamu',
      'Pembersihan 1-2 kamar tidur',
      'Pembersihan 1 kamar mandi',
      'Pel lantai',
      'Vacuum karpet'
    ]
  },
  {
    name: 'Paket Standard',
    price: 'Rp 250.000',
    duration: '3-4 jam',
    suitable: 'Rumah 2-3 kamar',
    features: [
      'Semua fitur Basic',
      'Pembersihan dapur',
      'Pembersihan balkon/teras',
      'Pembersihan jendela dalam',
      'Pembersihan furniture'
    ],
    popular: true
  },
  {
    name: 'Paket Premium',
    price: 'Rp 400.000',
    duration: '4-6 jam',
    suitable: 'Rumah besar/villa',
    features: [
      'Semua fitur Standard',
      'Deep cleaning kamar mandi',
      'Pembersihan lemari dalam',
      'Pembersihan AC (filter)',
      'Pembersihan detail furniture'
    ]
  }
];

export default function Layanan({ onNavigate }) {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#75daff] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Layanan Kami</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Bershine menyediakan berbagai layanan kebersihan profesional dengan standar kualitas tinggi
            untuk memenuhi kebutuhan rumah dan bisnis Anda
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48">
                  <img 
                    src={service.image || "/placeholder.svg"} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white rounded-full p-2">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="text-[#75daff] font-semibold">
                      {service.price}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedService(service)}
                    className="w-full bg-[#75daff] text-white py-2 rounded-lg hover:bg-[#73a6ff] transition-colors mb-3"
                  >
                    Lihat Detail
                  </button>
                  
                  <button
                    onClick={() => onNavigate('pemesanan')}
                    className="w-full border border-[#75daff] text-[#75daff] py-2 rounded-lg hover:bg-[#caf1ff] transition-colors"
                  >
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Paket Layanan Rumah</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pilih paket yang sesuai dengan kebutuhan dan ukuran rumah Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative rounded-xl p-8 border-2 ${
                  pkg.popular 
                    ? 'border-[#85aef7] bg-[#caf1ff]' 
                    : 'border-gray-200 bg-white'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#85aef7] text-white px-4 py-1 rounded-full text-sm font-medium">
                      Paling Populer
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-[#75daff] mb-1">{pkg.price}</div>
                  <div className="text-sm text-gray-500 mb-2">{pkg.duration}</div>
                  <div className="text-sm text-gray-600">{pkg.suitable}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#85aef7] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onNavigate('pemesanan')}
                  className={`w-full py-3 rounded-lg font-medium transition-colors ${
                    pkg.popular
                      ? 'bg-[#75daff] text-white hover:bg-[#73a6ff]'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Pilih Paket
                </button>
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
              Kami berkomitmen memberikan layanan terbaik dengan standar profesional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#b5d0ff] rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-[#ffffff]" />
              </div>
              <h3 className="font-bold mb-2">Tim Profesional</h3>
              <p className="text-gray-600 text-sm">Tim terlatih dan berpengalaman dengan sertifikasi resmi</p>
            </div>

            <div className="text-center">
              <div className="bg-[#b5d0ff] rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-[#ffffff]" />
              </div>
              <h3 className="font-bold mb-2">Asuransi & Jaminan</h3>
              <p className="text-gray-600 text-sm">Dilindungi asuransi dengan jaminan kepuasan 100%</p>
            </div>

            <div className="text-center">
              <div className="bg-[#b5d0ff] rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-[#ffffff]" />
              </div>
              <h3 className="font-bold mb-2">Tepat Waktu</h3>
              <p className="text-gray-600 text-sm">Selalu datang tepat waktu sesuai jadwal yang disepakati</p>
            </div>

            <div className="text-center">
              <div className="bg-[#b5d0ff] rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-[#ffffff]" />
              </div>
              <h3 className="font-bold mb-2">Kualitas Terjamin</h3>
              <p className="text-gray-600 text-sm">Menggunakan peralatan modern dan bahan berkualitas tinggi</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#75daff] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap Memesan Layanan?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran terbaik
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => onNavigate('pemesanan')}
              className="bg-white text-[#75daff] hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-colors"
            >
              Pesan Sekarang
            </button>
            <button
              onClick={() => onNavigate('tentang')}
              className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-full font-medium transition-colors"
            >
              Hubungi Kami
            </button>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={selectedService.image || "/placeholder.svg"} 
                alt={selectedService.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{selectedService.icon}</span>
                <div>
                  <h3 className="text-2xl font-bold">{selectedService.title}</h3>
                  <p className="text-[#75daff] font-semibold">{selectedService.price}</p>
                </div>
              </div>

              <p className="text-gray-600 mb-6">{selectedService.description}</p>

              <div className="mb-6">
                <h4 className="font-bold mb-3">Yang Termasuk dalam Layanan:</h4>
                <ul className="space-y-2">
                  {selectedService.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#85aef7] mr-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setSelectedService(null);
                    onNavigate('pemesanan');
                  }}
                  className="flex-1 bg-[#75daff] text-white py-3 rounded-lg hover:bg-[#73a6ff] transition-colors"
                >
                  Pesan Layanan Ini
                </button>
                <button
                  onClick={() => setSelectedService(null)}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}