import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Footprints, Globe } from 'lucide-react';

const AboutSection = () => {
  return (
    <div className="container bg-white max-w-[99%] mx-auto px-4 mb-8 font-sans">
      {/* Header Section */}
      <header className="py-6">
        <h1 className="text-xl font-semibold text-gray-700">Welcome to Moi University</h1>
      </header>

      {/* Facts About Us Section */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold text-gray-700 uppercase">FACTS YOU SHOULD KNOW ABOUT US</h2>
        <h3 className="text-base font-medium text-gray-700 mb-2">Brief History</h3>
        <p className="text-sm text-gray-600 mb-4">
          Moi University was established in 1984 by an Act of Parliament (Moi University Act, 1984) as the second public university in Kenya. This was on the recommendation of a Presidential Working Party, chaired by Prof. Collins B. Mackay, which had collected views from Kenyans about the desirability of the same. Courtesy of his deep and altruistic concern for and interest in the advancement of education at all levels in Kenya, not only as a professional teacher but as Kenya's Head of State, President Daniel Toroitich arap Moi pioneered the idea of a university in a rural setting 
          <a href="#" className="text-green-600 hover:underline">read more...</a>
        </p>
      </section>

      {/* Navigation Tabs */}
      <div className="flex overflow-x-auto mb-6 border-b">
        <button className="px-4 py-2 bg-red-800 text-white font-medium min-w-max">All</button>
        <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 font-medium min-w-max">Our Environment</button>
        <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 font-medium min-w-max">Our Projects</button>
        <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 font-medium min-w-max">Our Schools</button>
      </div>

      {/* Grid of Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Elimu Millers */}
        <div className="border rounded-md overflow-hidden shadow-sm">
          <div className="relative h-48">
            <Image 
              src="/Millers.jpg" 
              alt="Elimu Millers" 
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="bg-red-800 text-white p-2 relative">
            <h3 className="font-medium">Elimu Millers</h3>
          </div>
        </div>

        {/* Library */}
        <div className="border rounded-md overflow-hidden shadow-sm">
          <div className="relative h-48">
            <Image 
              src="/Library.png" 
              alt="Library" 
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="bg-red-800 text-white p-2 relative">
            <h3 className="font-medium">Library</h3>
          </div>
        </div>

        {/* DLP Project */}
        <div className="border rounded-md overflow-hidden shadow-sm">
          <div className="relative h-48">
            <Image 
              src="/DLP.png" 
              alt="DLP Project" 
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="bg-red-800 text-white p-2 relative">
            <h3 className="font-medium">DLP Project</h3>
          </div>
        </div>

        {/* Waterfall */}
        <div className="border rounded-md overflow-hidden shadow-sm">
          <div className="relative h-48">
            <Image 
              src="/Waterfall.jpg" 
              alt="Waterfall" 
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="bg-red-800 text-white p-2 relative">
            <h3 className="font-medium">Waterfall</h3>
          </div>
        </div>
      </div>
        {/* Mission, Vision, Values Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Vision */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Vision</h3>
            <p className="text-gray-600">
              To be the University of choice in nurturing innovation and talent in science, technology...
              <Link href="#" className="text-green-600 hover:underline block mt-2">
                read more
              </Link>
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Mission</h3>
            <p className="text-gray-600">
              To preserve, create, and disseminate knowledge, conserve and develop scientific, technological...
              <Link href="#" className="text-green-600 hover:underline block mt-2">
                read more
              </Link>
            </p>
          </div>

          {/* Core values */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Core Values</h3>
            <p className="text-gray-600">
              Promotion and defense of intellectual and academic freedom, scholarship and relentless search for...
              <Link href="#" className="text-green-600 hover:underline block mt-2">
                read more
              </Link>
            </p>
          </div>

          {/* Philosophy */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Philosophy</h3>
            <p className="text-gray-600">
              Putting knowledge to work is the University's guiding philosophy. At Moi University,...
              <Link href="#" className="text-green-600 hover:underline block mt-2">
                read more
              </Link>
            </p>
          </div>
        </div>
      {/* Footer with Contact Options */}
<footer className="py-8 border-t flex flex-col md:flex-row justify-between items-center">
  <div className="mb-6 md:mb-0">
    <Image 
      src="/logo.svg" 
      alt="Moi University Logo" 
      width={140}
      height={40}
    />
  </div>
  
  <div className="flex flex-col md:flex-row gap-8 items-center">
    <Link href="#" className="flex items-center gap-3 text-gray-700 hover:text-gray-900 group">
      <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center group-hover:border-green-600 transition-colors">
        <Phone className="w-6 h-6" />
      </div>
      <span className="text-lg font-semibold">Contact us Today</span>
    </Link>
    
    <Link href="#" className="flex items-center gap-3 text-gray-700 hover:text-gray-900 group">
      <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center group-hover:border-green-600 transition-colors">
        <Footprints className="w-6 h-6" />
      </div>
      <span className="text-lg font-semibold">Take School Tour</span>
    </Link>
    
    <Link href="#" className="flex items-center gap-3 text-gray-700 hover:text-gray-900 group">
      <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center group-hover:border-green-600 transition-colors">
        <Globe className="w-6 h-6" />
      </div>
      <span className="text-lg font-semibold">Campuses Offices</span>
    </Link>
  </div>
</footer>    </div>
  );
};

export default AboutSection;    