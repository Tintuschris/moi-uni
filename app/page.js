// app/page.js (or components/Home.js)
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Header Section */}
      <header className="bg-green-800 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/placeholder-logo.png"
            alt="Moi University Logo"
            width={60}
            height={60}
          />
          <div className="ml-4">
            <h1 className="text-2xl font-bold">Moi University</h1>
            <p className="text-sm">Transformation Through Knowledge</p>
          </div>
        </div>
        <nav className="flex space-x-6">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About MU</Link>
          <Link href="/admissions" className="hover:underline">Admissions</Link>
          <Link href="/students" className="hover:underline">Students</Link>
          <Link href="/research" className="hover:underline">Research</Link>
          <Link href="/library" className="hover:underline">Library</Link>
          <Link href="/contacts" className="hover:underline">Contacts</Link>
        </nav>
      </header>

      {/* Main Banner Section */}
      <main className="bg-gray-100 p-6">
        <section className="bg-white p-6 text-center rounded-lg shadow-md">
          <h2 className="text-4xl font-bold mb-4">
            47<sup>th</sup> Graduation Ceremony Year 2023/2024 Cohort II
          </h2>
          <p className="text-lg mb-4">
            Friday, 28<sup>th</sup> March, 2025 at the Pavilion, Main Campus, Kesses, Uasin Gishu County Starting at 8:00 a.m.
          </p>
          <p className="text-red-600 font-bold text-xl mb-4">Save the Date</p>
          <div className="flex justify-center space-x-4 mb-4">
            <p>We will be live on</p>
            <p>Zoom Meeting ID: 852 2493 8951 | Password: 072027</p>
          </div>
          <div className="flex justify-center space-x-4 mb-4">
            <span>@MoiUniKenya</span> | <span>@moiuniversity</span> | <span>@Moi_University_Kenya</span> | <a href="http://www.mu.ac.ke" className="underline">www.mu.ac.ke</a>
          </div>
          <Image
            src="/placeholder-graduation-banner.jpg"
            alt="Graduation Ceremony Banner with Pavilion Background"
            width={1200}
            height={400}
            className="mx-auto mt-4"
          />
        </section>

        {/* Four-Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          {/* Announcements */}
          <section className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Announcements</h3>
            <ul className="space-y-4">
              <li>
                <Image
                  src="/placeholder-announcement1.jpg"
                  alt="Notice of the 47th Graduation Ceremony 2024-25"
                  width={200}
                  height={150}
                />
                <p className="mt-2">Notice of the 47th Graduation Ceremony 2024-25</p>
              </li>
              <li>
                <Image
                  src="/placeholder-announcement2.jpg"
                  alt="Invitation for Tender Proposal Request 2024-25"
                  width={200}
                  height={150}
                />
                <p className="mt-2">Invitation for Tender Proposal Request 2024-25</p>
              </li>
              <li>
                <Image
                  src="/placeholder-announcement3.jpg"
                  alt="Call for Application Bursary 2024-25"
                  width={200}
                  height={150}
                />
                <p className="mt-2">Call for Application Bursary 2024-25</p>
              </li>
              <li>
                <Image
                  src="/placeholder-announcement4.jpg"
                  alt="Enterprise Management Seminar 2024-25"
                  width={200}
                  height={150}
                />
                <p className="mt-2">Enterprise Management Seminar 2024-25</p>
              </li>
              <li>
                <Image
                  src="/placeholder-announcement5.jpg"
                  alt="Expression of Interest 2024-25"
                  width={200}
                  height={150}
                />
                <p className="mt-2">Expression of Interest 2024-25</p>
              </li>
              <li>
                <Image
                  src="/placeholder-announcement6.jpg"
                  alt="Health Collaborative Research 2024-25"
                  width={200}
                  height={150}
                />
                <p className="mt-2">Health Collaborative Research 2024-25</p>
              </li>
            </ul>
          </section>

          {/* News & Events */}
          <section className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">News & Events</h3>
            <ul className="space-y-4">
              <li>
                <Image
                  src="/placeholder-news1.jpg"
                  alt="Successful Sports Day for Freshmen 18-20 Oct 2024"
                  width={200}
                  height={150}
                />
                <p className="mt-2">Successful Sports Day for Freshmen 18-20 Oct 2024</p>
              </li>
              <li>
                <Image
                  src="/placeholder-news2.jpg"
                  alt="Building World Class Research 2024-2025"
                  width={200}
                  height={150}
                />
                <p className="mt-2">Building World Class Research 2024-2025</p>
              </li>
              <li>
                <Image
                  src="/placeholder-news3.jpg"
                  alt="School of Engineering conducts Staff Mentorship Seminar 2024-2025"
                  width={200}
                  height={150}
                />
                <p className="mt-2">School of Engineering conducts Staff Mentorship Seminar 2024-2025</p>
              </li>
              <li>
                <Image
                  src="/placeholder-news4.jpg"
                  alt="Training Capacity Building 2024-2025"
                  width={200}
                  height={150}
                />
                <p className="mt-2">Training Capacity Building 2024-2025</p>
              </li>
              <li>
                <Image
                  src="/placeholder-news5.jpg"
                  alt="Inauguration of the 16th Moi University Council 2024-2025"
                  width={200}
                  height={150}
                />
                <p className="mt-2">Inauguration of the 16th Moi University Council 2024-2025</p>
              </li>
            </ul>
          </section>

          {/* Research & Innovations */}
          <section className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Research & Innovations</h3>
            <ul className="space-y-4">
              <li>
                <Image
                  src="/placeholder-research1.jpg"
                  alt="Successfully defended PhD & Master Thesis 2024-2025"
                  width={200}
                  height={150}
                />
                <p className="mt-2">Successfully defended PhD & Master Thesis 2024-2025</p>
              </li>
              <li>
                <Image
                  src="/placeholder-research2.jpg"
                  alt="Master and Cultural Maize Dryer address the post-harvest season 2024-2025"
                  width={200}
                  height={150}
                />
                <p className="mt-2">Master and Cultural Maize Dryer address the post-harvest season 2024-2025</p>
              </li>
              <li>
                <Image
                  src="/placeholder-research3.jpg"
                  alt="2021 Issues Kinale, Nakuru County 2024-2025"
                  width={200}
                  height={150}
                />
                <p className="mt-2">2021 Issues Kinale, Nakuru County 2024-2025</p>
              </li>
            </ul>
          </section>

          {/* Quick Links */}
          <section className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">First Year Application</a></li>
              <li><a href="#" className="hover:underline">Student Portal</a></li>
              <li><a href="#" className="hover:underline">Online Application</a></li>
              <li><a href="#" className="hover:underline">Professors Profile</a></li>
              <li><a href="#" className="hover:underline">Room Booking Guide</a></li>
              <li><a href="#" className="hover:underline">Certificates</a></li>
            </ul>
          </section>
        </div>

        {/* Campus Life and Numbers Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <section className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Campus Life</h3>
            <Image
              src="/placeholder-campus-life.jpg"
              alt="Photo of Campus Life at Moi University"
              width={400}
              height={300}
            />
            <p className="mt-2">Click here to view more Photos on Campus Life</p>
            <Image
              src="/placeholder-student-council.jpg"
              alt="3rd Moi University Student Council Group Photo"
              width={400}
              height={200}
              className="mt-4"
            />
            <p className="mt-2">3rd Moi University Student Council</p>
          </section>

          <section className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Moi University in Numbers</h3>
            <ul className="space-y-4 text-lg">
              <li>Students: <span className="font-bold">29,467</span></li>
              <li>Collaborative Programs: <span className="font-bold">242</span></li>
              <li>Professors: <span className="font-bold">123,999</span></li>
            </ul>
          </section>
        </div>

        {/* Chancellor and Intel Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <section className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Chancellor</h3>
            <Image
              src="/placeholder-chancellor.jpg"
              alt="Prof. Isaac Kiplagat Kutut-Vice Chancellor"
              width={200}
              height={200}
            />
            <p className="mt-2">Prof. Isaac Kiplagat Kutut-Vice Chancellor</p>
          </section>

          <section className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Intel</h3>
            <Image
              src="/placeholder-intel.jpg"
              alt="Intel Training and Competency Center"
              width={400}
              height={200}
            />
            <p className="mt-2">Intel Training and Competency Center</p>
            <p className="mt-2 text-red-600">Let’s Continue Ensuring ZERO Corruption</p>
          </section>
        </div>

        {/* Upcoming Events */}
        <section className="bg-white p-4 rounded-lg shadow-md mt-6">
          <h3 className="text-xl font-bold mb-4">Upcoming Events</h3>
          <p>No events scheduled at the moment.</p>
        </section>

        {/* Welcome Section */}
        <section className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h3 className="text-2xl font-bold mb-4">Welcome to Moi University</h3>
          <h4 className="text-xl font-semibold mb-2">Facts You Should Know About MU</h4>
          <p className="text-gray-700">
            Moi University was established by an Act of Parliament (Moi University Act, 1984) as the second public university in Kenya. This was in line with the recommendation of a Presidential Working Party, chaired by Prof. Collins B. E. Meja, which was set up to look into the possibility of establishing a second university in Kenya. The University has, since then, registered tremendous growth, and it remains a center for excellence in the advancement of education at all levels.
          </p>
        </section>

        {/* Image Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <Image
              src="/placeholder-image1.jpg"
              alt="ELIMU Millers"
              width={300}
              height={200}
            />
            <p className="mt-2">ELIMU Millers</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <Image
              src="/placeholder-image2.jpg"
              alt="Library"
              width={300}
              height={200}
            />
            <p className="mt-2">Library</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <Image
              src="/placeholder-image3.jpg"
              alt="DLP Project"
              width={300}
              height={200}
            />
            <p className="mt-2">DLP Project</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <Image
              src="/placeholder-image4.jpg"
              alt="Waterfall"
              width={300}
              height={200}
            />
            <p className="mt-2">Waterfall</p>
          </div>
        </div>

        {/* Vision, Mission, Core Values, Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          <section className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Vision</h3>
            <p>
              To be the University of choice in nurturing innovation and talent in science, technology, and development.
            </p>
          </section>
          <section className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Mission</h3>
            <p>
              To preserve, create, and disseminate knowledge; conserve and develop scientific, technological, and cultural heritage.
            </p>
          </section>
          <section className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Core Values</h3>
            <p>
              Promotion and defense of intellectual and academic freedom, integrity, excellence, and inclusivity.
            </p>
          </section>
          <section className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Philosophy</h3>
            <p>
              Putting knowledge to work is the Moi University mantra, philosophy.
            </p>
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-green-800 text-white p-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <section>
              <h4 className="text-lg font-bold mb-2">About MU</h4>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">University</a></li>
                <li><a href="#" className="hover:underline">Management</a></li>
                <li><a href="#" className="hover:underline">History</a></li>
                <li><a href="#" className="hover:underline">Schools</a></li>
              </ul>
            </section>
            <section>
              <h4 className="text-lg font-bold mb-2">Admissions</h4>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">Diploma</a></li>
                <li><a href="#" className="hover:underline">Undergraduate</a></li>
                <li><a href="#" className="hover:underline">Postgraduate</a></li>
                <li><a href="#" className="hover:underline">KUCCPS Admissions</a></li>
              </ul>
            </section>
            <section>
              <h4 className="text-lg font-bold mb-2">Students</h4>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">Student Portal</a></li>
                <li><a href="#" className="hover:underline">Room Booking Guide</a></li>
                <li><a href="#" className="hover:underline">Certificates</a></li>
              </ul>
            </section>
            <section>
              <h4 className="text-lg font-bold mb-2">Research</h4>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">Directors of Research</a></li>
                <li><a href="#" className="hover:underline">Conference Portal</a></li>
                <li><a href="#" className="hover:underline">Research Committee</a></li>
              </ul>
            </section>
            <section>
              <h4 className="text-lg font-bold mb-2">Contact Us</h4>
              <p>Contact Us</p>
              <p>Take a Tour</p>
              <p>Campus Offices</p>
            </section>
          </div>
          <p className="text-center mt-4">
            © 2025 Moi University. Foundation of Knowledge. All rights reserved. Designed by Moi University, ICT Directorate.
          </p>
        </footer>
      </main>
    </div>
  );
}