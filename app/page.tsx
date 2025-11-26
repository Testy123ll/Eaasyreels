'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import WebGLBackground from '../components/WebGLBackground';
import Lenis from 'lenis';

// Define types for our data
type Skill = {
  id: number;
  title: string;
  description: string;
};

type Project = {
  id: number;
  title: string;
  client: string;
  role: string;
  tech: string;
  instagramUrl: string;
};

type Package = {
  id: number;
  name: string;
  price: string;
  features: string[];
  link: string;
};

type Testimonial = {
  id: number;
  quote: string;
  author: string;
  role: string;
};

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Initialize Lenis smooth scrolling
  useEffect(() => {
    if (!isClient) return;
    
    // @ts-ignore
    const lenis = new Lenis();
    
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
    
    return () => {
      lenis.destroy();
    };
  }, [isClient]);
  
  if (!isClient) {
    return (
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        {/* Hero Section */}
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-gray-900 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-pink">
                  LOADING SHOWREEL...
                </h2>
              </div>
            </div>
          </div>
          
          <div className="relative z-20 text-center px-4">
            <h1 className="text-5xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-green to-neon-pink">
              CAPTURING CHAOS
            </h1>
            <p className="text-xl md:text-3xl max-w-3xl mx-auto mb-8">
              Visual Alchemy for Brands, Artists, and Events
            </p>
            <div>
              <button className="border-2 border-neon-pink px-8 py-4 rounded-full text-lg font-bold">
                VIEW SHOWREEL
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection 
        onMouseEnter={() => {}} 
        onMouseLeave={() => {}}
      />
      
      {/* Skills Section */}
      <SkillsSection />
      
      {/* Portfolio Section */}
      <PortfolioSection />
      
      {/* Pricing Section */}
      <PricingSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-950 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-pink">
                EASYREELS
              </h3>
              <p className="text-gray-400 mt-2">Capturing Chaos, Creating Magic</p>
            </div>
            
            <div className="flex gap-6">
              <a 
                href="https://www.instagram.com/eaasyreels?igsh=aGJ4OGgycWVxdmlu&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-pink transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.014-3.667.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              <a 
                href="mailto:Ogundipeayomide70@gmail.com" 
                className="text-gray-400 hover:text-neon-blue transition-colors"
                aria-label="Email"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                </svg>
              </a>
              
              <a 
                href="tel:+2348167275352" 
                className="text-gray-400 hover:text-neon-green transition-colors"
                aria-label="Phone"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} EASYREELS. All rights reserved.</p>
            <p className="mt-2">Crafted with passion for visual storytelling</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Hero Section Component
function HeroSection({ onMouseEnter, onMouseLeave }: { onMouseEnter: () => void; onMouseLeave: () => void }) {
  // Function to scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div 
        className="absolute inset-0 z-0"
      >
        <WebGLBackground />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-20 text-center px-4">
        <motion.h1 
          className="text-5xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-green to-neon-pink"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          CAPTURING CHAOS
        </motion.h1>
        <motion.p 
          className="text-xl md:text-3xl max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Visual Alchemy for Brands, Artists, and Events
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button 
            className="border-2 border-neon-pink px-8 py-4 rounded-full text-lg font-bold hover:bg-neon-pink hover:text-black transition-all duration-300 mr-4"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            VIEW SHOWREEL
          </button>
          <button 
            onClick={scrollToContact}
            className="bg-white text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-200 transition-all duration-300"
          >
            BOOK YOUR PROJECT
          </button>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <button 
          onClick={scrollToContact}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Scroll to booking section"
        >
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </button>
      </motion.div>
    </section>
  );
}

// Skills Section Component
function SkillsSection() {
  const skills: Skill[] = [
    { id: 1, title: "Videography", description: "Cinematic storytelling through motion" },
    { id: 2, title: "Color Grading", description: "Transforming visuals with color theory" },
    { id: 3, title: "Sound Design", description: "Creating immersive audio experiences" },
    { id: 4, title: "Creative Direction", description: "Visionary leadership for campaigns" },
    { id: 5, title: "Drone Cinematography", description: "Aerial perspectives that captivate" },
    { id: 6, title: "Post Production", description: "Crafting perfection in post" },
  ];
  
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          THE ARSENAL
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-neon-blue transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: skill.id * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <h3 className="text-2xl font-bold mb-3 group-hover:text-neon-blue transition-colors">{skill.title}</h3>
              <p className="text-gray-300">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Portfolio Section Component
function PortfolioSection() {
  const projects: Project[] = [
    { 
      id: 1, 
      title: "Brand Promotion", 
      client: "EASYREELS", 
      role: "Director/Cinematographer", 
      tech: "",
      instagramUrl: "https://www.instagram.com/reel/DM97D0vohh-/?igsh=MXJiOW55MGp5anZsMQ=="
    },
    { 
      id: 2, 
      title: "Wedding Shoot", 
      client: "Ife Chinedu", 
      role: "Director/Cinematographer", 
      tech: "",
      instagramUrl: "https://www.instagram.com/reel/DLUk4Sgsgwa/?igsh=MWFnb3gyNXdvaXN6Zg=="
    },
    { 
      id: 3, 
      title: "Event Recap", 
      client: "Scale Up", 
      role: "Drone Operator", 
      tech: "",
      instagramUrl: "https://www.instagram.com/reel/DRAVk9SCD4-/?igsh=MTNwajR6Y3NpZTBrcw=="
    },
    { 
      id: 4, 
      title: "Music Video", 
      client: "Dave Ugbor", 
      role: "Colorist", 
      tech: "",
      instagramUrl: "https://www.instagram.com/reel/DRAVk9SCD4-/?igsh=MTNwajR6Y3NpZTBrcw=="
    },
  ];
  
  return (
    <section className="py-20 px-4 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          SELECTED WORKS
        </motion.h2>
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="flex flex-col md:flex-row gap-8 items-center"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className={`w-full md:w-1/2 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center border border-gray-700">
                  {index === 0 ? (
                    // Instagram Reel Embed for the first project
                    <iframe
                      src="https://www.instagram.com/reel/DM97D0vohh-/embed"
                      className="w-full h-full rounded-lg"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Brand Promotion Reel"
                    />
                  ) : index === 1 ? (
                    // Instagram Reel Embed for the second project
                    <iframe
                      src="https://www.instagram.com/reel/DLUk4Sgsgwa/embed"
                      className="w-full h-full rounded-lg"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Wedding Shoot Reel"
                    />
                  ) : index === 2 ? (
                    // Instagram Reel Embed for the third project
                    <iframe
                      src="https://www.instagram.com/reel/DRAVk9SCD4-/embed"
                      className="w-full h-full rounded-lg"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Event Recap Reel"
                    />
                  ) : index === 3 ? (
                    // Instagram Reel Embed for the fourth project
                    <iframe
                      src="https://www.instagram.com/reel/DRAVk9SCD4-/embed"
                      className="w-full h-full rounded-lg"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Music Video Reel"
                    />
                  ) : (
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto text-neon-blue mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-gray-400">Video Embed Placeholder</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className={`w-full md:w-1/2 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <h3 className="text-3xl font-bold mb-3">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Client: {project.client}</span>
                  <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Role: {project.role}</span>
                  {project.tech && (
                    <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Tech: {project.tech}</span>
                  )}
                </div>
                <p className="text-gray-300 mb-6">
                  {index === 0 ? (
                    "Brand Content Creation Product videos, business promos, BTS, dressing reels, food videos, and storytelling content."
                  ) : index === 1 ? (
                    "Event Highlights & Recaps Weddings, introductions, birthdays, church programs, parties, and more."
                  ) : index === 2 ? (
                    "Event Highlights & Recaps Weddings, introductions, birthdays, church programs, parties, and more."
                  ) : (
                    "Music & Sound Creation (EasyConnect Music) Drum tracking, sound design, background music, and content audio."
                  )}
                </p>
                <a 
                  href={project.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors inline-block"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link href="https://instagram.com" target="_blank">
            <button 
              className="border-2 border-neon-pink px-8 py-4 rounded-full text-lg font-bold hover:bg-neon-pink hover:text-black transition-all duration-300"
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
            >
              ARCHIVE UNLOCKED // VIEW INSTAGRAM
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// Pricing Section Component
function PricingSection() {
  // Updated packages for individual pricing only
  const packages: Package[] = [
    { 
      id: 1, 
      name: "Essential", 
      price: "₦200,000", 
      features: [
        "1-Day Shoot", 
        "2 Highlight Videos", 
        "2 Min Max Video", 
        "1 Full Video", 
        "1 Revision", 
        "4K HD Delivery"
      ],
      link: "https://wa.link/hde52c"
    },
    { 
      id: 2, 
      name: "Premium", 
      price: "₦350,000", 
      features: [
        "2-Day Shoot", 
        "2 Highlight Videos", 
        "2 Min Max Video", 
        "1 Full Video", 
        "1 Revision", 
        "4K HD Delivery"
      ],
      link: "https://wa.link/a4eoxl"
    },
    { 
      id: 3, 
      name: "Wedding", 
      price: "₦250,000", 
      features: [
        "Wedding Shoot", 
        "4 Highlight Videos", 
        "2 Min Max Video (2)", 
        "2 Revisions", 
        "4K HDR Delivery"
      ],
      link: "https://wa.link/pf9ja3"
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          PACKAGE PRICING
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-400 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Transparent pricing for all your creative needs
        </motion.p>
        
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-neon-blue transition-all duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: pkg.id * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-neon-blue opacity-0 hover:opacity-5 transition-opacity"></div>
              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              <div className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-green">
                {pkg.price}
              </div>
              <ul className="mb-8 space-y-3">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-neon-green mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a 
                href={pkg.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-white text-black py-3 rounded-full font-bold hover:bg-gray-200 transition-colors text-center block"
              >
                Secure This Date
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Section Component
function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    { 
      id: 1, 
      quote: "Working with EASYREELS transformed our brand story. The visual narrative captured our essence perfectly.", 
      author: "Mikeage", 
      role: "Founder, Efe-macroc" 
    },
    { 
      id: 2, 
      quote: "The cinematography elevated our music video to another level. Truly exceptional creative vision.", 
      author: "Opadoja", 
      role: "Artist, Macrocsession" 
    },
    { 
      id: 3, 
      quote: "Professional, innovative, and deadline-oriented. Our event coverage exceeded expectations.", 
      author: "MIDE Media", 
      role: "Production House" 
    },
    { 
      id: 4, 
      quote: "The attention to detail and creative approach made all the difference in our campaign's success.", 
      author: "Dave Ugbor", 
      role: "Creative Director" 
    },
    { 
      id: 5, 
      quote: "EASYREELS brought our vision to life with stunning visuals and flawless execution.", 
      author: "Ghosted Tife", 
      role: "Artist Manager" 
    },
    { 
      id: 6, 
      quote: "The production quality and creative direction exceeded our expectations. Highly recommended!", 
      author: "Beat Sultan", 
      role: "Music Producer" 
    },
  ];
  
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-950 to-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-pink"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          CLIENT TESTIMONIALS
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-400 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          What industry leaders say about working with us
        </motion.p>
        
        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-neon-blue transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Quote Icon */}
              <div className="text-neon-blue mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
              
              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-blue to-neon-pink flex items-center justify-center mr-4">
                  <span className="text-white font-bold">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              {/* Rating Stars */}
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-neon-yellow" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-green mb-2">150+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-pink to-neon-blue mb-2">98%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-neon-pink mb-2">50+</div>
            <div className="text-gray-400">Brands Collaborated</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-green mb-2">24/7</div>
            <div className="text-gray-400">Creative Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Contact Section Component
function ContactSection() {
  // FAQ Data
  const faqs = [
    {
      question: "How long does it take to complete a project?",
      answer: "Project timelines vary based on complexity and package selected. Essential packages typically take 2-3 weeks, Premium packages 3-4 weeks, and Wedding packages 4-6 weeks. Rush delivery is available for an additional fee."
    },
    {
      question: "Do you travel for shoots?",
      answer: "Yes, we travel nationwide for shoots. Travel fees may apply based on location. For international projects, additional accommodation and travel costs will be discussed."
    },
    {
      question: "What format do you deliver videos in?",
      answer: "All videos are delivered in high-quality digital formats (MP4, MOV). Premium and Wedding packages include 4K HDR delivery. We can provide specific formats upon request."
    },
    {
      question: "Can I request revisions?",
      answer: "Yes, all packages include revision rounds. Essential package includes 1 revision, Premium includes 1 revision, and Wedding package includes 2 revisions. Additional revisions are available at ₦25,000 per round."
    },
    {
      question: "What is your payment structure?",
      answer: "We require a 50% deposit to secure your booking date, with the remaining balance due before final delivery. Payments can be made via bank transfer or direct deposit."
    },
    {
      question: "Do you provide raw footage?",
      answer: "Raw footage is available for an additional fee. Please discuss this requirement during the booking process as it affects storage and delivery timelines."
    },
    {
      question: "How do we collaborate during the project?",
      answer: "We maintain constant communication throughout the project. You'll have a dedicated project manager, regular updates via WhatsApp or email, and milestone reviews to ensure we're aligned with your vision."
    },
    {
      question: "What makes EASYREELS different from other videographers?",
      answer: "Our unique blend of technical expertise and creative storytelling sets us apart. We combine cinematic techniques with a deep understanding of brand messaging to create content that not only looks stunning but also drives results."
    }
  ];
  
  // State for FAQ accordion
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  // Toggle FAQ open/close
  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };
  
  // Package Data
  const packages = [
    { 
      id: 1, 
      name: "Essential", 
      price: "₦200,000", 
      features: [
        "1-Day Shoot", 
        "2 Highlight Videos", 
        "2 Min Max Video", 
        "1 Full Video", 
        "1 Revision", 
        "4K HD Delivery"
      ],
      link: "https://wa.link/hde52c"
    },
    { 
      id: 2, 
      name: "Premium", 
      price: "₦350,000", 
      features: [
        "2-Day Shoot", 
        "2 Highlight Videos", 
        "2 Min Max Video", 
        "1 Full Video", 
        "1 Revision", 
        "4K HD Delivery"
      ],
      link: "https://wa.link/a4eoxl"
    },
    { 
      id: 3, 
      name: "Wedding", 
      price: "₦250,000", 
      features: [
        "Wedding Shoot", 
        "4 Highlight Videos", 
        "2 Min Max Video (2)", 
        "2 Revisions", 
        "4K HDR Delivery"
      ],
      link: "https://wa.link/pf9ja3"
    },
  ];
  
  return (
    <section id="contact-section" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-pink"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          BOOK YOUR PROJECT
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-400 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Ready to bring your vision to life? Select your package and let's create something extraordinary together.
        </motion.p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Package Selection */}
          <div className="bg-gray-950 border border-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Select Your Package</h3>
            
            <div className="space-y-6">
              {/* Essential Package */}
              <div className="border border-gray-800 rounded-xl p-6 hover:border-neon-blue transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold">Essential</h4>
                    <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-green mt-1">₦200,000</p>
                  </div>
                  <a 
                    href="https://wa.link/hde52c" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors"
                  >
                    Book Now
                  </a>
                </div>
                <ul className="space-y-2">
                  {packages[0].features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-neon-green mr-2">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Premium Package */}
              <div className="border border-gray-800 rounded-xl p-6 hover:border-neon-blue transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold">Premium</h4>
                    <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-green mt-1">₦350,000</p>
                  </div>
                  <a 
                    href="https://wa.link/a4eoxl" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors"
                  >
                    Book Now
                  </a>
                </div>
                <ul className="space-y-2">
                  {packages[1].features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-neon-green mr-2">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Wedding Package */}
              <div className="border border-gray-800 rounded-xl p-6 hover:border-neon-blue transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold">Wedding</h4>
                    <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-green mt-1">₦250,000</p>
                  </div>
                  <a 
                    href="https://wa.link/pf9ja3" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors"
                  >
                    Book Now
                  </a>
                </div>
                <ul className="space-y-2">
                  {packages[2].features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-neon-green mr-2">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Custom Package Inquiry */}
          <div className="bg-gray-950 border border-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Custom Package Inquiry</h3>
            
            <div className="space-y-6">
              <p className="text-gray-300">
                Have unique requirements or a larger project? Let's discuss a custom package tailored to your specific needs.
              </p>
              
              <div className="space-y-4">
                <a 
                  href="https://wa.link/teo9hz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.480-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold">WhatsApp</p>
                    <p className="text-gray-400">Chat with us directly</p>
                  </div>
                </a>
                
                <a 
                  href="mailto:Ogundipeayomide70@gmail.com" 
                  className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-blue to-cyan-500 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold">Email Inquiry</p>
                    <p className="text-gray-400">Send us your requirements</p>
                  </div>
                </a>
              </div>
              
              <div className="mt-8 p-4 bg-gray-900 rounded-lg border border-neon-blue">
                <h4 className="font-bold text-neon-blue mb-2">What to Include in Your Inquiry</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Project type and scope</li>
                  <li>• Desired timeline</li>
                  <li>• Budget range</li>
                  <li>• Special requirements</li>
                  <li>• Location details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section - With open/close functionality */}
        <div className="mb-20">
          <motion.h3 
            className="text-3xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions
          </motion.h3>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-gray-950 border border-gray-800 rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <button 
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-900 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-bold text-lg">{faq.question}</span>
                  <svg 
                    className={`w-5 h-5 text-neon-blue transform transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div className={`transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                  <div className="px-6 pb-6 text-gray-300">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="bg-gray-950 border border-gray-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
          
          <div className="space-y-6">
            <p className="text-gray-300">
              Have a unique project in mind? Want to discuss custom requirements? Reach out to us directly through any of the channels below.
            </p>
            
            <div className="space-y-4">
              <a 
                href="https://www.instagram.com/eaasyreels?igsh=aGJ4OGgycWVxdmlu&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-pink to-purple-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold">Instagram</p>
                  <p className="text-gray-400">@eaasyreels</p>
                </div>
              </a>
              
              <a 
                href="mailto:Ogundipeayomide70@gmail.com" 
                className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-blue to-cyan-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold">Email</p>
                  <p className="text-gray-400">Ogundipeayomide70@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="tel:+2348167275352" 
                className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-green to-green-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold">Phone</p>
                  <p className="text-gray-400">+234 816 727 5352</p>
                </div>
              </a>
              
              {/* WhatsApp Link */}
              <a 
                href="https://wa.link/teo9hz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.480-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold">WhatsApp</p>
                  <p className="text-gray-400">Chat with us directly</p>
                </div>
              </a>
            </div>
            
            <div className="mt-8 p-4 bg-gray-900 rounded-lg border border-neon-blue">
              <h4 className="font-bold text-neon-blue mb-2">Quick Response Guaranteed</h4>
              <p className="text-gray-300 text-sm">
                We typically respond to all inquiries within 2 hours during business hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

