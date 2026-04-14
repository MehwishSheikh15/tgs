import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, GraduationCap, Users, Star } from 'lucide-react';

const Academics = () => {
  const levels = [
    {
      title: 'Reception',
      description: 'The first step into a world of wonder and discovery for our youngest learners.',
      icon: <Star className="text-accent" />,
      color: 'bg-accent/10',
    },
    {
      title: 'Kindergarten',
      description: 'Building strong foundations through play-based learning and creative exploration.',
      icon: <Users className="text-primary" />,
      color: 'bg-primary/10',
    },
    {
      title: 'Primary (I - V)',
      description: 'Developing core skills in literacy, numeracy, and critical thinking.',
      icon: <BookOpen className="text-primary-light" />,
      color: 'bg-primary-light/10',
    },
    {
      title: 'Secondary (VI - IX)',
      description: 'Comprehensive preparation for Matriculation with a focus on academic excellence.',
      icon: <GraduationCap className="text-primary" />,
      color: 'bg-primary/10',
    },
  ];

  return (
    <section id="academics" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4"
          >
            Academic Programs
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
          >
            Nurturing Minds from <span className="text-primary">Montessori to Matric</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            We offer a comprehensive English Medium curriculum designed to empower students with knowledge, character, and skills for the future.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {levels.map((level, index) => (
            <motion.div
              key={level.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
            >
              <div className={`w-16 h-16 ${level.color} rounded-2xl flex items-center justify-center mb-6`}>
                {React.cloneElement(level.icon as React.ReactElement, { size: 32 })}
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">{level.title}</h4>
              <p className="text-slate-600 leading-relaxed">{level.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-10 rounded-[2rem] purple-gradient text-white text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <h4 className="text-3xl font-bold mb-4 text-accent">English Medium Excellence</h4>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Our curriculum is aligned with modern educational standards, ensuring our students are competitive and well-prepared for higher education.
            </p>
          </div>
          {/* Decorative background shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Academics;
