import React from 'react';
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Bershine</h3>
            <p className="mb-4">
              Layanan kebersihan profesional untuk rumah dan kantor Anda. Kami berkomitmen memberikan layanan terbaik
              dengan hasil maksimal.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Beranda</a></li>
              <li><a href="#" className="hover:text-white">Layanan</a></li>
              <li><a href="#" className="hover:text-white">Promo</a></li>
              <li><a href="#" className="hover:text-white">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-white">Pemesanan</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Layanan Kami</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Pembersihan Rumah</a></li>
              <li><a href="#" className="hover:text-white">Pembersihan Kantor</a></li>
              <li><a href="#" className="hover:text-white">Pembersihan Karpet</a></li>
              <li><a href="#" className="hover:text-white">Pembersihan Jendela</a></li>
              <li><a href="#" className="hover:text-white">Pembersihan Pasca Konstruksi</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Kontak Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <span>Jl. Kebersihan No. 123, Sumatera Selatan, Indonesia</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>info@bershine.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Bershine. Projek Akhir SINTAK 2025   .</p>
        </div>
      </div>
    </footer>
  );
}