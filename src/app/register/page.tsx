"use client"
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../component/Layout';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function SignupPage() {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    userPassword: ''
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const registerUser = async ()=>{
      try {
      const res = await axios.post('http://localhost:8080/sign-up', {
        userName: formData.userName,
        userEmail: formData.userEmail,
        userPassword: formData.userPassword,
      });

      if (res.status === 200 || res.status === 201) {
        router.push('/login'); // ✅ Navigate to login page
      } else {
        // Handle error (optional)
        console.error('Registration failed');
      }
    } catch (err) {
      console.error('Error during registration:', err);
    }   
  }


  return (
    <Layout>
    <main className="h-screen flex pt-16 bg-[url('/login-bg.png')] bg-cover ">
      {/* Left Side - Signup Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 sm:px-12 py-16">
        <div className="max-w-md w-full">
          <h1 className="text-4xl font-extrabold text-[#243c74] mb-2">Create Account</h1>
          <p className="text-[#5271a3] mb-6 text-sm">Join Diamond Beauty and start your journey</p>

          <div className="space-y-5">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#243c74]">Full Name</label>
              <input
                type="text"
                id="name"
                name="userName"
                required
                placeholder="Your Name"
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#5271a3]"
                value={formData.userName}
                onChange={(e)=>handleChange(e)}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#243c74]">Email</label>
              <input
                type="email"
                id="email"
                name="userEmail"
                required
                value={formData.userEmail}
                placeholder="you@example.com"
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#5271a3]"
                onChange={(e)=>handleChange(e)}
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#243c74]">Password</label>
              <input
                type="password"
                id="password"
                name="userPassword"
                required
                value={formData.userPassword}
                placeholder="••••••••"
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#5271a3]"
                onChange={(e)=>handleChange(e)}
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={()=>registerUser()}
              className="w-full bg-[#5271a3] text-white py-2 rounded-md hover:bg-[#405d86] transition"
            >
              Sign Up
            </button>
          </div>

          {/* Footer Link */}
          <p className="mt-6 text-center text-sm text-[#405d86]">
            Already have an account?{' '}
            <Link href="/login" className="text-[#5271a3] hover:underline">Log In</Link>
          </p>
        </div>
      </div>

    
    </main>
    </Layout>
  );
}
