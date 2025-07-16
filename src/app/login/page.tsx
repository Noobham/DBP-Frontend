'use client';
import Link from 'next/link';
import Cookies from "js-cookie"
import Layout from '../component/Layout';
import { useEffect, useState } from 'react';
import { loginFormType } from '../types';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [loading,setLoading] = useState<boolean>(true)
  const router = useRouter();
  useEffect(() => {
    const token = Cookies.get("authorization");
    if (token) {
      router.push("/");
    }else{
      setLoading(false);
    }
  }, []);

  const [loginForm,setLoginForm] = useState<loginFormType>({
    userEmail:'',
    userPassword:''
  });

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value} = e.target;
    setLoginForm((prev)=>(
      {...prev,
        [name]:value,
      }
    ))
  }

  const login = async () => {
    try {
      const response = await axios.post("http://localhost:8080/login", {
        userEmail: loginForm.userEmail,
        userPassword: loginForm.userPassword
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      // store token in cookies 
      console.log(response.headers);
      Cookies.set("authorization",response.headers.authorization,{
        expires:7,
        secure:true
      })
      router.push('/');
    } catch (err:any) {
      console.error("Login failed", err.response?.data || err.message);
    }

  };
  if(loading==true){
    return <>Loading...</>
  }
  return (
    <Layout>
    <main className="min-h-screen flex pt-16 bg-[url('/login-bg.png')] bg-cover **bg-center**">
      {/* Left Side - Login Form */}
      <div className="w-full md:w-1/2  flex items-center justify-center px-6 sm:px-12 py-16">
        <div className="max-w-md w-full">
          <h1 className="text-4xl font-extrabold text-[#243c74] mb-2">Welcome Back</h1>
          <p className="text-[#5271a3] mb-6 text-sm">Login to access your beauty dashboard</p>

          <div className="space-y-5">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#243c74]">Email</label>
              <input
                type="email"
                id="email"
                name="userEmail"
                required
                onChange={(e)=>handleChange(e)}
                placeholder="you@example.com"
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#5271a3]"
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
                onChange={(e)=>handleChange(e)}
                placeholder="••••••••"
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#5271a3]"
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={()=>login()}
              className="w-full bg-[#5271a3] text-white py-2 rounded-md hover:bg-[#405d86] transition"
            >
              Log In
            </button>
          </div>

          {/* Footer Links */}
          <p className="mt-6 text-center text-sm text-[#405d86]">
            Don’t have an account?{' '}
            <Link href="/register" className="text-[#5271a3] hover:underline">Sign up</Link>
          </p>
        </div>
      </div>

      {/* Right Side - Illustration */}
      {/* <div className="hidden md:block w-1/2 relative">
        <Image
          src="/login-bg.png"
          alt="Login Illustration"
          fill
          objectFit=''
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#f8f9fb]/60 to-transparent" /> */}
      {/* </div> */}
    </main>
    </Layout>
  );
}
