import React, { useState } from 'react';
import './App.css';

// Import komponen yang sudah ada
import Beranda from './pages/Beranda';
import Layanan from './pages/Layanan';
import Pemesanan from './pages/Pemesanan';
import Promo from './pages/Promo';
import Tentang from './pages/Tentang';

// Import komponen baru
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('beranda');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'beranda':
        return <Beranda onNavigate={handleNavigation} />;
      case 'layanan':
        return <Layanan onNavigate={handleNavigation} />;
      case 'pemesanan':
        return <Pemesanan onNavigate={handleNavigation} />;
      case 'promo':
        return <Promo onNavigate={handleNavigation} />;
      case 'tentang':
        return <Tentang onNavigate={handleNavigation} />;
      default:
        return <Beranda onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={handleNavigation} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;