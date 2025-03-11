// components/CampusSection.jsx
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Play,
  Volume2,
  FileText,
  Users,
  BookOpen,
  GraduationCap,
  Users2,
} from "lucide-react";

const useCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const startValue = 0;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCount(Math.floor(progress * (end - startValue) + startValue));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  return [count, ref];
};

const UniversityNumbers = () => {
  const [studentCount, studentRef] = useCounter(29454);
  const [programCount, programRef] = useCounter(242);
  const [professorCount, professorRef] = useCounter(59);
  const [alumniCount, alumniRef] = useCounter(123959);

  return (
    <div className="bg-green-800 p-6 text-white">
      <h2 className="text-xl font-semibold mb-6">Moi University in numbers</h2>

      <div className="space-y-6">
        <div ref={studentRef} className="flex items-center">
          <div className="w-12">
            <Users className="w-8 h-8" />
          </div>
          <div className="flex-1 ml-4">
            <p className="text-3xl font-bold text-right">
              {studentCount.toLocaleString()}
            </p>
            <p className="text-right">Student Population</p>
          </div>
        </div>

        <div ref={programRef} className="flex items-center">
          <div className="w-12">
            <BookOpen className="w-8 h-8" />
          </div>
          <div className="flex-1 ml-4">
            <p className="text-3xl font-bold text-right">{programCount}</p>
            <p className="text-right">Programmes</p>
          </div>
        </div>

        <div ref={professorRef} className="flex items-center">
          <div className="w-12">
            <GraduationCap className="w-8 h-8" />
          </div>
          <div className="flex-1 ml-4">
            <p className="text-3xl font-bold text-right">{professorCount}</p>
            <p className="text-right">Professors</p>
          </div>
        </div>

        <div ref={alumniRef} className="flex items-center">
          <div className="w-12">
            <Users2 className="w-8 h-8" />
          </div>
          <div className="flex-1 ml-4">
            <p className="text-3xl font-bold text-right">
              {alumniCount.toLocaleString()}
            </p>
            <p className="text-right">Alumni</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function CampusSection() {
  return (
    <div className="w-full py-8">
      <div className="container max-w-[99%] mx-auto px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Left Column - Service Charter and VC */}
          <div className="lg:col-span-1 space-y-6 text-black">
            {/* Service Charter */}
            <div className="bg-white p-4 border border-gray-200">
              <div className="mb-4">
                <Image
                  src="/Moi-University-Service-Charter.png"
                  alt="Moi University Service Charter"
                  width={220}
                  height={130}
                  className="w-full h-auto"
                />
              </div>
              <h2 className="text-xl font-semibold text-center mb-6">
                Service Charter
              </h2>
              <div className="flex justify-center mb-4">
                <Link
                  href="/service-charter"
                  className="text-green-700 hover:underline"
                >
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
            <div className="bg-white p-4 border border-gray-200 text-center  flex flex-col justify-center">
              <div className="mb-6 flex justify-center">
                <Image
                  src="/prof.kiplagat.png"
                  alt="Prof. Kiplagat Kotut"
                  width={300}
                  height={400}
                  className="h-auto"
                />
              </div>
              <h2 className="text-2xl font-bold mb-2">Prof. Kiplagat Kotut</h2>
              <p className="text-xl">Vice Chancellor</p>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white p-4 border border-gray-200">
              <h2 className="text-xl text-blue-300 font-semibold mb-4 border-b border-gray-300 pb-2">
                Upcoming Events
              </h2>
              <p className="text-gray-600 py-6">No events</p>
            </div>
          </div>

          {/* Middle Column - Campus Life */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gray-50 p-4 border text-black border-gray-200">
              <h2 className="text-xl font-bold mb-4">Campus Life</h2>
              <p className="mb-4 font-semibold">
                Please Click for More Photos on Campus Life
              </p>

              {/* Student Council Section */}
              <div className="mb-4">
                <Image
                  src="/37th_SGC.jpg"
                  alt="Student-Banner"
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
              </div>

              {/* Campus Photos */}
              <div className="mt-4">
                <Image
                  src="/Moi-Uni-Admin-block.jpg"
                  alt="Moi University Campus Building"
                  width={500}
                  height={250}
                  className="w-full h-auto mb-4"
                />

                <Image
                  src="/mutech_kenet_banner_site.png"
                  alt="Intel Trigono Advertisement"
                  width={500}
                  height={200}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Stats and Downloads */}
          <div className="lg:col-span-1 space-y-6">
            {/* University in Numbers */}
            <UniversityNumbers />

            {/* Video Section */}
            <div className="bg-white border border-gray-200 p-3">
              <div className="relative bg-black">
                <Image
                  src="/Moi-Uni-Admin-block.jpg"
                  alt="Moi University Video"
                  width={400}
                  height={220}
                  className="w-full h-auto opacity-75"
                />

                {/* Video Controls Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-2">
                  <div className="flex justify-end">
                    <Image
                      src="/logo.svg"
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
            <div className="bg-white text-black border border-gray-200 p-4">
              <h2 className="text-xl font-semibold mb-4">Downloads</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <FileText size={18} className="text-gray-600 mr-2" />
                  <Link
                    href="/career-advice"
                    className="text-gray-700 hover:text-green-700 hover:underline"
                  >
                    Career Advice
                  </Link>
                </li>
                <li className="flex items-center">
                  <FileText size={18} className="text-gray-600 mr-2" />
                  <Link
                    href="/students-downloads"
                    className="text-gray-700 hover:text-green-700 hover:underline"
                  >
                    Students Downloads
                  </Link>
                </li>
                <li className="flex items-center">
                  <FileText size={18} className="text-gray-600 mr-2" />
                  <Link
                    href="/integrity-documents"
                    className="text-gray-700 hover:text-green-700 hover:underline"
                  >
                    Integrity Documents
                  </Link>
                </li>
                <li className="flex items-center">
                  <FileText size={18} className="text-gray-600 mr-2" />
                  <Link
                    href="/staff-downloads"
                    className="text-gray-700 hover:text-green-700 hover:underline"
                  >
                    Staff Downloads
                  </Link>
                </li>
              </ul>
            </div>

            {/* Anti-Corruption Section */}
            <div className="bg-white border border-gray-200 p-4">
              <h2 className="text-xl text-blue-300 font-semibold mb-3">
                Let's Continue Ensuring ZERO Corruption
              </h2>

              <div className="flex space-x-3 mb-3">
                <div className="flex-shrink-0">
                  <div className="relative w-12 h-12">
                    <Image
                      src="/stop1-removebg-preview.png"
                      alt="No Corruption"
                      width={100}
                      height={100}
                      className="h-auto"
                    />
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
