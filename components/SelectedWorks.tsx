'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Instagram } from 'lucide-react';

const projects = [
  { 
    id: 1, 
    title: "Brand Promotion", 
    client: "EASYREELS", 
    role: "Director/Cinematographer", 
    desc: "Product videos, business promos, BTS, and storytelling content.",
    videoUrl: "https://www.instagram.com/reel/DM97D0vohh-/embed",
    poster: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop"
  },
  { 
    id: 2, 
    title: "Wedding Shoot", 
    client: "Ife Chinedu", 
    role: "Director/Cinematographer", 
    desc: "Cinematic capturing of special moments and emotional highlights.",
    videoUrl: "https://www.instagram.com/reel/DLUk4Sgsgwa/embed",
    poster: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=1000&auto=format&fit=crop"
  },
  { 
    id: 3, 
    title: "Event Recap", 
    client: "Scale Up", 
    role: "Drone Operator", 
    desc: "High-energy event coverage with dynamic drone perspectives.",
    videoUrl: "https://www.instagram.com/reel/DRAVk9SCD4-/embed",
    poster: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1000&auto=format&fit=crop"
  },
  { 
    id: 4, 
    title: "Music Video", 
    client: "Dave Ugbor", 
    role: "Colorist", 
    desc: "Vibrant color grading and stylistic direction for music visuals.",
    videoUrl: "https://www.instagram.com/reel/DOkrEp_DKj4/embed",
    poster: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=1000&auto=format&fit=crop"
  },
];

export default function SelectedWorks() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="selected-works" className="py-32 px-4 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8"
        >
            <div>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">SELECTED WORKS</h2>
                <div className="h-1 w-20 bg-[#3B82F6]"></div>
            </div>
            <p className="text-gray-400 max-w-sm text-lg">Curated collection of our finest frames and chaotic captures.</p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
                <motion.div
                    key={project.id}
                    layoutId={`project-${project.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setSelectedProject(project)}
                    className="group cursor-pointer relative aspect-[16/9] overflow-hidden rounded-sm"
                >
                    <img 
                        src={project.poster} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-75 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                    
                    {/* Play Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-full border border-white/20">
                            <Play className="w-8 h-8 text-white fill-current" />
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/90 to-transparent">
                        <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                        <p className="text-sm text-gray-300">{project.client}</p>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                    />
                    
                    <motion.div
                        layoutId={`project-${selectedProject.id}`}
                        className="relative bg-[#0a0a0a] w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-lg flex flex-col md:flex-row shadow-2xl border border-white/10"
                    >
                        <button 
                            onClick={(e) => { e.stopPropagation(); setSelectedProject(null); }}
                            className="absolute top-4 right-4 z-50 p-2 bg-black/50 rounded-full text-white hover:bg-white hover:text-black transition-colors"
                        >
                            <X size={24} />
                        </button>

                        {/* Video Area */}
                        <div className="w-full md:w-2/3 bg-black flex items-center justify-center aspect-video md:aspect-auto">
                            <iframe
                                src={selectedProject.videoUrl}
                                className="w-full h-full min-h-[400px]"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title={selectedProject.title}
                            />
                        </div>

                        {/* Info Area */}
                        <div className="w-full md:w-1/3 p-8 flex flex-col justify-center border-l border-white/10">
                            <h3 className="text-3xl font-bold mb-2 text-white">{selectedProject.title}</h3>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="text-xs font-mono uppercase bg-[#3B82F6]/20 text-[#3B82F6] px-2 py-1 rounded">
                                    {selectedProject.role}
                                </span>
                                <span className="text-xs font-mono uppercase bg-white/10 text-gray-300 px-2 py-1 rounded">
                                    {selectedProject.client}
                                </span>
                            </div>
                            
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                {selectedProject.desc}
                            </p>

                            <a 
                                href="https://instagram.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full py-4 bg-white text-black font-bold hover:bg-[#3B82F6] hover:text-white transition-all duration-300"
                            >
                                <Instagram size={20} />
                                VIEW ON INSTAGRAM
                            </a>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
      </div>
    </section>
  );
}
