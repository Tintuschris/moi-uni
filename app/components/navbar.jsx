// components/NavBar.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  Search,
  Twitter,
  Facebook,
  Youtube,
} from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [staffDropdownOpen, setStaffDropdownOpen] = useState(false);
  const [campusesDropdownOpen, setCampusesDropdownOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const toggleStaffDropdown = () => setStaffDropdownOpen(!staffDropdownOpen);
  const toggleCampusesDropdown = () =>
    setCampusesDropdownOpen(!campusesDropdownOpen);

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
            <Link href="#" className="hover:underline">
              First-Years 2024
            </Link>
            <span>|</span>
            <Link href="#" className="hover:underline">
              Alumni
            </Link>
            <span>|</span>
            <Link href="#" className="hover:underline">
              E-Learning Portal
            </Link>
            <span>|</span>
            <Link href="#" className="hover:underline">
              Apply Now!
            </Link>
            <span>|</span>
            <Link href="/contacts" className="hover:underline">
              Contacts
            </Link>

            <div className="relative">
              <button
                className="flex items-center hover:underline"
                onClick={toggleStaffDropdown}
              >
                Staff <ChevronDown size={16} />
              </button>
              {staffDropdownOpen && (
                <div className="absolute z-10 bg-white text-green-800 p-2 rounded shadow-md">
                  <Link
                    href="/admin"
                    className="block py-1 hover:underline"
                  >
                    Staff Portal
                  </Link>
                  <Link
                    href="#"
                    className="block py-1 hover:underline"
                  >
                    Staff Directory
                  </Link>
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
                  <Link
                    href="#"
                    className="block py-1 hover:underline"
                  >
                    Main Campus
                  </Link>
                  <Link
                    href="#"
                    className="block py-1 hover:underline"
                  >
                    Nairobi Campus
                  </Link>
                  <Link
                    href="#"
                    className="block py-1 hover:underline"
                  >
                    Constituent Colleges
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-white/20 text-white placeholder-gray-200 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 w-[200px] transition-all"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200 transition-colors">
                <Search size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar with Logo and Menu */}
      <div className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Moi University Logo"
              width={240}
              height={100}
            />
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleNavbar} className="text-green-800">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 text-green-800">
            <Link href="/" className="hover:text-green-600">
              Home
            </Link>
            <Link href="#" className="hover:text-green-600">
              About MU
            </Link>
            <Link href="#" className="hover:text-green-600">
              Admissions
            </Link>
            <Link href="#" className="hover:text-green-600">
              Academics
            </Link>
            <Link href="/portal" className="hover:text-green-600">
              Students
            </Link>
            <Link href="#" className="hover:text-green-600">
              Research
            </Link>
            <Link href="#" className="hover:text-green-600">
              Media
            </Link>
            <Link href="#" className="hover:text-green-600">
              Library
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-green-50 text-green-800">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                className="py-2 hover:text-green-600"
                onClick={toggleNavbar}
              >
                Home
              </Link>
              <Link
                href="#"
                className="py-2 hover:text-green-600"
                onClick={toggleNavbar}
              >
                About MU
              </Link>
              <Link
                href="#"
                className="py-2 hover:text-green-600"
                onClick={toggleNavbar}
              >
                Admissions
              </Link>
              <Link
                href="#"
                className="py-2 hover:text-green-600"
                onClick={toggleNavbar}
              >
                Academics
              </Link>
              <Link
                href="#"
                className="py-2 hover:text-green-600"
                onClick={toggleNavbar}
              >
                Students
              </Link>
              <Link
                href="#"
                className="py-2 hover:text-green-600"
                onClick={toggleNavbar}
              >
                Research
              </Link>
              <Link
                href="#"
                className="py-2 hover:text-green-600"
                onClick={toggleNavbar}
              >
                Media
              </Link>
              <Link
                href="#"
                className="py-2 hover:text-green-600"
                onClick={toggleNavbar}
              >
                Library
              </Link>

              <div className="border-t border-green-200 pt-2 mt-2">
                <Link
                  href="#"
                  className="py-2 block"
                  onClick={toggleNavbar}
                >
                  First-Years 2024
                </Link>
                <Link
                  href="#"
                  className="py-2 block"
                  onClick={toggleNavbar}
                >
                  Alumni
                </Link>
                <Link
                  href="#"
                  className="py-2 block"
                  onClick={toggleNavbar}
                >
                  E-Learning Portal
                </Link>
                <Link
                  href="#"
                  className="py-2 block"
                  onClick={toggleNavbar}
                >
                  Apply Now!
                </Link>
                <Link
                  href="#"
                  className="py-2 block"
                  onClick={toggleNavbar}
                >
                  Contacts
                </Link>

                <button
                  className="flex items-center py-2 w-full justify-between"
                  onClick={toggleStaffDropdown}
                >
                  Staff{" "}
                  <ChevronDown
                    size={16}
                    className={`transform ${
                      staffDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {staffDropdownOpen && (
                  <div className="pl-4 py-1">
                    <Link
                      href="/admin"
                      className="py-1 block"
                      onClick={toggleNavbar}
                    >
                      Staff Portal
                    </Link>
                    <Link
                      href="#"
                      className="py-1 block"
                      onClick={toggleNavbar}
                    >
                      Staff Directory
                    </Link>
                  </div>
                )}

                <button
                  className="flex items-center py-2 w-full justify-between"
                  onClick={toggleCampusesDropdown}
                >
                  Campuses & Constituent Colleges{" "}
                  <ChevronDown
                    size={16}
                    className={`transform ${
                      campusesDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {campusesDropdownOpen && (
                  <div className="pl-4 py-1">
                    <Link
                      href="#"
                      className="py-1 block"
                      onClick={toggleNavbar}
                    >
                      Main Campus
                    </Link>
                    <Link
                      href="#"
                      className="py-1 block"
                      onClick={toggleNavbar}
                    >
                      Nairobi Campus
                    </Link>
                    <Link
                      href="#"
                      className="py-1 block"
                      onClick={toggleNavbar}
                    >
                      Constituent Colleges
                    </Link>
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
