'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import Layout from '../component/Layout';

interface Service {
  serviceId: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
}

interface Booking {
  id: number;
  orderId: string | null;
  paymentId: string | null;
  signatureId: string | null;
  status: string | null;
  date: string | null;
  time: string;
  services: Service[];
}

export default function MyBookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const router = useRouter();

  const fetchBookings = async () => {
    try {
      const res = await axios.get('http://localhost:8080/book', {
        headers: {
          Authorization: Cookies.get('authorization') || '',
        },
      });
      setBookings(res.data);
    } catch (err) {
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <Layout>
      <main className="min-h-screen bg-[#f8f9fb] pt-20 px-6 pb-16">
        <h1 className="text-4xl font-bold text-center text-[#243c74] mb-10">
          My Bookings
        </h1>

        {bookings.length === 0 ? (
          <p className="text-center text-[#5271a3]">You have no bookings yet.</p>
        ) : (
          <div className="space-y-10 max-w-6xl mx-auto">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
              >
                <div className="mb-4">
                  <h2 className="text-2xl font-semibold text-[#243c74]">
                    Booking #{booking.id}
                  </h2>
                  <p className="text-sm text-[#5271a3] mt-1">
                    Order ID: {booking.orderId || '—'} | Payment ID: {booking.paymentId || '—'}
                  </p>
                  <p className="text-sm text-[#5271a3] mt-1">
                    Time: {booking.time || '—'} | Date: {booking.date ? new Date(booking.date).toLocaleDateString() : '—'}
                  </p>
                  <p className="text-sm font-medium mt-2 text-green-600">
                    Status: {booking.status || 'Pending'}
                  </p>
                </div>

                {booking.services.length === 0 ? (
                  <p className="text-gray-500 italic">No services found in this booking.</p>
                ) : (
                  <div className="grid md:grid-cols-2 gap-4">
                    {booking.services.map((service) => (
                      <div key={service.serviceId} className="flex bg-[#f1f5fc] p-4 rounded-lg shadow-sm">
                        <div className="relative w-24 h-24 mr-4 rounded overflow-hidden">
                          <Image
                            src={service.image}
                            alt={service.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <h3 className="text-lg font-semibold text-[#243c74]">{service.name}</h3>
                          <p className="text-sm text-gray-600">{service.category}</p>
                          <p className="text-[#5271a3] font-medium">₹{service.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </Layout>
  );
}
