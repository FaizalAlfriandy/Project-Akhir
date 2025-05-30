import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const services = [
  { name: 'Pembersihan Rumah', href: '/layanan' },
  { name: 'Pembersihan Kantor', href: '/layanan' },
  { name: 'Pembersihan Karpet', href: '/layanan' },
  { name: 'Pembersihan Jendela', href: '/layanan' },
  { name: 'Pembersihan Pasca Konstruksi', href: '/layanan' },
];

export default function Navbar({ currentPage, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleNavigation = (page) => {
    onNavigate(page);
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button 
            onClick={() => handleNavigation('beranda')} 
            className="flex items-center cursor-pointer"
          >
            <span className="text-2xl font-bold text-[#75daff]">Bershine</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavigation('beranda')}
              className={`font-medium ${
                currentPage === 'beranda' 
                  ? 'text-[#75daff]' 
                  : 'text-gray-700 hover:text-[#75daff]'
              }`}
            >
              Beranda
            </button>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center font-medium ${
                  currentPage === 'layanan' 
                    ? 'text-[#75daff]' 
                    : 'text-gray-700 hover:text-[#75daff]'
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onClick={() => handleNavigation('layanan')}
              >
                Layanan <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 ${
                  isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <div className="py-1">
                  {services.map((service) => (
                    <button
                      key={service.name}
                      onClick={() => handleNavigation('layanan')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-[#f2fcff] hover:text-[#75daff]"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => handleNavigation('promo')}
              className={`font-medium ${
                currentPage === 'promo' 
                  ? 'text-[#75daff]' 
                  : 'text-gray-700 hover:text-[#75daff]'
              }`}
            >
              Promo
            </button>
            <button
              onClick={() => handleNavigation('tentang')}
              className={`font-medium ${
                currentPage === 'tentang' 
                  ? 'text-[#75daff]' 
                  : 'text-gray-700 hover:text-[#75daff]'
              }`}
            >
              Tentang Kami
            </button>
            <button
              onClick={() => handleNavigation('pemesanan')}
              className="bg-[#75daff] text-white px-6 py-2 rounded-full hover:bg-[#73a6ff] transition-colors"
            >
              Pemesanan
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-gray-700 hover:text-[#75daff]"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4 pb-4">
              <button
                onClick={() => handleNavigation('beranda')}
                className="text-left text-gray-700 hover:text-[#75daff] font-medium"
              >
                Beranda
              </button>

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center text-gray-700 hover:text-[#75daff] font-medium"
                >
                  Layanan{' '}
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {isServicesOpen && (
                  <div className="pl-4 mt-2 space-y-2 border-l-2 border-[#caf1ff]">
                    {services.map((service) => (
                      <button
                        key={service.name}
                        onClick={() => handleNavigation('layanan')}
                        className="block text-left text-gray-700 hover:text-[#75daff]"
                      >
                        {service.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNavigation('promo')}
                className="text-left text-gray-700 hover:text-[#75daff] font-medium"
              >
                Promo
              </button>
              <button
                onClick={() => handleNavigation('tentang')}
                className="text-left text-gray-700 hover:text-[#75daff] font-medium"
              >
                Tentang Kami
              </button>
              <button
                onClick={() => handleNavigation('pemesanan')}
                className="bg-[#75daff] text-white px-6 py-2 rounded-full hover:bg-[#73a6ff] transition-colors text-center"
              >
                Pemesanan
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}