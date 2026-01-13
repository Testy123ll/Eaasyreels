'use client';

import { motion } from 'framer-motion';

const testimonials = [
  { 
    id: 1, 
    quote: "Working with EASYREELS transformed our brand story. The visual narrative captured our essence perfectly.", 
    author: "Mikeage", 
    role: "Director, Cinematographer, Colorist" 
  },
  { 
    id: 2, 
    quote: "The cinematography elevated our music video to another level. Truly exceptional creative vision.", 
    author: "Opadoja", 
    role: " Director, Cinematography, " 
  },
  { 
    id: 3, 
    quote: "Professional, innovative, and deadline-oriented. Our event coverage exceeded expectations.", 
    author: "MIDE Media", 
    role: "Photography, Director, Cinematography" 
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
    role: "Artist,Music Producer, Audio Engineer" 
  },
  { 
    id: 6, 
    quote: "The production quality and creative direction exceeded our expectations. Highly recommended!", 
    author: "Beat Sultan", 
    role: "Music Producer, Project Manager, A&P Executive" 
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#0a0a0a] to-black">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold text-center mb-16 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] to-purple-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          CLIENT WORDS
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-zinc-900/50 border border-white/5 rounded-2xl p-8 backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-[#3B82F6] mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <p className="text-gray-300 italic mb-8 leading-relaxed text-lg">&quot;{testimonial.quote}&quot;</p>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3B82F6] to-purple-600 flex items-center justify-center mr-4 font-bold text-white">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
                { label: "Projects Completed", value: "150+" },
                { label: "Client Satisfaction", value: "98%" },
                { label: "Brands Collaborated", value: "50+" },
                { label: "Creative Support", value: "24/7" },
            ].map((stat, i) => (
                <div key={i} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] to-purple-500 mb-2">
                        {stat.value}
                    </div>
                    <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
