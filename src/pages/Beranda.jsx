"use client"

// Custom Card component
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg border border-gray-200 shadow-lg ${className}`}>{children}</div>
)

const CardContent = ({ children, className = "" }) => <div className={`p-6 ${className}`}>{children}</div>

// Custom Button component
const Button = ({ children, className = "", variant = "default", size = "default", onClick, ...props }) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

  const variants = {
    default: "bg-[#75daff] text-white hover:bg-[#73a6ff]",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    outline: "border border-[#75daff] text-[#75daff] hover:bg-[#caf1ff]",
    white: "bg-white text-[#75daff] hover:bg-gray-50 border border-gray-200",
  }

  const sizes = {
    default: "h-10 py-2 px-4",
    icon: "h-10 w-10",
    lg: "h-12 px-8 text-lg",
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

// Simple icons as SVG components
const Star = ({ className = "" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9l-5.91 3.74L18 19l-6-4.74L6 19l1.91-6.26L2 9l6.91-1.74L12 2z" />
  </svg>
)

const CheckCircle = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const Users = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
    />
  </svg>
)

const Award = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    />
  </svg>
)

const Clock = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const MessageCircle = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
)

const Heart = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
)

const Shield = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const ArrowRight = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const Target = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

export default function Beranda({ onNavigate }) {
  // Data layanan sesuai dengan Layanan.jsx
  const services = [
    {
      id: 1,
      title: "Pembersihan Rumah",
      description: "Layanan pembersihan rumah menyeluruh untuk kenyamanan keluarga Anda",
      icon: "🏠",
      price: "Mulai dari Rp 150.000",
      duration: "2-4 jam",
      features: [
        "Pembersihan seluruh ruangan",
        "Vacuum karpet dan sofa",
        "Pembersihan kamar mandi",
        "Pembersihan dapur",
      ],
    },
    {
      id: 2,
      title: "Pembersihan Kantor",
      description: "Buat lingkungan kerja lebih nyaman dan produktif dengan layanan pembersihan kantor kami",
      icon: "🏢",
      price: "Mulai dari Rp 200.000",
      duration: "3-6 jam",
      features: [
        "Pembersihan area kerja",
        "Pembersihan meeting room",
        "Pembersihan pantry/dapur",
        "Pembersihan toilet",
      ],
    },
    {
      id: 3,
      title: "Pembersihan Karpet",
      description: "Bersihkan karpet dari debu, kotoran, dan bakteri dengan teknologi modern",
      icon: "🧹",
      price: "Mulai dari Rp 50.000/m²",
      duration: "1-3 jam",
      features: [
        "Deep cleaning dengan mesin khusus",
        "Penghilangan noda membandel",
        "Sanitasi anti bakteri",
        "Pengeringan cepat",
      ],
    },
  ]

  // Data promo sesuai dengan Promo.jsx
  const promos = [
    {
      title: "Diskon 25% Semua Layanan",
      subtitle: "Bersih Hemat di Awal Bulan!",
      description: "Dapatkan diskon 25% untuk semua jenis layanan cleaning tanpa minimum order.",
      code: "BERSIH25",
      badge: "Spesial Bulan Ini",
      valid: "s/d 15 Juni 2025",
    },
    {
      title: "Bundling Keluarga Hemat",
      subtitle: "Pesan 3x, GRATIS 1x",
      description: "Booking layanan cleaning 3 kali, dapat 1x sesi gratis untuk rumah/kantor yang sama.",
      code: "BUNDEL4",
      badge: "Hot Deal",
      valid: "Untuk 50 customer pertama",
    },
    {
      title: "First Order Bonus Disinfektan",
      subtitle: "Pelanggan Baru = Bebas Kuman!",
      description: "Khusus order pertama, dapatkan layanan semprot disinfektan GRATIS.",
      code: "AUTOMATIC",
      badge: "Welcome Gift",
      valid: "Otomatis order pertama",
    },
  ]

  // Data testimonial
  const testimonials = [
    {
      id: 1,
      name: "Ayu Pratiwi",
      review:
        "Promo BERSIH25 beneran bikin hemat! Rumahku jadi kinclong, petugasnya ramah dan ontime. Mantap banget, recommended!",
      rating: 5,
      service: "Pembersihan Rumah",
    },
    {
      id: 2,
      name: "Budi Santoso",
      review:
        "Suka banget sama bonus disinfektan. Proses booking mudah, hasil bersih maksimal, harga promo bikin nagih, pokoknya puas.",
      rating: 5,
      service: "Pembersihan Kantor",
    },
    {
      id: 3,
      name: "Linda Wijaya",
      review:
        "Bundling keluarga sangat membantu, apalagi buat yang sering butuh cleaning rutin. Terima kasih Bershine!",
      rating: 5,
      service: "Pembersihan Karpet",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#75daff] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Layanan
                <span className="block text-white">Kebersihan</span>
                <span className="block">Terpercaya</span>
              </h1>

              <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
                Solusi lengkap untuk semua kebutuhan kebersihan rumah dan kantor Anda. Tim profesional, peralatan
                modern, hasil maksimal.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Button size="lg" variant="white" className="font-semibold" onClick={() => onNavigate("pemesanan")}>
                  Pesan Sekarang
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#75daff] font-semibold"
                  onClick={() => onNavigate("layanan")}
                >
                  Lihat Layanan
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">500+</div>
                  <div className="text-sm lg:text-base text-white/80">Pelanggan Puas</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">5+</div>
                  <div className="text-sm lg:text-base text-white/80">Tahun Pengalaman</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">24/7</div>
                  <div className="text-sm lg:text-base text-white/80">Layanan Siaga</div>
                </div>
              </div>
            </div>

            {/* Right Content - Phone Mockup */}
            <div className="relative flex justify-center">
              <div className="relative">
                {/* Main Phone */}
                <div className="w-80 h-[600px] bg-gray-800 rounded-[3rem] p-3 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Status bar */}
                    <div className="bg-[#75daff] px-6 py-3 flex justify-between items-center text-xs font-medium text-white">
                      <span>18:14</span>
                      <div className="flex items-center gap-1">
                        <span>100%</span>
                      </div>
                    </div>

                    {/* App content */}
                    <div className="px-6 py-4">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="text-[#75daff] text-2xl font-bold">
                          Ber<span className="text-[#b5d0ff]">Shine</span>
                        </div>
                        <div className="w-10 h-10 bg-[#caf1ff] rounded-full flex items-center justify-center">
                          <Users className="h-5 w-5 text-[#75daff]" />
                        </div>
                      </div>

                      {/* Location */}
                      <div className="bg-[#caf1ff] rounded-lg p-4 mb-6 border border-[#b5d0ff]">
                        <div className="text-sm text-[#75daff] mb-1">📍 Lokasi Anda</div>
                        <div className="text-gray-800 font-medium">Palembang</div>
                      </div>

                      {/* User greeting */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-[#75daff] rounded-full flex items-center justify-center">
                          <span className="text-white font-medium">FA</span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800">Hi Yanto!</div>
                          <div className="text-sm text-gray-600">Mau bersih-bersih apa hari ini?</div>
                        </div>
                      </div>

                      {/* Service grid */}
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { name: "Rumah", color: "bg-[#caf1ff] border border-[#b5d0ff]", icon: "🏠" },
                          { name: "Kantor", color: "bg-[#caf1ff] border border-[#b5d0ff]", icon: "🏢" },
                          { name: "Karpet", color: "bg-[#caf1ff] border border-[#b5d0ff]", icon: "🧽" },
                          { name: "Jendela", color: "bg-[#caf1ff] border border-[#b5d0ff]", icon: "🪟" },
                          { name: "Konstruksi", color: "bg-[#caf1ff] border border-[#b5d0ff]", icon: "🔨" },
                          { name: "Lainnya", color: "bg-[#caf1ff] border border-[#b5d0ff]", icon: "➕" },
                        ].map((service, index) => (
                          <div
                            key={index}
                            className={`${service.color} rounded-xl p-4 aspect-square flex flex-col justify-between hover:bg-[#b5d0ff] transition-colors`}
                          >
                            <div className="text-center text-2xl">{service.icon}</div>
                            <div className="text-xs font-medium text-center leading-tight text-[#75daff]">
                              {service.name}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-green-500 rounded-full p-4 shadow-lg">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-yellow-500 rounded-full p-4 shadow-lg">
                  <Star className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Rumah Bersih dengan <span className="text-[#75daff]">3 Langkah Mudah</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Proses booking yang simpel dan hasil yang memuaskan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 - Pesan */}
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-[#75daff] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#73a6ff] transition-colors shadow-lg">
                  <CheckCircle className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 bg-[#b5d0ff] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  1
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Pilih & Pesan</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Pilih layanan yang dibutuhkan, tentukan jadwal, dan lakukan pemesanan melalui website atau aplikasi
                Bershine
              </p>
              <button
                className="bg-[#caf1ff] text-[#75daff] px-6 py-2 rounded-lg font-medium hover:bg-[#b5d0ff] transition-colors"
                onClick={() => onNavigate("pemesanan")}
              >
                Mulai Pesan
              </button>
            </div>

            {/* Step 2 - Chat */}
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-[#75daff] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#73a6ff] transition-colors shadow-lg">
                  <MessageCircle className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 bg-[#b5d0ff] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  2
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Konfirmasi</h3>
              <p className="text-gray-600 leading-relaxed">
                Tim kami akan menghubungi Anda untuk konfirmasi detail layanan dan memastikan semua kebutuhan terpenuhi
              </p>
            </div>

            {/* Step 3 - Enjoy */}
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-[#75daff] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#73a6ff] transition-colors shadow-lg">
                  <Heart className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 bg-[#b5d0ff] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  3
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Nikmati Hasilnya</h3>
              <p className="text-gray-600 leading-relaxed">
                Tim profesional kami datang tepat waktu dan memberikan hasil pembersihan yang maksimal sesuai standar
                kualitas tinggi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Layanan Lengkap <span className="text-[#75daff]">Bershine</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Berbagai pilihan layanan profesional untuk kebutuhan kebersihan Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <Card
                key={service.id}
                className="relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 hover:border-[#b5d0ff]"
              >
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-2xl font-bold text-[#75daff] mb-4">{service.price}</p>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.description}</p>

                  <div className="mb-6">
                    <ul className="space-y-2 text-left">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckCircle className="h-4 w-4 text-[#75daff] mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{service.duration}</span>
                  </div>

                  <Button
                    className="w-full rounded-full py-3 px-6 font-semibold"
                    onClick={() => onNavigate("pemesanan")}
                  >
                    Pesan Sekarang
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="font-semibold" onClick={() => onNavigate("layanan")}>
              Lihat Semua Layanan
            </Button>
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Promo Spesial <span className="text-[#75daff]">Bershine</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dapatkan penawaran terbaik untuk layanan kebersihan berkualitas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {promos.map((promo, idx) => (
              <div
                key={idx}
                className="relative bg-gradient-to-br from-[#caf1ff] to-[#b5d0ff] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span className="absolute top-4 right-4 bg-[#75daff] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {promo.badge}
                </span>

                <h3 className="text-xl font-bold text-gray-800 mb-2">{promo.title}</h3>
                <p className="text-[#75daff] font-semibold mb-4">{promo.subtitle}</p>
                <p className="text-gray-700 mb-6 text-sm">{promo.description}</p>

                <div className="bg-white rounded-lg p-4 mb-4">
                  <div className="text-center">
                    <span className="text-[#75daff] font-bold text-lg">Kode: {promo.code}</span>
                    <p className="text-xs text-gray-500 mt-1">{promo.valid}</p>
                  </div>
                </div>

                <button
                  className="w-full bg-[#75daff] text-white py-3 rounded-lg font-semibold hover:bg-[#73a6ff] transition-colors"
                  onClick={() => onNavigate("promo")}
                >
                  Lihat Detail Promo
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="font-semibold" onClick={() => onNavigate("promo")}>
              Lihat Semua Promo
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Mengapa Memilih <span className="text-[#75daff]">Bershine?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kepercayaan ribuan pelanggan adalah prioritas utama kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-[#75daff] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#73a6ff] transition-colors">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Tim Profesional</h3>
              <p className="text-gray-600">Tim terlatih dan berpengalaman dengan sertifikasi resmi</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-[#75daff] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#73a6ff] transition-colors">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Asuransi & Jaminan</h3>
              <p className="text-gray-600">Dilindungi asuransi dengan jaminan kepuasan 100%</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-[#75daff] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#73a6ff] transition-colors">
                <Clock className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Tepat Waktu</h3>
              <p className="text-gray-600">Selalu datang tepat waktu sesuai jadwal yang disepakati</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-[#75daff] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#73a6ff] transition-colors">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Kualitas Terjamin</h3>
              <p className="text-gray-600">Menggunakan peralatan modern dan bahan berkualitas tinggi</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="font-semibold" onClick={() => onNavigate("tentang")}>
              Pelajari Lebih Lanjut
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-[#75daff] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Apa Kata Pelanggan Kami?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">Kepuasan pelanggan adalah prioritas utama kami</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl p-8 text-gray-800 shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.review}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-[#75daff] font-medium mt-1">{testimonial.service}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="white" size="lg" className="font-semibold" onClick={() => onNavigate("tentang")}>
              Bergabung dengan 500+ Pelanggan Puas
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Siap Memesan Layanan <span className="text-[#75daff]">Bershine?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran terbaik
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="font-semibold" onClick={() => onNavigate("pemesanan")}>
              Pesan Sekarang
            </Button>
            <Button size="lg" variant="outline" className="font-semibold" onClick={() => onNavigate("tentang")}>
              Hubungi Kami
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}