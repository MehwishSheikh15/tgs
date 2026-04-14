import React from 'react';
import { Facebook, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1 shadow-md">
                <img 
                  src="tgs-logo.png" 
                  alt="Logo" 
                  className="w-full h-full rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-tight tracking-tight uppercase">THE GRAMMAR SCHOOL</span>
                <span className="text-accent text-[10px] font-semibold uppercase tracking-widest">Karachi</span>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              Imparting quality education from Montessori to Matric. Safe, inspiring, and excellence-driven learning environment in Orangi Town.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/noumanmanzoor2006/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-accent hover:text-primary rounded-full flex items-center justify-center transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-white/70 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#academics" className="text-white/70 hover:text-white transition-colors">Academics</a></li>
              <li><a href="#admissions" className="text-white/70 hover:text-white transition-colors">Admissions</a></li>
              <li><a href="#gallery" className="text-white/70 hover:text-white transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-accent">Contact Info</h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex gap-3">
                <span className="text-accent font-bold">A:</span>
                <span>Block "M", Sector No. 11 1/2, Iqbal Market, Orangi Town, Karachi</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">P:</span>
                <span>+92 341 2046638<br /></span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">E:</span>
                <span>tgs.orangi@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm">
          <p>© 2026 The Grammar School, Karachi. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={14} className="text-accent fill-accent" /> for Excellence in Education
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
