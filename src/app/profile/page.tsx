'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { userType } from '../types';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
    const [user,setUser] = useState<userType>();
    const router = useRouter();

    const getLoggedInUser = async ()=>{
        try{
            const response = await axios.get("http://localhost:8080/profile",{
            headers:{
                Authorization : Cookies.get('authorization')
            }
        });
        setUser(response.data);
        }catch(e){
            Cookies.remove("authorization")
            router.push("/login")
        }
    }

    useEffect(()=>{
        getLoggedInUser();
    },[]);
  return (
    <main className="min-h-screen pt-20 bg-[#f8f9fb] text-[#243c74] px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        {/* Profile Heading */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
          {/* Avatar */}
          <div className="w-32 h-32 relative rounded-full overflow-hidden shadow-md">
            <Image
              src="/icons/profile.png"
              alt="User Profile"
              fill
              className="object-cover"
            />
          </div>

          {/* User Info */}
          <div>
            <h1 className="text-3xl font-bold">Welcome, {user?.userName}</h1>
            <p className="text-[#5271a3] mt-1">Email: {user?.userEmail}</p>
            <p className="text-sm text-[#405d86] mt-2">Member since: Jan 2024</p>
          </div>
        </div>

        {/* User Settings */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-[#243c74]">Full Name</label>
            <input
              type="text"
              defaultValue={user?.userName}
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#5271a3]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#243c74]">Email</label>
            <input
              type="email"
              defaultValue={user?.userEmail}
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#5271a3]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#243c74]">New Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#5271a3]"
            />
          </div>

          <button className="bg-[#5271a3] text-white px-6 py-2 rounded-md hover:bg-[#405d86] transition">
            Update Profile
          </button>
        </div>
      </div>
    </main>
  );
}
