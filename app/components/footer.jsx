import Link from 'next/link';
import { Facebook, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white px-6 pb-0">
      {/* Columns Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full py-8">
        {/* Column 1: About MU */}
        <div>
          <h3 className="text-lg font-bold uppercase mb-3">About MU //</h3>
          <ul className="space-y-1.5">
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/management" className="hover:underline">University Management</Link></li>
            <li><Link href="/history" className="hover:underline">Historical background</Link></li>
            <li><Link href="/offices" className="hover:underline">Administrative offices</Link></li>
            <li><Link href="/schools" className="hover:underline">Schools</Link></li>
          </ul>
        </div>

        {/* Column 2: Admissions */}
        <div>
          <h3 className="text-lg font-bold uppercase mb-3">Admissions //</h3>
          <ul className="space-y-1.5">
            <li><Link href="/diploma" className="hover:underline">Diploma</Link></li>
            <li><Link href="/undergraduate" className="hover:underline">Undergraduate</Link></li>
            <li><Link href="/postgraduate" className="hover:underline">Postgraduate</Link></li>
            <li><Link href="/private" className="hover:underline">Privately Sponsored</Link></li>
            <li><Link href="/programmes" className="hover:underline">Our Programmes</Link></li>
            <li><Link href="/kuccps" className="hover:underline">KUCCPS Admission</Link></li>
          </ul>
        </div>

        {/* Column 3: Students */}
        <div>
          <h3 className="text-lg font-bold uppercase mb-3">Students //</h3>
          <ul className="space-y-1.5">
            <li><Link href="/portal" className="hover:underline">Student Portal</Link></li>
            <li><Link href="/email" className="hover:underline">Student Email</Link></li>
            <li><Link href="/rooms" className="hover:underline">Room Booking Guide</Link></li>
            <li><Link href="/exams" className="hover:underline">Examination Timetables</Link></li>
            <li><Link href="/downloads" className="hover:underline">Downloads</Link></li>
            <li><Link href="/international" className="hover:underline">International students</Link></li>
            <li><Link href="/alumni" className="hover:underline">Alumni</Link></li>
            <li><Link href="/certificates" className="hover:underline">Certificates & Transcripts</Link></li>
          </ul>
        </div>

        {/* Column 4: Research */}
        <div>
          <h3 className="text-lg font-bold uppercase mb-3">Research //</h3>
          <ul className="space-y-1.5">
            <li><Link href="/scholars" className="hover:underline">MU Scholars</Link></li>
            <li><Link href="/research" className="hover:underline">Directorate of Research</Link></li>
            <li><Link href="/excellence" className="hover:underline">Centres of Excellence</Link></li>
            <li><Link href="/outreach" className="hover:underline">Extension and Outreach</Link></li>
            <li><Link href="/conferences" className="hover:underline">Conferences Portal</Link></li>
            <li><Link href="/repository" className="hover:underline">Institutional Repository</Link></li>
            <li><Link href="/technology" className="hover:underline">Technology Transfer Office</Link></li>
            <li><Link href="/committee" className="hover:underline">Research committee</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-red-600 p-4 flex flex-col sm:flex-row items-center sm:items-start justify-between -mx-6">
        <p className="text-center sm:text-left">
          COPYRIGHT © 2025 Moi University - FOUNDATION OF KNOWLEDGE, ALL RIGHTS RESERVED. DESIGNED BY Moi University, ICT DIRECTORATE.
        </p>
        <div className="mt-4 sm:mt-0 flex space-x-4">
          <Link href="#" className="text-white hover:text-gray-200 transition-colors">
            <Facebook size={24} />
          </Link>
          <Link href="#" className="text-white hover:text-gray-200 transition-colors">
            <Twitter size={24} />
          </Link>
          <Link href="#" className="text-white hover:text-gray-200 transition-colors">
            <Youtube size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;