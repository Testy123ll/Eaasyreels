'use client';

import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const packages = [
  { 
    id: 1, 
    name: "Essential", 
    price: "₦200,000", 
    features: ["1-Day Shoot", "2 Highlight Videos", "2 Min Max Video", "1 Full Video", "1 Revision", "4K HD Delivery"],
    link: "https://wa.link/hde52c",
    highlight: false
  },
  { 
    id: 2, 
    name: "Premium", 
    price: "₦350,000", 
    features: ["2-Day Shoot", "2 Highlight Videos", "2 Min Max Video", "1 Full Video", "1 Revision", "4K HD Delivery"],
    link: "https://wa.link/a4eoxl",
    highlight: true
  },
  { 
    id: 3, 
    name: "Wedding", 
    price: "₦250,000", 
    features: ["Wedding Shoot", "4 Highlight Videos", "2 Min Max Video (2)", "2 Revisions", "4K HDR Delivery"],
    link: "https://wa.link/pf9ja3",
    highlight: false
  },
];

export default function Pricing() {
  return (
    <section className="py-32 px-4 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
         <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
        >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">INVESTMENT</h2>
            <p className="text-gray-400">Transparent pricing for premium visual assets.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl border ${pkg.highlight ? 'border-[#3B82F6] bg-[#3B82F6]/5' : 'border-white/10 bg-[#0a0a0a]'} backdrop-blur-sm hover:border-[#3B82F6]/50 transition-all duration-300 group`}
            >
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#3B82F6] text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                  <Star size={12} fill="currentColor" /> MOST POPULAR
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2 text-white">{pkg.name}</h3>
              <div className="text-4xl font-mono font-bold text-white mb-8 tracking-tighter">
                {pkg.price}
              </div>

              <ul className="space-y-4 mb-10">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    <Check size={18} className="text-[#3B82F6] mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href={pkg.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-4 text-center font-bold tracking-wide rounded-lg transition-all duration-300 ${
                  pkg.highlight 
                    ? 'bg-[#3B82F6] text-white hover:bg-blue-600 shadow-[0_0_20px_rgba(59,130,246,0.3)]' 
                    : 'bg-white text-black hover:bg-gray-200'
                }`}
              >
                SECURE DATE
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
