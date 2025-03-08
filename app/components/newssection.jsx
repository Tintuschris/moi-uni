// components/NewsSection.jsx
'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function NewsSection() {
  return (
    <div className="w-full bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Announcements Column */}
          <div className="bg-white p-4 shadow-sm">
            <h2 className="text-xl font-medium text-gray-700 mb-4">Announcements</h2>
            <div className="space-y-6">
              <div>
                <Link href="/graduation" className="text-green-700 hover:underline font-medium">
                  Notice of the 47th Graduation Ceremony
                </Link>
                <p className="text-gray-500 text-sm mt-1">2025-03-04</p>
              </div>
              
              <div>
                <Link href="/tender" className="text-green-700 hover:underline font-medium">
                  Invitation to Tender: Request for Proposal for the Establishment of a Primary Care Data Office
                </Link>
                <p className="text-gray-500 text-sm mt-1">2025-02-19</p>
              </div>
              
              <div>
                <Link href="/certificates" className="text-green-700 hover:underline font-medium">
                  Issuing of Certificates and Transcripts for the 46th Graduation Ceremony (19th December, 2024)
                </Link>
                <p className="text-gray-500 text-sm mt-1">2025-02-17</p>
              </div>
              
              <div>
                <Link href="/bursary" className="text-green-700 hover:underline font-medium">
                  Call for Application: Rattansi Bursary 2024/2025
                </Link>
                <p className="text-gray-500 text-sm mt-1">2025-02-11</p>
              </div>
              
              <div>
                <Link href="/extension" className="text-green-700 hover:underline font-medium">
                  Extension of Call for Application Deadline: Enterprise Management Seminar
                </Link>
                <p className="text-gray-500 text-sm mt-1">2025-01-29</p>
              </div>
              
              <div>
                <Link href="/cytoflex" className="text-green-700 hover:underline font-medium">
                  Extension of Tender Closing Date: Supply and Delivery of Reagents for Cytoflex Machines
                </Link>
                <p className="text-gray-500 text-sm mt-1">2025-01-22</p>
              </div>
              
              <div>
                <Link href="/africa-health" className="text-green-700 hover:underline font-medium">
                  Call for Expressions of Interest: Africa Health Collaborative Research Fund 2025
                </Link>
                <p className="text-gray-500 text-sm mt-1">2025-01-20</p>
              </div>
            </div>
          </div>
          
          {/* News & Events Column */}
          <div className="bg-white p-4 shadow-sm">
            <h2 className="text-xl font-medium text-gray-700 mb-4">News & Events</h2>
            <div className="space-y-6">
              <div>
                <Link href="/sports-day" className="text-green-700 hover:underline font-medium">
                  Successful Sports Day for Freshmen & Women
                </Link>
                <div className="my-2">
                  <Image 
                    src="/api/placeholder/300/200" 
                    alt="Sports day participants" 
                    width={300} 
                    height={200} 
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-gray-500 text-sm mt-1">2025-02-25</p>
                <p className="text-gray-600 mt-1">On... <Link href="/sports-day" className="text-green-700 hover:underline">More detail</Link></p>
              </div>
              
              <div className="mt-4">
                <Link href="/research-university" className="text-green-700 hover:underline font-medium">
                  Building a World-Class Research University: Collaboration, Leadership & Excellence
                </Link>
                <div className="my-2">
                  <Image 
                    src="/api/placeholder/300/200" 
                    alt="Research university participants" 
                    width={300} 
                    height={200} 
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-gray-500 text-sm mt-1">2025-02-17</p>
                <p className="text-gray-600 mt-1">On Thursday,... <Link href="/research-university" className="text-green-700 hover:underline">More detail</Link></p>
              </div>
              
              <div className="mt-4">
                <Link href="/engineering" className="text-green-700 hover:underline font-medium">
                  School of Engineering conducts Staff Mentorship Seminar on Outcome Based Education (OBE)
                </Link>
                <div className="my-2">
                  <Image 
                    src="/api/placeholder/300/200" 
                    alt="Engineering staff seminar" 
                    width={300} 
                    height={200} 
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-gray-500 text-sm mt-1">2025-01-29</p>
                <p className="text-gray-600 mt-1">Moi University... <Link href="/engineering" className="text-green-700 hover:underline">More detail</Link></p>
              </div>
              
              <div className="mt-4">
                <Link href="/health-collaboration" className="text-green-700 hover:underline font-medium">
                  Ministry of Health and Moi University strengthen Collaboration in Public Health Training & Capacity Building
                </Link>
                <div className="my-2">
                  <Image 
                    src="/api/placeholder/300/200" 
                    alt="Health collaboration meeting" 
                    width={300} 
                    height={200} 
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-gray-500 text-sm mt-1">2025-01-27</p>
                <p className="text-gray-600 mt-1">Officials of the Ministry... <Link href="/health-collaboration" className="text-green-700 hover:underline">More detail</Link></p>
              </div>
              
              <div className="mt-4">
                <Link href="/council-inauguration" className="text-green-700 hover:underline font-medium">
                  Inauguration of the 14th Council of Moi University: A New Chapter of Excellence
                </Link>
                <div className="my-2">
                  <Image 
                    src="/api/placeholder/300/200" 
                    alt="Council inauguration ceremony" 
                    width={300} 
                    height={200} 
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-gray-500 text-sm mt-1">2025-01-23</p>
                <p className="text-gray-600 mt-1">The inauguration... <Link href="/council-inauguration" className="text-green-700 hover:underline">More detail</Link></p>
              </div>
            </div>
          </div>
          
          {/* Research & Innovations Column */}
          <div className="bg-white p-4 shadow-sm">
            <h2 className="text-xl font-medium text-gray-700 mb-4">Research & Innovations</h2>
            <div className="space-y-6">
              <div>
                <Link href="/phd-defense" className="text-green-700 hover:underline font-medium">
                  Successfully defended PhD & Master Theses
                </Link>
                <div className="my-2">
                  <Image 
                    src="/api/placeholder/300/200" 
                    alt="PhD graduation certificate" 
                    width={300} 
                    height={200} 
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-gray-500 text-sm mt-1">2025-01-28</p>
                <p className="text-gray-600 mt-1"><Link href="/phd-defense" className="text-green-700 hover:underline">More detail</Link></p>
              </div>
              
              <div className="mt-6">
                <Link href="/moisture-meter" className="text-green-700 hover:underline font-medium">
                  Moi University innovation of a Moisture Meter and Cobbed Maize Dryer
                </Link>
                <div className="my-2">
                  <Image 
                    src="/api/placeholder/300/200" 
                    alt="Moisture meter and maize dryer" 
                    width={300} 
                    height={200} 
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-gray-500 text-sm mt-1">2021-10-25</p>
                <p className="text-gray-600 mt-1">
                  Moi University, through a collaboration with the University of Kassel in Germany, came up with an innovation of a Moisture Meter and Cobbed Maize Dryer to address the losses maize farmers face during the post-harvest season. The masterpiece invention christened "Etemo Dryer" after the inventor, Dr. Isaiah Etemo Muchilwa, was launched on Friday 22nd October 2021 in Kitale, Trans-Nzoia County. The launch, whose theme was "Bridging knowledge from the academia and skills from the artisans to address post-harvest maize loss", was officiated by Moi University Chairman of Council, Dr. Dr. Humphrey... <Link href="/moisture-meter" className="text-green-700 hover:underline">More detail</Link>
                </p>
              </div>
            </div>
          </div>
          
          {/* Quick Links Column */}
          <div className="bg-white p-4 shadow-sm">
            <h2 className="text-xl font-medium text-gray-700 mb-4">Quick links</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <Link href="/graduation" className="text-green-700 hover:underline">
                  47<sup>th</sup> Graduation
                </Link>
              </li>
              <li>
                <Link href="/mu-tvet" className="text-green-700 hover:underline">
                  MU-TVET Application
                </Link>
              </li>
              <li>
                <Link href="/first-year" className="text-green-700 hover:underline">
                  Incoming First Year
                </Link>
              </li>
              <li>
                <Link href="/exam-timetable" className="text-green-700 hover:underline">
                  Examination Timetable
                </Link>
              </li>
              <li>
                <Link href="/alumni-registration" className="text-green-700 hover:underline">
                  Alumni Registration
                </Link>
              </li>
              <li>
                <Link href="/student-portal" className="text-green-700 hover:underline">
                  Student Portal
                </Link>
              </li>
              <li>
                <Link href="/staff-portal" className="text-green-700 hover:underline">
                  Staff Portal
                </Link>
              </li>
              <li>
                <Link href="/programmes" className="text-green-700 hover:underline">
                  List of Programmes offered
                </Link>
              </li>
              <li>
                <Link href="/admission" className="text-green-700 hover:underline">
                  Apply for Admission Online
                </Link>
              </li>
              <li>
                <Link href="/certificates" className="text-green-700 hover:underline">
                  Certificates Collection
                </Link>
              </li>
              <li>
                <Link href="/scholars" className="text-green-700 hover:underline">
                  MU Scholars
                </Link>
              </li>
              <li>
                <Link href="/innovations" className="text-green-700 hover:underline">
                  Innovations
                </Link>
              </li>
              <li>
                <Link href="/hostel-booking" className="text-green-700 hover:underline">
                  Hostel Booking
                </Link>
              </li>
              <li>
                <Link href="/room-booking" className="text-green-700 hover:underline">
                  Room Booking Guide (Hostels)
                </Link>
              </li>
              <li>
                <Link href="/centres" className="text-green-700 hover:underline">
                  Centres of Excellence
                </Link>
              </li>
              <li>
                <Link href="/ict-helpdesk" className="text-green-700 hover:underline">
                  ICT Helpdesk
                </Link>
              </li>
              <li>
                <Link href="/announcements" className="text-green-700 hover:underline">
                  Announcements
                </Link>
              </li>
              <li>
                <Link href="/news-events" className="text-green-700 hover:underline">
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/tender-adverts" className="text-green-700 hover:underline">
                  Tender Adverts
                </Link>
              </li>
              <li>
                <Link href="/job-opportunities" className="text-green-700 hover:underline">
                  Job Opportunities
                </Link>
              </li>
              <li>
                <Link href="/pension-scheme" className="text-green-700 hover:underline">
                  Moi University Pension Scheme
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="text-green-700 hover:underline">
                  Customer Feedback Form
                </Link>
              </li>
              <li>
                <Link href="/kenet" className="text-green-700 hover:underline">
                  KENET Web Conference
                </Link>
              </li>
              <li>
                <Link href="/hef-portal" className="text-green-700 hover:underline">
                  HEF Portal
                </Link>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
}