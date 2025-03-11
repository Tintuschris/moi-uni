'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  '/intake_banner.jpeg',
  '/conference-banner.png',
  '/tvet_banner.png',
  '/tvet_banner.png'
]

const GRID_SIZE = 8 // 8x8 grid for more detailed cube effect

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [showButton, setShowButton] = useState(true)

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setShowButton(false)
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }
  }

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setShowButton(false)
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  const gridItems = Array.from({ length: GRID_SIZE * GRID_SIZE }, (_, i) => {
    const row = Math.floor(i / GRID_SIZE)
    const col = i % GRID_SIZE
    return { row, col }
  })

  return (
    <div className="relative h-[80vh] overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <div 
          key={currentIndex}
          className="absolute inset-0"
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
            gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`,
          }}
        >
          {gridItems.map(({ row, col }, index) => (
            <motion.div
              key={`${currentIndex}-${index}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                duration: 0.2,
                delay: Math.random() * 0.2,
              }}
              onAnimationComplete={() => {
                if (index === gridItems.length - 1) {
                  setIsAnimating(false)
                  setShowButton(true)
                }
              }}
              className="w-full h-full overflow-hidden"
            >
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url(${images[currentIndex]})`,
                  backgroundSize: `${GRID_SIZE * 100}% ${GRID_SIZE * 100}%`,
                  backgroundPosition: `${-col * 100}% ${-row * 100}%`,
                  width: '100%',
                  height: '100%',
                }}
              />
            </motion.div>
          ))}
        </div>
      </AnimatePresence>

      {/* Learn More Button */}
      <AnimatePresence>
        {showButton && (
          <motion.button
            key={`button-${currentIndex}`}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
            className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition-colors"
          >
            Learn More
          </motion.button>
        )}
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 right-8 flex gap-2">
        <button
          onClick={prevSlide}
          className="bg-gray-300 p-3 hover:bg-gray-400 transition-colors"
          disabled={isAnimating}
        >
          <ChevronLeft className="w-6 h-6 text-black" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-gray-300 p-3 hover:bg-gray-400 transition-colors"
          disabled={isAnimating}
        >
          <ChevronRight className="w-6 h-6 text-black" />
        </button>
      </div>
    </div>
  )
}
