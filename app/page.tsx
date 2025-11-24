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
};

type Package = {
  id: number;
  name: string;
  price: string;
  features: string[];
};

type Testimonial = {
  id: number;
  quote: string;
  author: string;
  role: string;
};

export default function Home() {
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default');
  const cursorRef = useRef<HTMLDivElement>(null);
  
  // Custom cursor effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);
  
  const scale = useTransform(mouseXSpring, [0, 1], [1, 2]);
  const rotate = useTransform(mouseYSpring, [0, 1], [0, 90]);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Initialize Lenis smooth scrolling
  useEffect(() => {
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
  }, []);
  
  const handleMouseEnter = (text: string) => {
    setCursorText(text);
    setCursorVariant('hover');
  };
  
  const handleMouseLeave = () => {
    setCursorText('');
    setCursorVariant('default');
  };
  
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Custom Cursor */}
      <motion.div
        ref={cursorRef}
        className="custom-cursor hidden md:block"
        style={{
          translateX: mouseXSpring,
          translateY: mouseYSpring,
          scale,
          rotate,
        }}
      >
        {cursorText && (
          <span className="cursor-text">{cursorText}</span>
        )}
      </motion.div>
      
      {/* Hero Section */}
      <HeroSection 
        onMouseEnter={() => handleMouseEnter('WATCH REEL')} 
        onMouseLeave={handleMouseLeave}
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
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div 
        className="absolute inset-0 z-0"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <VideoBackground />
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
            className="border-2 border-neon-pink px-8 py-4 rounded-full text-lg font-bold hover:bg-neon-pink hover:text-black transition-all duration-300"
          >
            VIEW SHOWREEL
          </button>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-8 h-12 border-2 border-white rounded-full flex justify-center"
        >
          <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
        </motion.div>
      </div>
    </section>
  );
}

// Video Background Component
function VideoBackground() {
  return (
    <>
      <WebGLBackground />
      <div className="w-full h-full">
        {/* Instagram Reel Embed */}
        <iframe
          src="https://www.instagram.com/reel/Cqx9b2uB5eY/embed"
          className="w-full h-full object-cover"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Showreel Background"
        />
      </div>
    </>
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
    { id: 1, title: "Brand Campaign", client: "Nike", role: "Director/Cinematographer", tech: "RED Komodo, Adobe Premiere" },
    { id: 2, title: "Music Video", client: "Billie Eilish", role: "DP/Editor", tech: "Sony FX6, DaVinci Resolve" },
    { id: 3, title: "Event Recap", client: "Coachella", role: "Drone Operator", tech: "DJI Inspire 3, Final Cut Pro" },
    { id: 4, title: "Commercial Spot", client: "Apple", role: "Colorist", tech: "Baselight, HDR" },
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
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto text-neon-blue mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-400">Video Embed Placeholder</span>
                  </div>
                </div>
              </div>
              
              <div className={`w-full md:w-1/2 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <h3 className="text-3xl font-bold mb-3">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Client: {project.client}</span>
                  <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Role: {project.role}</span>
                  <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Tech: {project.tech}</span>
                </div>
                <p className="text-gray-300 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
                  View Project
                </button>
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
  const [view, setView] = useState<'commercial' | 'personal'>('commercial');
  
  const packages: Record<string, Package[]> = {
    commercial: [
      { id: 1, name: "The Essential", price: "$2,500", features: ["1-Day Shoot", "Basic Editing", "1 Revisions", "HD Delivery"] },
      { id: 2, name: "The Narrative", price: "$5,000", features: ["2-Day Shoot", "Premium Editing", "3 Revisions", "4K Delivery", "Color Grading"] },
      { id: 3, name: "The Cinema", price: "$10,000", features: ["3-Day Shoot", "Cinematic Editing", "Unlimited Revisions", "4K HDR Delivery", "Color Grading", "Sound Design"] },
    ],
    personal: [
      { id: 1, name: "The Essential", price: "$500", features: ["1-Hour Session", "Basic Editing", "1 Revisions", "HD Delivery"] },
      { id: 2, name: "The Narrative", price: "$1,200", features: ["3-Hour Session", "Premium Editing", "2 Revisions", "4K Delivery", "Color Grading"] },
      { id: 3, name: "The Cinema", price: "$2,500", features: ["Full Day Session", "Cinematic Editing", "Unlimited Revisions", "4K HDR Delivery", "Color Grading", "Sound Design"] },
    ]
  };
  
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
        
        {/* Toggle Switch */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-900 p-1 rounded-full flex">
            <button 
              className={`px-6 py-2 rounded-full transition-colors ${view === 'commercial' ? 'bg-white text-black' : 'text-gray-400'}`}
              onClick={() => setView('commercial')}
            >
              Commercial
            </button>
            <button 
              className={`px-6 py-2 rounded-full transition-colors ${view === 'personal' ? 'bg-white text-black' : 'text-gray-400'}`}
              onClick={() => setView('personal')}
            >
              Personal
            </button>
          </div>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages[view].map((pkg) => (
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
              <button className="w-full bg-white text-black py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
                Secure This Date
              </button>
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
    { id: 1, quote: "Working with EASYREELS transformed our brand story. The visual narrative captured our essence perfectly.", author: "Mikeage", role: "Founder, Efe-macroc" },
    { id: 2, quote: "The cinematography elevated our music video to another level. Truly exceptional creative vision.", author: "Opadoja", role: "Artist, Macrocsession" },
    { id: 3, quote: "Professional, innovative, and deadline-oriented. Our event coverage exceeded expectations.", author: "MIDE Media", role: "Production House" },
    { id: 4, quote: "The attention to detail and creative approach made all the difference in our campaign's success.", author: "Dave Ugbor", role: "Creative Director" },
    { id: 5, quote: "EASYREELS brought our vision to life with stunning visuals and flawless execution.", author: "Ghosted Tife", role: "Artist Manager" },
    { id: 6, quote: "The production quality and creative direction exceeded our expectations. Highly recommended!", author: "Beat Sultan", role: "Music Producer" },
    { id: 7, quote: "Working with EASYREELS was a game-changer for our brand's visual identity.", author: "Gen Joshua", role: "Brand Director" },
    { id: 8, quote: "The team's professionalism and creativity made our project truly memorable.", author: "Jesukayode", role: "Event Planner" },
    { id: 9, quote: "Exceptional work that captured the essence of our brand perfectly.", author: "Favour Ojo", role: "Marketing Director" },
    { id: 10, quote: "The attention to detail and artistic vision made all the difference in our campaign.", author: "Tailoredbyflorah", role: "Fashion Designer" },
  ];
  
  // Duplicate testimonials for infinite scroll effect
  const allTestimonials = [...testimonials, ...testimonials];
  
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
          SOCIAL PROOF
        </motion.h2>
        
        <div className="overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {allTestimonials.map((testimonial, index) => (
              <div key={`${testimonial.id}-${index}`} className="mx-8 inline-flex items-center">
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 max-w-md">
                  <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Section Component
function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    budget: 5000,
    projectType: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ success: boolean; message: string } | null>(null);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, budget: parseInt(e.target.value) }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setSubmitMessage({ success: true, message: result.message });
        // Reset form
        setFormData({
          name: '',
          brand: '',
          budget: 5000,
          projectType: ''
        });
      } else {
        setSubmitMessage({ success: false, message: result.message || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage({ success: false, message: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          CONTACT & BOOKING
        </motion.h2>
        
        <div className="bg-gray-950 border border-gray-800 rounded-xl p-8">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">$ Terminal Interface v2.1.0</h3>
            <p className="text-gray-400">Initializing secure connection...</p>
          </div>
          
          {submitMessage && (
            <div className={`mb-6 p-4 rounded-lg ${submitMessage.success ? 'bg-green-900 border border-green-700' : 'bg-red-900 border border-red-700'}`}>
              <p className={submitMessage.success ? 'text-green-300' : 'text-red-300'}>
                {submitMessage.message}
              </p>
            </div>
          )}
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-300 mb-2">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-blue"
                placeholder="Enter your name"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-300 mb-2">Brand/Project:</label>
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleInputChange}
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-blue"
                placeholder="Enter your brand or project name"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-300 mb-2">
                Budget Range: ${formData.budget.toLocaleString()}
              </label>
              <input
                type="range"
                name="budget"
                min="500"
                max="50000"
                step="500"
                value={formData.budget}
                onChange={handleBudgetChange}
                className="w-full accent-neon-green"
              />
              <div className="flex justify-between text-sm text-gray-400 mt-1">
                <span>$500</span>
                <span>$50,000+</span>
              </div>
            </div>
            
            <div>
              <label className="block text-gray-300 mb-2">Project Type:</label>
              <input
                type="text"
                name="projectType"
                value={formData.projectType}
                onChange={handleInputChange}
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-blue"
                placeholder="e.g., Music Video, Commercial, Event Coverage"
                required
              />
            </div>
            
            <button 
              type="submit"
              className="w-full bg-white text-black py-4 rounded-lg font-bold hover:bg-gray-200 transition-colors mt-8 disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'TRANSMITTING...' : 'INITIATE TRANSMISSION'}
            </button>
          </form>
          
          <div className="mt-12 pt-8 border-t border-gray-800">
            <h3 className="text-xl font-bold mb-4">Connect Directly</h3>
            <div className="flex flex-col md:flex-row gap-6">
              <a 
                href="https://www.instagram.com/eaasyreels?igsh=aGJ4OGgycWVxdmlu&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-neon-pink transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram: @eaasyreels</span>
              </a>
              
              <a 
                href="mailto:Ogundipeayomide70@gmail.com" 
                className="flex items-center gap-3 text-gray-300 hover:text-neon-blue transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                </svg>
                <span>Ogundipeayomide70@gmail.com</span>
              </a>
              
              <a 
                href="tel:+2348167275352" 
                className="flex items-center gap-3 text-gray-300 hover:text-neon-green transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/>
                </svg>
                <span>+234 816 727 5352</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
