'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { AppState } from '../store/store';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Navbar = () => {
  let cartLength = useSelector((state:AppState)=>state.cart).length;
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = Cookies.get('authorization');
    setToken(storedToken || null);
  }, []);
  
  const handleLogout = () => Cookies.remove("authorization");
  
  return (
    <header className="bg-[#e0ecf8] shadow-md sticky top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Diamond Beauty Logo"
            width={40}
            height={40}
            className="h-14 w-14 object-contain"
          />
          <span className="text-2xl font-semibold text-[#243c74] tracking-wide font-serif italic">
    Diamond Beauty
  </span>

        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <Link href="#home" className="text-[#243c74] hover:text-[#5271a3]">Home</Link>
          <Link href="#about" className="text-[#243c74] hover:text-[#5271a3]">About</Link>
          <Link href="#services" className="text-[#243c74] hover:text-[#5271a3]">Services</Link>
          <Link href="#gallery" className="text-[#243c74] hover:text-[#5271a3]">Gallery</Link>
          <Link href="#contact" className="text-[#243c74] hover:text-[#5271a3]">Contact</Link>
          {token == null ? (
    <Link href="#contact" className="text-[#243c74] hover:text-[#5271a3]">
      Login
    </Link>
  ) : (
    <>
      {/* Cart Icon with Count */}
      <Link href="/cart" className="relative">
        <svg
          className="w-6 h-6 text-[#243c74] hover:text-[#5271a3]"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.35 2.7A2 2 0 008.4 19h7.2a2 2 0 001.75-3.3L17 13"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="absolute -top-1 -right-2 bg-pink-500 text-white text-xs rounded-full px-1.5">
          {cartLength}
        </span>
      </Link>

      {/* Profile Icon */}
      <Link href="/profile">
        <svg
          className="w-6 h-6 text-[#243c74] hover:text-[#5271a3] transition"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.121 17.804A9 9 0 0112 15a9 9 0 016.879 2.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </Link>
    </>
  )}
          
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden relative">
          <input type="checkbox" id="menu-toggle" className="peer hidden" />
          <label htmlFor="menu-toggle" className="cursor-pointer">
            <svg className="w-6 h-6 text-[#243c74]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>

          {/* Mobile Dropdown */}
          <div className="absolute right-0 mt-2 w-48 bg-[#e0ecf8] border border-[#cbd5e1] rounded-md shadow-md hidden peer-checked:block">
            <nav className="flex flex-col p-4 space-y-2">
              <Link href="#home" className="text-[#243c74] hover:text-[#5271a3]">Home</Link>
              <Link href="#about" className="text-[#243c74] hover:text-[#5271a3]">About</Link>
              <Link href="#services" className="text-[#243c74] hover:text-[#5271a3]">Services</Link>
              <Link href="#gallery" className="text-[#243c74] hover:text-[#5271a3]">Gallery</Link>
              <Link href="#contact" className="text-[#243c74] hover:text-[#5271a3]">Contact</Link>
              {
                token==null ?
                <Link href="#contact" className="text-[#243c74] hover:text-[#5271a3]">Login</Link> :(<>
                <Link href="/cart" className="relative">
                  <svg className="w-6 h-6 text-[#243c74] hover:text-[#5271a3]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.35 2.7A2 2 0 008.4 19h7.2a2 2 0 001.75-3.3L17 13" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {/* Optionally add item count bubble */}
                  <span className="absolute -top-1 -right-2 bg-pink-500 text-white text-xs rounded-full px-1.5">{cartLength}</span>
                </Link>
                <button onClick={()=>router.push("/profile")}>
            <svg
              className="w-6 h-6 text-[#243c74] hover:text-[#5271a3] transition"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A9 9 0 0112 15a9 9 0 016.879 2.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
                </>)
              }
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
