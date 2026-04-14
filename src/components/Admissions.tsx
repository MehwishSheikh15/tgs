import React from 'react';
import { motion } from 'motion/react';
import { Phone, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

const Admissions = () => {
  return (
    <section id="admissions" className="py-24 soft-purple-bg">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-primary/10">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-4 py-1 bg-accent/20 text-accent-dark rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                  Now Enrolling
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
                  Admissions Open for <span className="text-primary">Session 2026-2027</span>
                </h2>
                <p className="text-lg text-slate-600 mb-10">
                  Join our vibrant learning community. We are currently accepting applications for Reception to Class IX (Matric). Secure your child's future with quality education.
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary shrink-0" />
                    <span className="text-slate-700 font-medium">Reception to Class IX</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary shrink-0" />
                    <span className="text-slate-700 font-medium">English Medium Curriculum</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary shrink-0" />
                    <span className="text-slate-700 font-medium">Safe & Secure Environment</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary shrink-0" />
                    <span className="text-slate-700 font-medium">Expert Faculty</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-primary hover:bg-primary-light text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2">
                    Apply Now <ArrowRight size={20} />
                  </button>
                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase">Call for Inquiry</p>
                      <p className="text-slate-900 font-bold">+92 341 2046638</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="relative hidden lg:block">
              <img 
                src="https://picsum.photos/seed/happy-students/1000/1200" 
                alt="Happy Students" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent"></div>
              
              <div className="absolute top-12 right-12 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-white">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold">Session Start</p>
                    <p className="text-slate-500 text-sm">August 2026</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Limited Seats Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
