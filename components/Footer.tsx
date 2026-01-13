import { Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white tracking-widest mb-2">
              EASYREELS
            </h3>
            <p className="text-gray-500 text-sm">Capturing Chaos, Creating Magic</p>
          </div>
          
          <div className="flex gap-8">
            <a 
              href="https://www.instagram.com/eaasyreels?igsh=aGJ4OGgycWVxdmlu&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#3B82F6] transition-colors"
            >
              <Instagram size={24} />
            </a>
            
            <a 
              href="mailto:Ogundipeayomide70@gmail.com" 
              className="text-gray-400 hover:text-[#3B82F6] transition-colors"
            >
              <Mail size={24} />
            </a>
            
            <a 
              href="tel:+2348167275352" 
              className="text-gray-400 hover:text-[#3B82F6] transition-colors"
            >
              <Phone size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} EASYREELS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
