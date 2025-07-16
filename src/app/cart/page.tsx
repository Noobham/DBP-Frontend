'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Layout from '../component/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../store/store';
import { serviceType } from '../types';
import { removeService } from '../store/slices/cartSlice';
import axios from 'axios';
import Cookies from 'js-cookie';


export default function CartPage() {
  
  const dispatch = useDispatch();

  const cartItems : serviceType[]  = useSelector((state:AppState)=>state.cart);
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async () => {
    setIsLoading(true);
    const price = 100; // Replace with dynamic price
    try {
      const serviceId:number[]= cartItems.map((item)=>item.serviceId);
      console.log(serviceId)
      const orderResponse = await axios.post("http://localhost:8080/api/payment/create-order",serviceId,{
        headers:{
        Authorization : Cookies.get('authorization')
      }
      });
      const options = {
        key: "rzp_test_OdyU3nxudfh0Jk",
        amount: total*100,
        currency: "INR",
        name: "YOUR_COMPANY_NAME", // Replace with dynamic company name
        description: "Payment for your order", // Replace with dynamic order description
        order_id: orderResponse.data,
        handler: async function (response: any) {
          try {
            console.log(orderResponse.data)
            console.log(response)
            const paymentResponse = await axios.post("http://localhost:8080/api/payment/verify", {
              razorpayOrderId: orderResponse.data,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature,
            },{
              headers:{
                Authorization : Cookies.get('authorization')
              }
            });

            alert(paymentResponse.data);
            console.log(paymentResponse.data);
          } catch (error) {
            alert("Payment verification failed. Please contact support.");
            console.error(error);
          }
        },
        prefill: {
          name: "YOUR_NAME", // Replace with dynamic user data
          email: "YOUR_EMAIL", // Replace with dynamic user data
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razorpay = new (window as any).Razorpay(options);
      razorpay.on("payment.failed", function (response: any) {
        alert("Payment failed");
        console.error(response.error);
      });
      razorpay.open();
    } catch (error) {
      alert("Payment failed. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
    <main className="pt-24 pb-16 px-6 bg-[#f8f9fb] min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-[#243c74] mb-8">Your Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center text-[#5271a3]">
            <p>Your cart is empty.</p>
            <Link
              href="/services"
              className="mt-4 inline-block bg-[#5271a3] text-white px-6 py-2 rounded hover:bg-[#405d86] transition"
            >
              Explore Services
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Cart Items */}
            {cartItems.map((item:serviceType) => (
              <div
                key={item.serviceId}
                className="flex items-center justify-between bg-white p-4 rounded-xl shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20 rounded overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#243c74]">{item.title}</h3>
                    <p className="text-sm text-gray-600">₹{item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() =>{
                    dispatch(removeService(item.serviceId));
                  }
                  }
                  
                  className="text-sm text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Summary Section */}
            <div className="text-right mt-6">
              <h2 className="text-xl font-bold text-[#243c74]">
                Subtotal: ₹{total}
              </h2>
              <div className="mt-4 flex justify-end gap-4">
                <Link
                  href="/services"
                  className="bg-white text-[#5271a3] border border-[#5271a3] px-4 py-2 rounded hover:bg-[#e0ecf8] transition"
                >
                  Continue Shopping
                </Link>
                <button onClick={()=>handlePayment()} className="bg-[#5271a3] text-white px-4 py-2 rounded hover:bg-[#405d86] transition">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
    </Layout>
  );
}
