'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Contact() {
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
      answer: "Yes, all packages include revision rounds. Essential package includes 1 revision, Premium includes 1 revision, and Wedding package includes 2 revisions. Additional revisions are available for a nominal fee."
    },
    {
      question: "What is your payment structure?",
      answer: "We require a 70% deposit to secure your booking date, with the remaining balance due before final delivery. Payments can be made via bank transfer or direct deposit."
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
      question: "Do you offer video editing services for footage not shot by you?",
      answer: "Yes, we provide professional video editing services for footage shot by other videographers or clients. Please contact us with details about your project for a custom quote."
    }
  ];

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="contact-section" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">LET&apos;S CREATE CHAOS</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Ready to elevate your visual identity? Reach out directly or send an enquiry below.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Social & Contact Links */}
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
            >
                <h3 className="text-2xl font-bold text-white mb-6">Connect Directly</h3>
                
                <a href="https://wa.me/2348167275352" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-6 p-6 rounded-xl bg-zinc-900/50 border border-white/10 hover:border-[#25D366] group transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.001.572 2.135.882 3.322.882 3.182 0 5.768-2.587 5.768-5.766-2e-3-3.181-2.587-5.765-5.768-5.765zm9.956 5.765h.001c-.001 5.495-4.471 9.965-9.965 9.965-1.742 0-3.371-.462-4.771-1.258l-5.353 1.4.1.026 1.429-5.21c-.878-1.487-1.399-3.219-1.399-5.083 0-5.494 4.47-9.964 9.964-9.964 5.494-.001 9.965 4.471 9.964 9.964z"/></svg>
                    </div>
                    <div>
                        <div className="text-white font-bold text-lg">WhatsApp</div>
                        <div className="text-gray-400">Chat with us instantly</div>
                    </div>
                </a>

                <a href="https://www.instagram.com/eaasyreels" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-6 p-6 rounded-xl bg-zinc-900/50 border border-white/10 hover:border-[#E1306C] group transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-[#E1306C]/20 flex items-center justify-center text-[#E1306C] group-hover:scale-110 transition-transform">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.014-3.667.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </div>
                    <div>
                        <div className="text-white font-bold text-lg">Instagram</div>
                        <div className="text-gray-400">Follow the journey</div>
                    </div>
                </a>

                <a href="mailto:ogundipeayomide70@gmail.com" 
                className="flex items-center gap-6 p-6 rounded-xl bg-zinc-900/50 border border-white/10 hover:border-[#3B82F6] group transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-[#3B82F6]/20 flex items-center justify-center text-[#3B82F6] group-hover:scale-110 transition-transform">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                    </div>
                    <div>
                        <div className="text-white font-bold text-lg">Email</div>
                        <div className="text-gray-400">ogundipeayomide70@gmail.com</div>
                    </div>
                </a>
            </motion.div>

            {/* Custom Enquiry Form */}
            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-zinc-900 p-8 rounded-xl border border-white/10"
            >
                <h3 className="text-2xl font-bold text-white mb-6">Custom Enquiry</h3>
                <form className="space-y-6" onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
                    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
                    const type = (form.elements.namedItem('type') as HTMLSelectElement).value;
                    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
                    
                    const subject = `New Project Enquiry: ${type} - ${name}`;
                    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AProject Type: ${type}%0D%0A%0D%0AMessage:%0D%0A${message}`;
                    
                    window.location.href = `mailto:ogundipeayomide70@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
                }}>
                    <div>
                        <label className="block text-sm text-gray-400 mb-2">Name</label>
                        <input name="name" required type="text" className="w-full bg-black border border-white/10 rounded-lg p-3 text-white focus:border-[#3B82F6] outline-none transition-colors" placeholder="Your Name" />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-400 mb-2">Email</label>
                        <input name="email" required type="email" className="w-full bg-black border border-white/10 rounded-lg p-3 text-white focus:border-[#3B82F6] outline-none transition-colors" placeholder="your@email.com" />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-400 mb-2">Project Type</label>
                        <select name="type" className="w-full bg-black border border-white/10 rounded-lg p-3 text-white focus:border-[#3B82F6] outline-none transition-colors">
                            <option>Brand Promotion</option>
                            <option>Event Coverage</option>
                            <option>Music Video</option>
                            <option>Wedding</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm text-gray-400 mb-2">Message</label>
                        <textarea name="message" required rows={4} className="w-full bg-black border border-white/10 rounded-lg p-3 text-white focus:border-[#3B82F6] outline-none transition-colors" placeholder="Tell us about your project..."></textarea>
                    </div>
                    <button type="submit" className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-[#3B82F6] hover:text-white transition-all duration-300">
                        SEND ENQUIRY
                    </button>
                    <p className="text-xs text-center text-gray-500 mt-4">
                        *This will open your default email client with the details pre-filled.
                    </p>
                </form>
            </motion.div>
        </div>

        <h3 className="text-2xl font-bold text-center mb-8 text-white">Frequently Asked Questions</h3>

        <div className="space-y-4 mb-20">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="border border-white/10 rounded-lg overflow-hidden bg-zinc-900/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold text-lg text-white">{faq.question}</span>
                {openFaqIndex === index ? <ChevronUp className="text-[#3B82F6]" /> : <ChevronDown className="text-gray-500" />}
              </button>
              
              {openFaqIndex === index && (
                <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 bg-black/20">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
