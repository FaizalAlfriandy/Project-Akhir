import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="w-full min-h-screen">
      <header className="w-full bg-white p-6">
        <nav className="flex flex-row justify-between px-12">
          <div className="flex items-center gap-2">
            <h1 className="text-[#1cc6ff] font-bold text-xl ">
              <a href="/">Bershine</a>
            </h1>
          </div>
          <ul className="flex space-x-7 items-center">
            <li>
              <a href="/">Beranda</a>
            </li>
            <li>
              <a href="/layanan">Layanan</a>
            </li>
            <li>
              <a href="/promo">Promo</a>
            </li>
            <li>
              <a href="/tentang">Tentang Kami</a>
            </li>
          </ul>
          <div className="flex items-center space-x-5">
            <li className="list-none">
              <a
                href="/pemesanan"
                className="bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 transition"
              >
                Pesan Sekarang
              </a>
            </li>
          </div>
        </nav>
      </header>
      <main className="h-screen">
        <Outlet />
      </main>

      <footer className="bottom-0 w-full bg-white p-4">
        <p>© 2025 MyWebsite</p>
      </footer>
    </div>
  );
}
