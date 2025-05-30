"use client"

import { useState } from "react"

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
    default: "bg-slate-900 text-white hover:bg-slate-800",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    outline: "border border-slate-900 text-slate-900 hover:bg-slate-50",
    white: "bg-white text-slate-900 hover:bg-gray-50 border border-slate-200",
    blue: "bg-blue-600 text-white hover:bg-blue-700",
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
const ChevronLeft = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)

const ChevronRight = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const X = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

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

const Upload = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
    />
  </svg>
)

const Home = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
)

const Building = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    />
  </svg>
)

const Square = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const Eye = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
)

const Hammer = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
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

export default function Beranda() {
  const [selectedService, setSelectedService] = useState(null)

  const services = [
    {
      id: 1,
      title: "Pembersihan Rumah",
      price: "Rp 150.000",
      icon: Home,
      description: "Pembersihan menyeluruh untuk rumah tinggal dengan standar profesional",
      features: ["Pembersihan semua ruangan", "Vacuum dan pel lantai", "Pembersihan kamar mandi", "Pembersihan dapur"],
      duration: "3-4 jam",
    },
    {
      id: 2,
      title: "Pembersihan Kantor",
      price: "Rp 200.000",
      icon: Building,
      description: "Layanan pembersihan kantor untuk lingkungan kerja yang bersih dan sehat",
      features: ["Pembersihan meja kerja", "Vacuum karpet", "Pembersihan toilet", "Pembersihan pantry"],
      duration: "2-3 jam",
    },
    {
      id: 3,
      title: "Pembersihan Karpet",
      price: "Rp 25.000/m²",
      icon: Square,
      description: "Pembersihan karpet mendalam dengan teknologi modern untuk hasil maksimal",
      features: ["Deep cleaning karpet", "Penghilangan noda", "Disinfeksi anti bakteri", "Pengeringan cepat"],
      duration: "2-3 jam",
    },
    {
      id: 4,
      title: "Pembersihan Jendela",
      price: "Rp 15.000/m²",
      icon: Eye,
      description: "Pembersihan jendela profesional untuk pandangan yang jernih dan bersih",
      features: [
        "Pembersihan kaca dalam & luar",
        "Pembersihan frame jendela",
        "Hasil bebas goresan",
        "Akses tinggi aman",
      ],
      duration: "1-2 jam",
    },
    {
      id: 5,
      title: "Pembersihan Pasca Konstruksi",
      price: "Rp 35.000/m²",
      icon: Hammer,
      description: "Pembersihan menyeluruh setelah renovasi atau konstruksi bangunan",
      features: ["Pembersihan debu konstruksi", "Pembersihan sisa material", "Pembersihan menyeluruh", "Siap huni"],
      duration: "4-8 jam",
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: "Sarah Wijaya",
      location: "Jakarta Selatan",
      rating: 5,
      comment:
        "Pelayanan Bershine sangat memuaskan! Rumah jadi bersih total dan tim sangat profesional. Pasti pakai lagi!",
      service: "Pembersihan Rumah",
    },
    {
      id: 2,
      name: "Budi Santoso",
      location: "Tangerang",
      rating: 5,
      comment: "Pembersihan kantor sangat bagus. Ruangan jadi bersih total dan wangi. Harga juga reasonable.",
      service: "Pembersihan Kantor",
    },
    {
      id: 3,
      name: "Maya Putri",
      location: "Bekasi",
      rating: 5,
      comment:
        "Pembersihan karpet di rumah hasilnya luar biasa. Noda yang sudah lama hilang semua. Terima kasih Bershine!",
      service: "Pembersihan Karpet",
    },
  ]

  const handleServiceClick = (service) => {
    setSelectedService(service)
  }

  const closeModal = () => {
    setSelectedService(null)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-white text-slate-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Layanan
                <span className="block text-blue-600">Kebersihan</span>
                <span className="block">Terpercaya</span>
              </h1>

              <p className="text-xl lg:text-2xl mb-8 text-slate-600 leading-relaxed">
                Solusi lengkap untuk semua kebutuhan kebersihan rumah dan kantor Anda. Teknisi profesional, peralatan
                modern, hasil maksimal.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Button size="lg" className="font-semibold">
                  Pesan Sekarang
                </Button>
                <Button size="lg" variant="outline" className="font-semibold">
                  Lihat Layanan
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">10K+</div>
                  <div className="text-sm lg:text-base text-slate-600">Pelanggan Puas</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">5★</div>
                  <div className="text-sm lg:text-base text-slate-600">Rating Rata-rata</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">24/7</div>
                  <div className="text-sm lg:text-base text-slate-600">Layanan Siap</div>
                </div>
              </div>
            </div>

            {/* Right Content - Phone Mockup */}
            <div className="relative flex justify-center">
              <div className="relative">
                {/* Main Phone */}
                <div className="w-80 h-[600px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Status bar */}
                    <div className="bg-slate-900 px-6 py-3 flex justify-between items-center text-xs font-medium text-white">
                      <span>18:14</span>
                      <div className="flex items-center gap-1">
                        <span>100%</span>
                      </div>
                    </div>

                    {/* App content */}
                    <div className="px-6 py-4">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="text-slate-900 text-2xl font-bold">
                          Ber<span className="text-blue-600">Shine</span>
                        </div>
                        <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                          <Users className="h-5 w-5 text-slate-900" />
                        </div>
                      </div>

                      {/* Location */}
                      <div className="bg-slate-50 rounded-lg p-4 mb-6 border border-slate-200">
                        <div className="text-sm text-slate-600 mb-1">📍 Lokasi Anda</div>
                        <div className="text-slate-900 font-medium">Jakarta Selatan</div>
                      </div>

                      {/* User greeting */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center">
                          <span className="text-white font-medium">FA</span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800">Hi Fitria!</div>
                          <div className="text-sm text-gray-600">Mau bersih-bersih apa hari ini?</div>
                        </div>
                      </div>

                      {/* Service grid */}
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { name: "Rumah", color: "bg-slate-100 border border-slate-200", icon: "🏠" },
                          { name: "Kantor", color: "bg-slate-100 border border-slate-200", icon: "🏢" },
                          { name: "Karpet", color: "bg-slate-100 border border-slate-200", icon: "🧽" },
                          { name: "Jendela", color: "bg-slate-100 border border-slate-200", icon: "🪟" },
                          { name: "Konstruksi", color: "bg-slate-100 border border-slate-200", icon: "🔨" },
                          { name: "Lainnya", color: "bg-slate-100 border border-slate-200", icon: "➕" },
                        ].map((service, index) => (
                          <div
                            key={index}
                            className={`${service.color} rounded-xl p-4 aspect-square flex flex-col justify-between hover:bg-slate-200 transition-colors`}
                          >
                            <div className="text-center text-2xl">{service.icon}</div>
                            <div className="text-xs font-medium text-center leading-tight text-slate-900">
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
      </div>

      {/* How It Works Section */}
      <div className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Rumah Bersih dengan <span className="text-blue-600">1 Klik</span>
            </h2>
            <p className="text-xl text-slate-600">Proses mudah dan cepat untuk mendapatkan layanan terbaik</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 - Pesan */}
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-slate-800 transition-colors shadow-lg">
                  <CheckCircle className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  1
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Pesan</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Pesan berbagai macam layanan jasa kebersihan dan perawatan perabotan rumah Anda melalui aplikasi
                Bershine
              </p>

              {/* Upload Photo Feature */}
              <div className="bg-white rounded-lg p-4 border-2 border-dashed border-slate-300 hover:border-blue-400 transition-colors shadow-sm">
                <Upload className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm text-blue-600 font-medium">Upload Foto Ruangan</p>
                <p className="text-xs text-slate-500 mt-1">Untuk estimasi yang lebih akurat</p>
              </div>
            </div>

            {/* Step 2 - Chat */}
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-slate-800 transition-colors shadow-lg">
                  <MessageCircle className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  2
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Chat</h3>
              <p className="text-slate-600 leading-relaxed">
                Sambil menunggu layanan jasa tiba di rumah, Anda bisa chat dengan helper kami melalui fitur chat di
                aplikasi Bershine
              </p>
            </div>

            {/* Step 3 - Enjoy */}
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-slate-800 transition-colors shadow-lg">
                  <Heart className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  3
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Enjoy</h3>
              <p className="text-slate-600 leading-relaxed">
                Helper kami melakukan perawatan dan pembersihan rumah serta perabotan dengan maksimal. Dibekali dengan
                perlengkapan yang tepat untuk setiap layanannya. Semuanya dilakukan secara profesional untuk kualitas
                hasil yang memuaskan
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Mengapa Memilih <span className="text-blue-600">Bershine?</span>
            </h2>
            <p className="text-xl text-slate-600">Kepercayaan ribuan pelanggan adalah prioritas utama kami</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-slate-800 transition-colors">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Terpercaya & Aman</h3>
              <p className="text-slate-600">Teknisi berpengalaman dan terverifikasi dengan asuransi lengkap</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-slate-800 transition-colors">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Kualitas Premium</h3>
              <p className="text-slate-600">Menggunakan peralatan modern dan produk pembersih berkualitas tinggi</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-slate-800 transition-colors">
                <Clock className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Layanan Cepat</h3>
              <p className="text-slate-600">Booking mudah dan teknisi datang sesuai jadwal yang Anda tentukan</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-slate-800 transition-colors">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Tim Profesional</h3>
              <p className="text-slate-600">Tim yang terlatih dan berpengalaman dalam berbagai jenis pembersihan</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Layanan Lengkap <span className="text-blue-600">Bershine</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Pilih layanan terlengkap yang sesuai dengan kebutuhan hunian Anda. Klik untuk melihat detail layanan.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon

              return (
                <Card
                  key={service.id}
                  className="relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer group border-2 hover:border-slate-300"
                  onClick={() => handleServiceClick(service)}
                >
                  <CardContent className="p-8 text-center">
                    {/* Icon Circle */}
                    <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center bg-slate-900 shadow-lg group-hover:bg-slate-800 transition-all duration-300">
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>

                    {/* Service Title */}
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>

                    {/* Price */}
                    <p className="text-2xl font-bold text-blue-600 mb-4">{service.price}</p>

                    {/* Description */}
                    <p className="text-slate-600 mb-6 text-sm leading-relaxed">{service.description}</p>

                    {/* Order Button */}
                    <Button className="w-full rounded-full py-3 px-6 font-semibold text-lg group-hover:bg-slate-800 transition-all duration-300">
                      Lihat Detail
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Apa Kata Pelanggan Kami?</h2>
            <p className="text-xl text-slate-300">Kepuasan pelanggan adalah prioritas utama kami</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl p-8 text-slate-900 shadow-lg">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-slate-600 mb-6 leading-relaxed">"{testimonial.comment}"</p>

                {/* Customer Info */}
                <div className="border-t pt-4">
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.location}</div>
                  <div className="text-sm text-blue-600 font-medium mt-1">{testimonial.service}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button variant="white" size="lg" className="font-semibold">
              Bergabung dengan 10,000+ Pelanggan Puas
            </Button>
          </div>
        </div>
      </div>

      {/* Download App Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-slate-50 rounded-2xl p-12 shadow-lg border border-slate-200">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  Download Aplikasi <span className="text-blue-600">Bershine</span>
                </h2>
                <p className="text-xl text-slate-600 mb-8">
                  Pesan layanan kebersihan dengan mudah melalui aplikasi mobile kami. Tersedia di App Store dan Google
                  Play Store.
                </p>

                {/* Download buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl flex items-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                      <span className="text-slate-900 font-bold text-lg">🍎</span>
                    </div>
                    <div className="text-left">
                      <div className="text-xs">Download on the</div>
                      <div className="text-lg font-semibold">App Store</div>
                    </div>
                  </button>

                  <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl flex items-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 via-green-400 to-yellow-400 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">▶</span>
                    </div>
                    <div className="text-left">
                      <div className="text-xs">GET IT ON</div>
                      <div className="text-lg font-semibold">Google Play</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Right Content - QR Codes */}
              <div className="flex justify-center gap-8">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white border-2 border-slate-300 rounded-lg p-2 mb-4 shadow-md">
                    <div className="w-full h-full bg-slate-900 rounded grid grid-cols-8 gap-px p-1">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div
                          key={i}
                          className={`${Math.random() > 0.5 ? "bg-white" : "bg-slate-900"} rounded-sm`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 font-medium">App Store</p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 bg-white border-2 border-slate-300 rounded-lg p-2 mb-4 shadow-md">
                    <div className="w-full h-full bg-slate-900 rounded grid grid-cols-8 gap-px p-1">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div
                          key={i}
                          className={`${Math.random() > 0.4 ? "bg-white" : "bg-slate-900"} rounded-sm`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 font-medium">Google Play</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Pertanyaan yang Sering Ditanyakan</h2>
            <p className="text-xl text-slate-600">Temukan jawaban untuk pertanyaan umum tentang layanan kami</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Berapa lama waktu yang dibutuhkan untuk pembersihan?",
                answer:
                  "Waktu pembersihan bervariasi tergantung jenis layanan. Pembersihan rumah membutuhkan 3-4 jam, kantor 2-3 jam, dan layanan lainnya sesuai estimasi yang tertera.",
              },
              {
                question: "Apakah teknisi sudah terverifikasi dan terpercaya?",
                answer:
                  "Ya, semua teknisi kami telah melalui proses seleksi ketat, pelatihan profesional, dan verifikasi background check. Kami juga menyediakan asuransi untuk keamanan Anda.",
              },
              {
                question: "Bagaimana cara memesan layanan?",
                answer:
                  "Anda bisa memesan melalui aplikasi Bershine di smartphone atau website kami. Pilih layanan, upload foto ruangan untuk estimasi akurat, tentukan jadwal, dan teknisi akan datang sesuai waktu yang ditentukan.",
              },
              {
                question: "Apakah ada garansi untuk layanan yang diberikan?",
                answer:
                  "Ya, kami memberikan garansi untuk semua layanan kami. Jika Anda tidak puas dengan hasil pembersihan, kami akan melakukan pembersihan ulang tanpa biaya tambahan.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center">
                    <selectedService.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">{selectedService.title}</h2>
                    <p className="text-3xl font-bold text-blue-600">{selectedService.price}</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
                >
                  <X className="h-5 w-5 text-slate-600" />
                </button>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Deskripsi Layanan</h3>
                <p className="text-slate-600 leading-relaxed">{selectedService.description}</p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Yang Anda Dapatkan</h3>
                <ul className="space-y-2">
                  {selectedService.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Duration */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Estimasi Waktu</h3>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-slate-900" />
                  <span className="text-slate-600">{selectedService.duration}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button variant="outline" className="flex-1" onClick={closeModal}>
                  Tutup
                </Button>
                <Button className="flex-1" size="lg">
                  Pesan Sekarang
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
