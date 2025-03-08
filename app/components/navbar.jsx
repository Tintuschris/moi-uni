// components/NavBar.jsx
'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ChevronDown, Search, Twitter, Facebook, Youtube } from 'lucide-react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [staffDropdownOpen, setStaffDropdownOpen] = useState(false);
  const [campusesDropdownOpen, setCampusesDropdownOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const toggleStaffDropdown = () => setStaffDropdownOpen(!staffDropdownOpen);
  const toggleCampusesDropdown = () => setCampusesDropdownOpen(!campusesDropdownOpen);

  return (
    <header className="w-full">
      {/* Top Bar with social media and utilities */}
      <div className="bg-green-800 text-white">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex gap-4">
            <Link href="https://twitter.com" className="hover:text-gray-200">
              <Twitter size={18} />
            </Link>
            <Link href="https://facebook.com" className="hover:text-gray-200">
              <Facebook size={18} />
            </Link>
            <Link href="https://youtube.com" className="hover:text-gray-200">
              <Youtube size={18} />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4 text-sm">
            <Link href="/first-years-2024" className="hover:underline">First-Years 2024</Link>
            <span>|</span>
            <Link href="/alumni" className="hover:underline">Alumni</Link>
            <span>|</span>
            <Link href="/e-learning-portal" className="hover:underline">E-Learning Portal</Link>
            <span>|</span>
            <Link href="/apply-now" className="hover:underline">Apply Now!</Link>
            <span>|</span>
            <Link href="/contacts" className="hover:underline">Contacts</Link>
            
            <div className="relative">
              <button 
                className="flex items-center hover:underline"
                onClick={toggleStaffDropdown}
              >
                Staff <ChevronDown size={16} />
              </button>
              {staffDropdownOpen && (
                <div className="absolute z-10 bg-white text-green-800 p-2 rounded shadow-md">
                  <Link href="/staff-portal" className="block py-1 hover:underline">Staff Portal</Link>
                  <Link href="/staff-directory" className="block py-1 hover:underline">Staff Directory</Link>
                </div>
              )}
            </div>
            
            <div className="relative">
              <button 
                className="flex items-center hover:underline"
                onClick={toggleCampusesDropdown}
              >
                Campuses & Constituent Colleges <ChevronDown size={16} />
              </button>
              {campusesDropdownOpen && (
                <div className="absolute z-10 bg-white text-green-800 p-2 rounded shadow-md">
                  <Link href="/main-campus" className="block py-1 hover:underline">Main Campus</Link>
                  <Link href="/nairobi-campus" className="block py-1 hover:underline">Nairobi Campus</Link>
                  <Link href="/constituent-colleges" className="block py-1 hover:underline">Constituent Colleges</Link>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="relative">
              <input 
                type="text" 
                placeholder="search..." 
                className="bg-white bg-opacity-20 text-white placeholder-gray-200 rounded-full pl-3 pr-8 py-1 text-sm focus:outline-none"
              />
              <Search size={16} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Navbar with Logo and Menu */}
      <div className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-16 w-16">
              {/* Replace with your actual logo */}
              <div className="h-16 w-16 flex items-center justify-center rounded-full border-2 border-green-800 overflow-hidden">
                <div className="h-14 w-14 flex items-center justify-center rounded-full bg-white text-green-800 font-bold">
                  MOI
                </div>
              </div>
            </div>
            <div className="ml-2">
              <h1 className="text-xl md:text-2xl font-serif text-gray-800">Moi University</h1>
              <p className="text-sm italic text-gray-600">Foundation of knowledge</p>
            </div>
          </Link>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleNavbar} className="text-green-800">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 text-green-800">
            <Link href="/" className="hover:text-green-600">Home</Link>
            <Link href="/about-mu" className="hover:text-green-600">About MU</Link>
            <Link href="/admissions" className="hover:text-green-600">Admissions</Link>
            <Link href="/academics" className="hover:text-green-600">Academics</Link>
            <Link href="/students" className="hover:text-green-600">Students</Link>
            <Link href="/research" className="hover:text-green-600">Research</Link>
            <Link href="/media" className="hover:text-green-600">Media</Link>
            <Link href="/library" className="hover:text-green-600">Library</Link>
          </nav>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-green-50 text-green-800">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col space-y-2">
              <Link href="/" className="py-2 hover:text-green-600" onClick={toggleNavbar}>Home</Link>
              <Link href="/about-mu" className="py-2 hover:text-green-600" onClick={toggleNavbar}>About MU</Link>
              <Link href="/admissions" className="py-2 hover:text-green-600" onClick={toggleNavbar}>Admissions</Link>
              <Link href="/academics" className="py-2 hover:text-green-600" onClick={toggleNavbar}>Academics</Link>
              <Link href="/students" className="py-2 hover:text-green-600" onClick={toggleNavbar}>Students</Link>
              <Link href="/research" className="py-2 hover:text-green-600" onClick={toggleNavbar}>Research</Link>
              <Link href="/media" className="py-2 hover:text-green-600" onClick={toggleNavbar}>Media</Link>
              <Link href="/library" className="py-2 hover:text-green-600" onClick={toggleNavbar}>Library</Link>
              
              <div className="border-t border-green-200 pt-2 mt-2">
                <Link href="/first-years-2024" className="py-2 block" onClick={toggleNavbar}>First-Years 2024</Link>
                <Link href="/alumni" className="py-2 block" onClick={toggleNavbar}>Alumni</Link>
                <Link href="/e-learning-portal" className="py-2 block" onClick={toggleNavbar}>E-Learning Portal</Link>
                <Link href="/apply-now" className="py-2 block" onClick={toggleNavbar}>Apply Now!</Link>
                <Link href="/contacts" className="py-2 block" onClick={toggleNavbar}>Contacts</Link>
                
                <button 
                  className="flex items-center py-2 w-full justify-between"
                  onClick={toggleStaffDropdown}
                >
                  Staff <ChevronDown size={16} className={`transform ${staffDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {staffDropdownOpen && (
                  <div className="pl-4 py-1">
                    <Link href="/staff-portal" className="py-1 block" onClick={toggleNavbar}>Staff Portal</Link>
                    <Link href="/staff-directory" className="py-1 block" onClick={toggleNavbar}>Staff Directory</Link>
                  </div>
                )}
                
                <button 
                  className="flex items-center py-2 w-full justify-between"
                  onClick={toggleCampusesDropdown}
                >
                  Campuses & Constituent Colleges <ChevronDown size={16} className={`transform ${campusesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {campusesDropdownOpen && (
                  <div className="pl-4 py-1">
                    <Link href="/main-campus" className="py-1 block" onClick={toggleNavbar}>Main Campus</Link>
                    <Link href="/nairobi-campus" className="py-1 block" onClick={toggleNavbar}>Nairobi Campus</Link>
                    <Link href="/constituent-colleges" className="py-1 block" onClick={toggleNavbar}>Constituent Colleges</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}