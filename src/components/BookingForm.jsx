import React, { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceType: '',
    date: '',
    time: '',
    notes: '',
    promoCode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Pemesanan berhasil dikirim! Tim kami akan menghubungi Anda segera.');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
        <h2 className="text-2xl font-bold mb-6">Informasi Pribadi</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nama Lengkap *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#85aef7] focus:border-[#85aef7]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#85aef7] focus:border-[#85aef7]"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Nomor Telepon *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#85aef7] focus:border-[#85aef7]"
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Alamat Lengkap *
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#85aef7] focus:border-[#85aef7]"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
        <h2 className="text-2xl font-bold mb-6">Detail Layanan</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
              Jenis Layanan *
            </label>
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#85aef7] focus:border-[#85aef7]"
            >
              <option value="">Pilih Layanan</option>
              <option value="pembersihan-rumah">Pembersihan Rumah</option>
              <option value="pembersihan-kantor">Pembersihan Kantor</option>
              <option value="pembersihan-karpet">Pembersihan Karpet</option>
              <option value="pembersihan-jendela">Pembersihan Jendela</option>
              <option value="pembersihan-konstruksi">Pembersihan Pasca Konstruksi</option>
              <option value="layanan-khusus">Layanan Khusus</option>
            </select>
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
              Tanggal Layanan *
            </label>
            <div className="relative">
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#85aef7] focus:border-[#85aef7]"
              />
              <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
              Waktu Layanan *
            </label>
            <div className="relative">
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#85aef7] focus:border-[#85aef7]"
              />
              <Clock className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div>
            <label htmlFor="promoCode" className="block text-sm font-medium text-gray-700 mb-1">
              Kode Promo (Opsional)
            </label>
            <input
              type="text"
              id="promoCode"
              name="promoCode"
              value={formData.promoCode}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#85aef7] focus:border-[#85aef7]"
              placeholder="Masukkan kode promo jika ada"
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
              Catatan Tambahan (Opsional)
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#85aef7] focus:border-[#85aef7]"
              placeholder="Berikan informasi tambahan tentang kebutuhan pembersihan Anda"
            ></textarea>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="bg-[#75daff] text-white px-8 py-3 rounded-full hover:bg-[#73a6ff] transition-colors font-medium"
        >
          Kirim Pemesanan
        </button>
      </div>
    </form>
  );
}