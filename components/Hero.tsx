'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import LogoImg from '../easyreel logo.png';

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWorks = () => {
    const worksSection = document.getElementById('selected-works');
    if (worksSection) {
      worksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
      <div className="absolute inset-0 z-0 after:content-[''] after:absolute after:inset-0 after:bg-black/40 after:z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/video-poster-placeholder.jpg" // Fallback image if needed
        >
             {/* Note to user: Replace these with actual video paths when available */}
          <source src="https://cdn.coverr.co/videos/coverr-film-set-behind-the-scenes-5264/1080p.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Header/Logo Area */}
      <div className="absolute top-6 left-6 z-30 flex items-center gap-3">
        <Image src={LogoImg} alt="EASYREELS logo" className="w-14 h-14 rounded-md" />
        <span className="hidden sm:inline text-xl font-bold tracking-widest text-white">EASYREELS</span>
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-4 w-full max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-9xl font-black mb-6 text-white tracking-tighter leading-none mix-blend-difference">
          {'CAPTURING CHAOS'.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </h1>
        
        <motion.p
          className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-10 font-light tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Visual Alchemy for Brands, Artists, and Events
        </motion.p>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
            <button 
                onClick={scrollToWorks}
                className="px-8 py-4 bg-white text-black font-bold tracking-wider hover:scale-105 transition-transform duration-300 rounded-sm"
            >
                VIEW SHOWREEL
            </button>
             <button 
                onClick={scrollToContact}
                className="px-8 py-4 border border-white/30 backdrop-blur-sm text-white font-bold tracking-wider hover:bg-white hover:text-black transition-all duration-300 rounded-sm"
             >
                BOOK PROJECT
            </button>
        </motion.div>
      </div>
      
       {/* Scroll Indicator */}
       <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
          <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-white to-transparent opacity-50"></div>
      </motion.div>
    </section>
  );
}
