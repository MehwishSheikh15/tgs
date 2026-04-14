import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 soft-purple-bg overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">About Our School</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              A Vision for <span className="text-primary">Excellence</span> in Orangi Town
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Founded with the vision of Nouman Manzoor, The Grammar School is a community-focused institution dedicated to providing high-quality, safe, and value-based education. Located in the heart of Orangi Town (Block M, Sector 11½, Iqbal Market), we have been a beacon of learning since our inception.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Our Mission</h4>
                  <p className="text-slate-600">Providing quality, safe and value-based education since inception, ensuring every child reaches their full potential.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center text-accent-dark shrink-0">
                  <Eye size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Our Vision</h4>
                  <p className="text-slate-600">To be a leading educational institution that inspires passion in learning and purposeful living.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="building.jpg" 
                alt="The Grammar School Building" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent rounded-full -z-0 opacity-50 blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary-light rounded-full -z-0 opacity-30 blur-3xl"></div>
            
            <div className="absolute bottom-8 right-8 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[200px] border-l-4 border-accent">
              <p className="text-primary font-bold text-3xl mb-1">15+</p>
              <p className="text-slate-500 text-sm font-medium">Years of Educational Excellence</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
