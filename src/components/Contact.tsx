import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Facebook, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Contact Us</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8">
              Get in <span className="text-primary">Touch</span>
            </h3>
            <p className="text-lg text-slate-600 mb-10">
              Have questions about admissions or our programs? We're here to help. Visit us or give us a call today.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-primary/20">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Our Location</h4>
                  <p className="text-slate-600">Block "M", Sector No. 11 1/2, Iqbal Market, Orangi Town, Karachi</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-accent/20">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Call Us</h4>
                  <p className="text-slate-600">+92 341 2046638</p>
                  <p className="text-slate-600">0336-2131216</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-primary-light rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-primary-light/20">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">School Hours</h4>
                  <p className="text-slate-600">Monday - Thursday: 8:00 AM - 1:30 PM</p>
                  <p className="text-slate-600">Friday: 8:00 AM - 12:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a 
                href="https://www.facebook.com/noumanmanzoor2006/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-100 hover:bg-primary hover:text-white rounded-full flex items-center justify-center text-slate-600 transition-all"
              >
                <Facebook size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-[3rem] p-8 md:p-12 border border-slate-200 shadow-inner"
          >
            <h4 className="text-2xl font-bold text-slate-900 mb-6">Find Us on Map</h4>
            <div className="w-full h-[400px] bg-slate-200 rounded-3xl overflow-hidden relative">
              {/* Google Maps Embed Placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <MapPin size={48} className="text-primary mb-4 opacity-50" />
                <p className="text-slate-500 font-medium">Google Maps Embed Placeholder</p>
                <p className="text-slate-400 text-sm mt-2">Block "M", Sector No. 11 1/2, Iqbal Market, Orangi Town, Karachi</p>
                <button className="mt-6 bg-primary text-white px-6 py-2 rounded-full text-sm font-bold">
                  Open in Google Maps
                </button>
              </div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.433246754326!2d66.992!3d24.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDU3JzAwLjAiTiA2NsKwNTknMzEuMiJF!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="School Location"
                className="opacity-0" // Hidden for now as it's a placeholder
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
