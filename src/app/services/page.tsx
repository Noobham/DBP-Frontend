'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Layout from '../component/Layout';
import { serviceType } from '../types';
import { useDispatch } from 'react-redux';
import { addService } from '../store/slices/cartSlice';
import Cookies from "js-cookie";
import axios from 'axios';
import { useRouter } from 'next/navigation';


const service = [
  {
    id: 1,
    title: 'Hair Straightening',
    description: 'Smooth and sleek permanent hair straightening.',
    price: 1200,
    image: '/hair-straightening.png',
    category: 'Hair',
  },
  {
    id: 2,
    title: 'Tan Removal',
    description: 'Advanced de-tan therapy for glowing skin.',
    price: 600,
    image: '/tan-removal.png',
    category: 'Skincare',
  },
  {
    id: 3,
    title: 'Hair Spa',
    description: 'Relaxing and nourishing hair treatment.',
    price: 800,
    image: '/hair-spa.png',
    category: 'Hair',
  },
  {
    id: 4,
    title: 'Bridal Makeup',
    description: 'Luxurious bridal makeup for your special day.',
    price: 3500,
    image: '/bridal-makeup.png',
    category: 'Makeup',
  },
  {
    id: 5,
    title: 'Party Makeup',
    description: 'Get ready for parties and celebrations.',
    price: 1500,
    image: '/full-body-waxing.png',
    category: 'Makeup',
  },
  {
    id: 6,
    title: 'Facial Glow Treatment',
    description: 'Revitalize your skin with glow-boosting facial.',
    price: 900,
    image: '/facial-glow.png',
    category: 'Skincare',
  },
  {
    id: 7,
    title: 'Anti-Aging Facial',
    description: 'Reduce fine lines and rejuvenate your skin.',
    price: 1100,
    image: '/anti-aging.png',
    category: 'Skincare',
  },
  {
    id: 8,
    title: 'Full Body Waxing',
    description: 'Smooth skin with our full-body waxing package.',
    price: 1300,
    image: '/full-body-waxing.png',
    category: 'Grooming',
  },
  {
    id: 9,
    title: 'Hair Color',
    description: 'Trendy and safe hair coloring services.',
    price: 2000,
    image: '/hair-color.png',
    category: 'Hair',
  },
  {
    id: 10,
    title: 'Manicure & Pedicure',
    description: 'Hand and foot grooming with massage.',
    price: 700,
    image: '/manicure.png',
    category: 'Grooming',
  },
];

export default function ServicesPage() {
  const [cart, setCart] = useState<serviceType[]>([]);
  const [services,setServices] = useState<serviceType[]>([]);
  const dispatch = useDispatch();
  const router = useRouter();

  const addToCart = (service:serviceType) => {
    setCart((prev) => [...prev, service]);
  };

  const getService =  async () =>{
    try{
      const response = await axios.get("http://localhost:8080/service",{
      headers:{
        Authorization : Cookies.get('authorization')
      }
    });
    setServices(response.data);
    }catch(e){
      Cookies.remove("authorization")
      router.push("/login")
    }
  }

  useEffect(()=>{
    getService();
  },[])

  return (
    <Layout>
    <main className="pt-10 px-6 pb-16 bg-[#f8f9fb] min-h-screen">
      <section className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-[#243c74] text-center mb-10">
          Book Our Services
        </h1>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8">
          {services && services.map((service:serviceType) => (
            <div
              key={service.serviceId}
              className="bg-white rounded-xl shadow-md p-4 pt-6 hover:shadow-lg transition"
            >
              <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  // sizes='4'
                  className="object-cover"
                />
              </div>
              <span className="inline-block bg-[#e0ecf8] text-[#5271a3] text-xs font-semibold px-3 py-1 rounded-full mb-2">
                {service.category}
              </span>
              <h3 className="text-lg font-bold text-[#243c74]">{service.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{service.description}</p>
              <p className="text-[#5271a3] mt-2 font-medium">₹{service.price}</p>
              <button
                onClick={() => dispatch(addService(service))}
                className="mt-4 w-full bg-[#5271a3] text-white py-2 rounded hover:bg-[#405d86] transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        
      </section>
    </main>
    </Layout>
  );
}
