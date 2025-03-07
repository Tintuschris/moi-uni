"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-black font-sans">
      {/* Top mini navigation */}
      <div className="bg-green-900 text-white text-xs py-1 px-4 flex justify-between items-center">
        <div className="flex space-x-4">
          <span>First Year 2025</span>
          <span>|</span>
          <span>Alumni</span>
          <span>|</span>
          <span>E-Learning Portal</span>
          <span>|</span>
          <span>Apply Now</span>
          <span>|</span>
          <span>Contact</span>
          <span>|</span>
          <span>Languages & Consultancy College ▾</span>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="py-0.5 px-2 text-xs rounded text-black pr-6"
          />
          <button className="absolute right-1 top-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Header Navigation */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center space-x-3">
              <Image
                src="/placeholder-logo.png"
                alt="Moi University Logo"
                width={60}
                height={60}
              />
              <div>
                <h1 className="text-xl font-bold text-green-800">
                  Moi University
                </h1>
                <p className="text-xs text-green-700">Foundation of Knowledge</p>
              </div>
            </div>
            <nav className="flex space-x-6">
              <Link href="/" className="text-sm font-medium hover:text-green-700">
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium hover:text-green-700"
              >
                About MU
              </Link>
              <Link
                href="/admissions"
                className="text-sm font-medium hover:text-green-700"
              >
                Admissions
              </Link>
              <Link
                href="/academics"
                className="text-sm font-medium hover:text-green-700"
              >
                Academics
              </Link>
              <Link
                href="/students"
                className="text-sm font-medium hover:text-green-700"
              >
                Students
              </Link>
              <Link
                href="/research"
                className="text-sm font-medium hover:text-green-700"
              >
                Research
              </Link>
              <Link
                href="/media"
                className="text-sm font-medium hover:text-green-700"
              >
                Media
              </Link>
              <Link
                href="/library"
                className="text-sm font-medium hover:text-green-700"
              >
                Library
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {/* Main Banner Section - Graduation Ceremony */}
        <section className="relative bg-white rounded-lg shadow-md overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/placeholder-graduation-banner.jpg"
              alt="Graduation Background"
              layout="fill"
              objectFit="cover"
              className="opacity-20"
            />
          </div>

          <div className="relative p-6 flex flex-col items-center">
            <div className="flex flex-col md:flex-row items-center justify-between w-full mb-4">
              <div className="flex-1">
                <div className="flex items-center">
                  <Image
                    src="/placeholder-logo.png"
                    alt="Moi University Logo"
                    width={80}
                    height={80}
                  />
                  <div className="ml-2">
                    <h1 className="text-xl font-bold">Moi University</h1>
                    <p className="text-xs">Foundation of Knowledge</p>
                  </div>
                </div>
              </div>

              <div className="flex-1 text-center">
                <p className="text-red-600 font-bold text-lg">
                  Friday, 28<sup>th</sup> March, 2025 at the Pavilion, Main Campus,
                  <br />
                  Kesses, Uasin Gishu County Starting at 8.00 a.m.
                </p>
              </div>

              <div className="flex-1 flex justify-end">
                <div className="rounded-full bg-yellow-50 border border-yellow-200 p-3 text-center">
                  <p className="text-xs">Theme</p>
                  <p className="text-xs font-medium my-1">
                    Sustainable Development Through Knowledge and Innovation
                  </p>
                </div>
              </div>
            </div>

            <div className="relative mt-6 mb-8">
              <div className="absolute -left-16 top-0 w-28 h-28 rounded-full border-8 border-green-600 flex items-center justify-center">
                <div className="text-green-600 text-center">
                  <p className="text-xs">Save</p>
                  <p className="text-xs">the Date</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="text-6xl font-bold text-green-600">47</div>
                <div className="ml-2">
                  <div className="text-3xl font-bold text-red-600">Graduation</div>
                  <div className="text-xl text-red-600">CEREMONY</div>
                </div>
              </div>

              <div className="text-center mt-2">
                <p className="text-sm font-medium">
                  Academic Year 2023/2024 Cohort II
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-4">
              <div className="flex items-center">
                <p className="text-sm">We will be live on</p>
                <div className="ml-2 flex space-x-2">
                  <span className="inline-block bg-red-100 p-1 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-red-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                      <path d="M14 6a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
                    </svg>
                  </span>
                  <span className="inline-block bg-blue-100 p-1 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-blue-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm">
                  Meeting ID: 852 2493 8951 | Password: 072027
                </p>
              </div>

              <div className="flex justify-end space-x-2">
                <span className="text-xs">@MoiUniKenya</span>
                <span className="text-xs">@moiuniversity</span>
                <span className="text-xs">@Moi_University_Kenya</span>
                <a
                  href="http://www.mu.ac.ke"
                  className="text-xs text-blue-600 underline"
                >
                  www.mu.ac.ke
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Three-Column Content Area */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6">
          {/* Announcements - 3 columns */}
          <section className="md:col-span-3 bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4 border-b-2 border-green-600 pb-2">
              Announcements
            </h3>
            <ul className="space-y-4">
              <li className="border-b pb-3">
                <Image
                  src="/placeholder-announcement1.jpg"
                  alt="Notice of the 47th Graduation Ceremony 2024-25"
                  width={300}
                  height={200}
                  className="mb-2"
                />
                <p className="text-sm font-medium">
                  Notice of the 47th Graduation Ceremony 2024-25
                </p>
                <p className="text-xs text-gray-500">2023-05-15</p>
              </li>
              <li className="border-b pb-3">
                <Image
                  src="/placeholder-announcement2.jpg"
                  alt="Invitation for Tender Proposal Request 2024-25"
                  width={300}
                  height={200}
                  className="mb-2"
                />
                <p className="text-sm font-medium">
                  Invitation for Tender Proposal Request 2024-25
                </p>
                <p className="text-xs text-gray-500">2023-05-12</p>
              </li>
              <li className="border-b pb-3">
                <Image
                  src="/placeholder-announcement3.jpg"
                  alt="Call for Application Bursary 2024-25"
                  width={300}
                  height={200}
                  className="mb-2"
                />
                <p className="text-sm font-medium">
                  Call for Application Bursary 2024-25
                </p>
                <p className="text-xs text-gray-500">2023-05-10</p>
              </li>
              <li className="border-b pb-3">
                <Image
                  src="/placeholder-announcement4.jpg"
                  alt="Enterprise Management Seminar 2024-25"
                  width={300}
                  height={200}
                  className="mb-2"
                />
                <p className="text-sm font-medium">
                  Enterprise Management Seminar 2024-25
                </p>
                <p className="text-xs text-gray-500">2023-05-07</p>
              </li>
              <li className="border-b pb-3">
                <Image
                  src="/placeholder-announcement5.jpg"
                  alt="Expression of Interest 2024-25"
                  width={300}
                  height={200}
                  className="mb-2"
                />
                <p className="text-sm font-medium">Expression of Interest 2024-25</p>
                <p className="text-xs text-gray-500">2023-05-05</p>
              </li>
              <li>
                <Image
                  src="/placeholder-announcement6.jpg"
                  alt="Health Collaborative Research 2024-25"
                  width={300}
                  height={200}
                  className="mb-2"
                />
                <p className="text-sm font-medium">
                  Health Collaborative Research 2024-25
                </p>
                <p className="text-xs text-gray-500">2023-05-02</p>
              </li>
            </ul>
          </section>

          {/* News & Events - 3 columns */}
          <section className="md:col-span-3 bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4 border-b-2 border-green-600 pb-2">
              News & Events
            </h3>
            <ul className="space-y-4">
              <li className="border-b pb-3">
                <Image
                  src="/placeholder-news1.jpg"
                  alt="Successful Sports Day for Freshmen 18-20 Oct 2024"
                  width={300}
                  height={200}
                  className="mb-2"
                />
                <p className="text-sm font-medium">
                  Successful Sports Day for Freshmen 18-20 Oct 2024
                </p>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Oct. 21</span>
                  <a href="#" className="text-blue-600">
                    More
                  </a>
                </div>
              </li>
              <li className="border-b pb-3">
                <Image
                  src="/placeholder-news2.jpg"
                  alt="Building World Class Research 2024-2025"
                  width={300}
                  height={200}
                  className="mb-2"
                />
                <p className="text-sm font-medium">
                  Building World Class Research 2024-2025
                </p>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Oct. 18</span>
                  <a href="#" className="text-blue-600">
                    More
                  </a>
                </div>
              </li>
              <li className="border-b pb-3">
                <Image
                  src="/placeholder-news3.jpg"
                  alt="School of Engineering conducts Staff Mentorship Seminar 2024-2025"
                  width={300}
                  height={200}
                  className="mb-2"
                />
                <p className="text-sm font-medium">
                  School of Engineering conducts Staff Mentorship Seminar 2024-2025
                </p>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Oct. 15</span>
                  <a href="#" className="text-blue-600">
                    More
                  </a>
                </div>
              </li>
              <li className="border-b pb-3">
                <Image
                  src="/placeholder-news4.jpg"
                  alt="Training Capacity Building 2024-2025"
                  width={300}
                  height={200}
                  className="mb-2"
                />
                <p className="text-sm font-medium">
                  Training Capacity Building 2024-2025
                </p>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Oct. 10</span>
                  <a href="#" className="text-blue-600">
                    More
                  </a>
                </div>
              </li>
              <li>
                <Image
                  src="/placeholder-news5.jpg"
                  alt="Inauguration of the 16th Moi University Council 2024-2025"
                  width={300}
                  height={200}
                  className="mb-2"
                />
                <p className="text-sm font-medium">
                  Inauguration of the 16th Moi University Council 2024-2025
                </p>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Oct. 05</span>
                  <a href="#" className="text-blue-600">
                    More
                  </a>
                </div>
              </li>
            </ul>
          </section>

          {/* Research & Innovations - 3 columns */}
          <section className="md:col-span-3 bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4 border-b-2 border-green-600 pb-2">
              Research & Innovations
            </h3>
            <ul className="space-y-4">
              <li className="border-b pb-3">
                <Image
                  src="/placeholder-research1.jpg"
                  alt="Successfully defended PhD & Master Thesis 2024-2025"
                  width={300}
                  height={200}
                  className="mb-2"
                />
                <p className="text-sm font-medium">
                  Successfully defended PhD & Master Thesis 2024-2025
                </p>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>2023-09-25</span>
                  <a href="#" className="text-blue-600">
                    Read more
                  </a>
                </div>
              </li>
              <li className="border-b pb-3">
                <Image
                  src="/placeholder-research2.jpg"
                  alt="Master and Cultural Maize Dryer address the post-harvest season 2024-2025"
                  width={300}
                  height={200}
                  className="mb-2"
                />
                <p className="text-sm font-medium">
                  Master and Cultural Maize Dryer address the post-harvest season
                  2024-2025
                </p>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>2023-09-20</span>
                  <a href="#" className="text-blue-600">
                    Read more
                  </a>
                </div>
              </li>
              <li>
                <Image
                  src="/placeholder-research3.jpg"
                  alt="2021 Issues Kinale, Nakuru County 2024-2025"
                  width={300}
                  height={200}
                  className="mb-2"
                />
                <p className="text-sm font-medium">
                  2021 Issues Kinale, Nakuru County 2024-2025
                </p>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>2023-09-15</span>
                  <a href="#" className="text-blue-600">
                    Read more
                  </a>
                </div>
              </li>
            </ul>
          </section>

          {/* Quick Links - 3 columns */}
          <section className="md:col-span-3 bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4 border-b-2 border-green-600 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li className="border-b pb-2">
                <a
                  href="#"
                  className="flex items-center text-sm hover:text-green-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  First Year Application
                </a>
              </li>
              <li className="border-b pb-2">
                <a
                  href="#"
                  className="flex items-center text-sm hover:text-green-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Student Portal
                </a>
              </li>
              <li className="border-b pb-2">
                <a
                  href="#"
                  className="flex items-center text-sm hover:text-green-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Online Application
                </a>
              </li>
              <li className="border-b pb-2">
                <a
                  href="#"
                  className="flex items-center text-sm hover:text-green-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Professors Profile
                </a>
              </li>
              <li className="border-b pb-2">
                <a
                  href="#"
                  className="flex items-center text-sm hover:text-green-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Room Booking Guide
                </a>
              </li>
              <li className="border-b pb-2">
                <a
                  href="#"
                  className="flex items-center text-sm hover:text-green-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Certificates
                </a>
              </li>
              <li className="border-b pb-2">
                <a
                  href="#"
                  className="flex items-center text-sm hover:text-green-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  MU Students
                </a>
              </li>
              <li className="border-b pb-2">
                <a
                  href="#"
                  className="flex items-center text-sm hover:text-green-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Tender Notices
                </a>
              </li>
              <li className="border-b pb-2">
                <a
                  href="#"
                  className="flex items-center text-sm hover:text-green-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Career Opportunities
                </a>
              </li>
              <li className="border-b pb-2">
                <a
                  href="#"
                  className="flex items-center text-sm hover:text-green-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  List of Programmes Offered
                </a>
              </li>
              <li className="border-b pb-2">
                <a
                  href="#"
                  className="flex items-center text-sm hover:text-green-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Alumni Association
                </a>
              </li>
            </ul>
          </section>
        </div>

        {/* Campus Life and University in Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Campus Life */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-green-600 pb-2">
              Campus Life
            </h3>
            <p className="text-sm mb-4">
              Please Click for More Photos on Campus Life
            </p>

            <Image
              src="/placeholder-campus-life.jpg"
              alt="Campus Life"
              width={600}
              height={300}
              className="w-full h-auto rounded-md mb-4"
            />

            <div className="mt-6">
              <h4 className="text-lg font-bold mb-2">
                3<sup>rd</sup> Moi University Student Council
              </h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src="/placeholder-student1.jpg"
                      alt="Student Council Member"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs text-center mt-1">@studentname</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src="/placeholder-student2.jpg"
                      alt="Student Council Member"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs text-center mt-1">@studentname</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src="/placeholder-student3.jpg"
                      alt="Student Council Member"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs text-center mt-1">@studentname</p>
                </div>
              </div>
            </div>
          </div>

          {/* University in Numbers */}
          <div className="bg-green-700 text-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-white pb-2">
              Moi University in numbers
            </h3>

            <div className="grid grid-cols-1 gap-6 mt-6">
              <div className="flex items-center">
                <div className="bg-white rounded-full p-3 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-3xl font-bold">29,467</p>
                  <p className="text-sm">Students Enrolled</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-white rounded-full p-3 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-3xl font-bold">242</p>
                  <p className="text-sm">Collaborative Programs</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-white rounded-full p-3 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-3xl font-bold">123,999</p>
                  <p className="text-sm">Professors</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        ### New Sections Added Below

        #### Chancellor & Intel Section
        ```jsx
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Chancellor */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Chancellor</h3>
            <Image
              src="/placeholder-chancellor.jpg"
              alt="Prof. Isaac Kiplagat Kutut-Vice Chancellor"
              width={200}
              height={200}
              className="mx-auto"
            />
            <p className="mt-2 text-center">
              Prof. Isaac Kiplagat Kutut-Vice Chancellor
            </p>
          </div>
          {/* Intel */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Intel</h3>
            <Image
              src="/placeholder-intel.jpg"
              alt="Intel Training and Competency Center"
              width={400}
              height={200}
              className="w-full h-auto"
            />
            <p className="mt-2">Intel Training and Competency Center</p>
            <p className="mt-2 text-red-600">
              Let’s Continue Ensuring ZERO Corruption
            </p>
          </div>
        </div>
        ```

        #### Upcoming Events Section
        ```jsx
        <section className="bg-white p-4 rounded-lg shadow-md mt-6">
          <h3 className="text-xl font-bold mb-4">Upcoming Events</h3>
          <p className="text-gray-700">No events scheduled at the moment.</p>
        </section>
        ```

        #### Welcome Section
        ```jsx
        <section className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h3 className="text-2xl font-bold mb-4">Welcome to Moi University</h3>
          <h4 className="text-xl font-semibold mb-2">
            Facts You Should Know About MU
          </h4>
          <p className="text-gray-700">
            Moi University was established by an Act of Parliament (Moi University
            Act, 1984) as the second public university in Kenya. This was in line
            with the recommendation of a Presidential Working Party, chaired by
            Prof. Collins B. E. Meja, which was set up to look into the possibility
            of establishing a second university in Kenya. The University has,
            since then, registered tremendous growth, and it remains a center for
            excellence in the advancement of education at all levels.
          </p>
        </section>
        ```

        #### Image Row Section
        ```jsx
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <Image
              src="/placeholder-image1.jpg"
              alt="ELIMU Millers"
              width={300}
              height={200}
              className="mx-auto"
            />
            <p className="mt-2">ELIMU Millers</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <Image
              src="/placeholder-image2.jpg"
              alt="Library"
              width={300}
              height={200}
              className="mx-auto"
            />
            <p className="mt-2">Library</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <Image
              src="/placeholder-image3.jpg"
              alt="DLP Project"
              width={300}
              height={200}
              className="mx-auto"
            />
            <p className="mt-2">DLP Project</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <Image
              src="/placeholder-image4.jpg"
              alt="Waterfall"
              width={300}
              height={200}
              className="mx-auto"
            />
            <p className="mt-2">Waterfall</p>
          </div>
        </div>
        ```

        #### Vision, Mission, Core Values, Philosophy Section
        ```jsx
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Vision</h3>
            <p className="text-gray-700">
              To be the University of choice in nurturing innovation and talent in
              science, technology, and development.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Mission</h3>
            <p className="text-gray-700">
              To preserve, create, and disseminate knowledge; conserve and develop
              scientific, technological, and cultural heritage.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Core Values</h3>
            <p className="text-gray-700">
              Promotion and defense of intellectual and academic freedom,
              integrity, excellence, and inclusivity.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Philosophy</h3>
            <p className="text-gray-700">
              Putting knowledge to work is the Moi University mantra, philosophy.
            </p>
          </div>
        </div>
        ```
      </main>

      #### Redesigned Footer
      ```jsx
      <footer className="bg-green-800 text-white mt-6">
        <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-5 gap-6">
          <section>
            <h4 className="text-lg font-bold mb-2">About MU</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  University
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  History
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Schools
                </a>
              </li>
            </ul>
          </section>
          <section>
            <h4 className="text-lg font-bold mb-2">Admissions</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Diploma
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Undergraduate
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Postgraduate
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  KUCCPS Admissions
                </a>
              </li>
            </ul>
          </section>
          <section>
            <h4 className="text-lg font-bold mb-2">Students</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Student Portal
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Room Booking Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Certificates
                </a>
              </li>
            </ul>
          </section>
          <section>
            <h4 className="text-lg font-bold mb-2">Research</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Directors of Research
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Conference Portal
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Research Committee
                </a>
              </li>
            </ul>
          </section>
          <section>
            <h4 className="text-lg font-bold mb-2">Contact Us</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Take a Tour
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Campus Offices
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="border-t border-green-700 py-4">
          <p className="text-center text-xs">
            © 2025 Moi University. Foundation of Knowledge. All rights reserved.
            Designed by Moi University, ICT Directorate.
          </p>
        </div>
      </footer>
    </div>
  );
}