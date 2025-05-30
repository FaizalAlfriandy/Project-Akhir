import React from 'react';
import BookingForm from '../components/Bookingform';

export default function Pemesanan() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Pemesanan Layanan Bershine
        </h1>
        <div className="max-w-4xl mx-auto">
          <BookingForm />
        </div>
      </div>
    </div>
  );
}