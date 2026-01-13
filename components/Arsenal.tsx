'use client';

import { motion } from 'framer-motion';
import { Video, Award, Music, Aperture, Combine, Zap } from 'lucide-react';
import { useState } from 'react';

const services = [
  { 
    id: 1, 
    title: "Videography", 
    desc: "Cinematic storytelling through motion",
    icon: Video,
    color: "from-blue-500/20 to-purple-500/20"
  },
  { 
    id: 2, 
    title: "Color Grading", 
    desc: "Transforming visuals with color theory",
    icon: Aperture,
    color: "from-orange-500/20 to-red-500/20"
  },
  { 
    id: 3, 
    title: "Sound Design", 
    desc: "Creating immersive audio experiences",
    icon: Music,
    color: "from-green-500/20 to-teal-500/20"
  },
  { 
    id: 4, 
    title: "Creative Direction", 
    desc: "Visionary leadership for campaigns",
    icon: Zap,
    color: "from-yellow-500/20 to-amber-500/20"
  },
  { 
    id: 5, 
    title: "Drone Pilot", 
    desc: "Aerial perspectives that captivate",
    icon: Combine,
    color: "from-cyan-500/20 to-blue-500/20"
  },
  { 
    id: 6, 
    title: "Post Production", 
    desc: "Crafting perfection in post",
    icon: Award,
    color: "from-pink-500/20 to-rose-500/20"
  },
];

export default function Arsenal() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-4 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
        >
            <h2 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">THE ARSENAL</h2>
            <div className="h-1 w-20 bg-[#3B82F6]"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative h-80 border border-white/10 p-8 flex flex-col justify-end overflow-hidden transition-all duration-500 hover:border-white/30"
            >
              {/* Background Gradient/Video Placeholder */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                <service.icon className="w-8 h-8 mb-4 text-[#3B82F6]" />
                <h3 className="text-2xl font-bold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-400 group-hover:text-white transition-colors">{service.desc}</p>
              </div>

               {/* Video Texture Overlay Effect (Simulated) */}
               <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
