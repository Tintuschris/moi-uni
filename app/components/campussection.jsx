// components/CampusSection.jsx
'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play, Volume2, FileText } from 'lucide-react';

export default function CampusSection() {
  return (
    <div className="w-full py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Left Column - Service Charter and VC */}
          <div className="space-y-6">
            {/* Service Charter */}
            <div className="bg-white p-4 border border-gray-200">
              <div className="mb-4">
                <Image
                  src="/api/placeholder/220/130"
                  alt="Moi University Service Charter"
                  width={220}
                  height={130}
                  className="w-full h-auto"
                />
              </div>
              <h2 className="text-xl font-semibold text-center mb-6">Service Charter</h2>
              <div className="flex justify-center mb-4">
                <Link href="/service-charter" className="text-green-700 hover:underline">
                  Read more
                </Link>
              </div>
              
              {/* Audio Players */}
              <div className="mt-6">
                <p className="mb-2">Listen in Swahili</p>
                <div className="bg-gray-100 p-2 flex items-center space-x-2 mb-4 rounded">
                  <button className="text-gray-700 hover:text-gray-900">
                    <Play size={20} />
                  </button>
                  <div className="flex-1 h-2 bg-gray-300 rounded-full">
                    <div className="w-1/3 h-full bg-gray-400 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-600">14:39</span>
                  <button className="text-gray-700 hover:text-gray-900">
                    <Volume2 size={20} />
                  </button>
                  <div className="w-16 h-2 bg-gray-300 rounded-full">
                    <div className="w-3/4 h-full bg-red-600 rounded-full"></div>
                  </div>
                </div>
                
                <p className="mb-2">Listen in English</p>
                <div className="bg-gray-100 p-2 flex items-center space-x-2 rounded">
                  <button className="text-gray-700 hover:text-gray-900">
                    <Play size={20} />
                  </button>
                  <div className="flex-1 h-2 bg-gray-300 rounded-full">
                    <div className="w-1/4 h-full bg-gray-400 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-600">13:26</span>
                  <button className="text-gray-700 hover:text-gray-900">
                    <Volume2 size={20} />
                  </button>
                  <div className="w-16 h-2 bg-gray-300 rounded-full">
                    <div className="w-3/4 h-full bg-red-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Vice Chancellor */}
            <div className="bg-white p-4 border border-gray-200 text-center">
              <div className="mb-4 flex justify-center">
                <Image
                  src="/api/placeholder/180/200"
                  alt="Prof. Kiplagat Kotut"
                  width={180}
                  height={200}
                  className="h-auto"
                />
              </div>
              <h2 className="text-lg font-semibold">Prof. Kiplagat Kotut</h2>
              <p className="text-center">Vice Chancellor</p>
            </div>
            
            {/* Upcoming Events */}
            <div className="bg-white p-4 border border-gray-200">
              <h2 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">Upcoming Events</h2>
              <p className="text-gray-600 py-6">No events</p>
            </div>
          </div>
          
          {/* Middle Column - Campus Life */}
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 border border-gray-200">
              <h2 className="text-xl font-semibold mb-4">Campus Life</h2>
              <p className="mb-4">Please Click for More Photos on Campus Life</p>
              
              {/* Student Council Section */}
              <div className="bg-gray-100 p-4 rounded">
                <div className="flex justify-center mb-4">
                  <Image
                    src="/api/placeholder/80/80"
                    alt="Moi University Logo"
                    width={80}
                    height={80}
                    className="h-auto"
                  />
                </div>
                
                <h3 className="text-center text-green-700 font-bold mb-4">
                  37<sup>th</sup> Moi University Student Council
                </h3>
                
                <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
                  {/* Student Council Members */}
                  <div className="flex flex-col items-center">
                    <div className="rounded-full overflow-hidden border-2 border-green-600 w-20 h-20 mb-1">
                      <Image
                        src="/api/placeholder/80/80"
                        alt="Edwin Kipngetich"
                        width={80}
                        height={80}
                        className="h-auto"
                      />
                    </div>
                    <p className="text-xs text-center">Edwin Kipngetich</p>
                    <p className="text-xs text-green-700">Secretary General</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="rounded-full overflow-hidden border-2 border-green-600 w-20 h-20 mb-1">
                      <Image
                        src="/api/placeholder/80/80"
                        alt="Chongella John Peter"
                        width={80}
                        height={80}
                        className="h-auto"
                      />
                    </div>
                    <p className="text-xs text-center">Chongella John Peter</p>
                    <p className="text-xs text-green-700">Chairman</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="rounded-full overflow-hidden border-2 border-green-600 w-20 h-20 mb-1">
                      <Image
                        src="/api/placeholder/80/80"
                        alt="Fariha Ibrahim Ali"
                        width={80}
                        height={80}
                        className="h-auto"
                      />
                    </div>
                    <p className="text-xs text-center">Fariha Ibrahim Ali</p>
                    <p className="text-xs text-green-700">Vice Chair</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="rounded-full overflow-hidden border-2 border-green-600 w-20 h-20 mb-1">
                      <Image
                        src="/api/placeholder/80/80"
                        alt="Mohamed Ali"
                        width={80}
                        height={80}
                        className="h-auto"
                      />
                    </div>
                    <p className="text-xs text-center">Mohamed Ali</p>
                    <p className="text-xs text-green-700">Co-ordinating Secretary</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="rounded-full overflow-hidden border-2 border-green-600 w-20 h-20 mb-1">
                      <Image
                        src="/api/placeholder/80/80"
                        alt="Purity Adhiambo"
                        width={80}
                        height={80}
                        className="h-auto"
                      />
                    </div>
                    <p className="text-xs text-center">Purity Adhiambo</p>
                    <p className="text-xs text-green-700">Social Welfare Secretary</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="rounded-full overflow-hidden border-2 border-green-600 w-20 h-20 mb-1">
                      <Image
                        src="/api/placeholder/80/80"
                        alt="Alex Otieno"
                        width={80}
                        height={80}
                        className="h-auto"
                      />
                    </div>
                    <p className="text-xs text-center">Alex Otieno</p>
                    <p className="text-xs text-green-700">Finance Secretary</p>
                  </div>
                </div>
                
                {/* Social Media Links */}
                <div className="flex justify-center items-center mt-4 space-x-2 text-xs">
                  <span>✕ @MoiUniKenya</span>
                  <span>◯ @moiuniversity</span>
                  <span>Moi University Kenya</span>
                  <span>www.mu.ac.ke</span>
                </div>
              </div>
              
              {/* Campus Photos */}
              <div className="mt-4">
                <Image
                  src="/api/placeholder/500/250"
                  alt="Moi University Campus Building"
                  width={500}
                  height={250}
                  className="w-full h-auto mb-4"
                />
                
                <Image
                  src="/api/placeholder/500/200"
                  alt="Intel Trigono Advertisement"
                  width={500}
                  height={200}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          {/* Right Column - Stats and Downloads */}
          <div className="space-y-6">
            {/* University in Numbers */}
            <div className="bg-green-800 p-6 text-white">
              <h2 className="text-xl font-semibold mb-6">Moi University in numbers</h2>
              
              <div className="flex items-center mb-6">
                <div className="w-12">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                    <circle cx="9" cy="7" r="4" />
                    <circle cx="15" cy="7" r="4" />
                    <path d="M4 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                  </svg>
                </div>
                <div className="flex-1 ml-4">
                  <p className="text-3xl font-bold text-right">29454</p>
                  <p className="text-right">Student Population</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                    <path d="M3 3v18h18" />
                    <path d="M18 17V9" />
                    <path d="M13 17V5" />
                    <path d="M8 17v-3" />
                  </svg>
                </div>
                <div className="flex-1 ml-4">
                  <p className="text-3xl font-bold text-right">242</p>
                  <p className="text-right">Programmes</p>
                </div>
              </div>
            </div>
            
            {/* Video Section */}
            <div className="bg-white border border-gray-200 p-3">
              <div className="relative bg-black">
                <Image
                  src="/api/placeholder/400/220"
                  alt="Moi University Video"
                  width={400}
                  height={220}
                  className="w-full h-auto opacity-75"
                />
                
                {/* Video Controls Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-2">
                  <div className="flex justify-end">
                    <Image
                      src="/api/placeholder/40/40"
                      alt="Moi University Logo"
                      width={40}
                      height={40}
                      className="h-auto"
                    />
                  </div>
                  
                  <div className="flex flex-col">
                    <div className="flex items-center justify-center mb-2">
                      <button className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
                        <Play size={24} fill="white" />
                      </button>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-white text-xs">
                      <button>
                        <Play size={14} />
                      </button>
                      <span>00:00</span>
                      <div className="flex-1 h-1 bg-gray-500 rounded-full">
                        <div className="w-0 h-full bg-red-600 rounded-full"></div>
                      </div>
                      <button>
                        <Volume2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Downloads Section */}
            <div className="bg-white border border-gray-200 p-4">
              <h2 className="text-xl font-semibold mb-4">Downloads</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <FileText size={18} className="text-gray-600 mr-2" />
                  <Link href="/career-advice" className="text-gray-700 hover:text-green-700 hover:underline">
                    Career Advice
                  </Link>
                </li>
                <li className="flex items-center">
                  <FileText size={18} className="text-gray-600 mr-2" />
                  <Link href="/students-downloads" className="text-gray-700 hover:text-green-700 hover:underline">
                    Students Downloads
                  </Link>
                </li>
                <li className="flex items-center">
                  <FileText size={18} className="text-gray-600 mr-2" />
                  <Link href="/integrity-documents" className="text-gray-700 hover:text-green-700 hover:underline">
                    Integrity Documents
                  </Link>
                </li>
                <li className="flex items-center">
                  <FileText size={18} className="text-gray-600 mr-2" />
                  <Link href="/staff-downloads" className="text-gray-700 hover:text-green-700 hover:underline">
                    Staff Downloads
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Anti-Corruption Section */}
            <div className="bg-white border border-gray-200 p-4">
              <h2 className="text-xl font-semibold mb-3">Let's Continue Ensuring ZERO Corruption</h2>
              
              <div className="flex space-x-3 mb-3">
                <div className="flex-shrink-0">
                  <div className="relative w-12 h-12">
                    <Image
                      src="/api/placeholder/50/50"
                      alt="No Corruption"
                      width={50}
                      height={50}
                      className="h-auto"
                    />
                    <div className="absolute inset-0 border-2 border-red-500 rounded-full flex items-center justify-center">
                      <div className="w-10 h-0.5 bg-red-500 transform rotate-45"></div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <p className="text-green-700">How to report Corruption</p>
                </div>
              </div>
              
              <ul className="list-disc pl-4 space-y-1 text-green-700">
                <li>
                  <Link href="/report-corruption" className="hover:underline">
                    Report Corruption Anonymously
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}