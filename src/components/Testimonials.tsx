import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Best school of Orangi Town. My children are very happy here and the teachers are very supportive.",
      author: "Parent of Class IV Student",
      rating: 5,
    },
    {
      text: "Safe and inspiring environment. I highly recommend The Grammar School for quality education.",
      author: "Parent of Reception Student",
      rating: 5,
    },
    {
      text: "The English Medium curriculum is excellent. My son has improved significantly in his studies.",
      author: "Parent of Class VII Student",
      rating: 5,
    },
    {
      text: "Highly recommended for Montessori. The activities are very engaging and educational.",
      author: "Parent of Kindergarten Student",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 soft-purple-bg">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4"
          >
            Testimonials
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
          >
            What <span className="text-primary">Parents Say</span>
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-primary/5 relative border border-white"
            >
              <div className="absolute top-8 right-10 text-primary/10">
                <Quote size={60} fill="currentColor" />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-accent fill-accent" />
                ))}
              </div>
              
              <p className="text-xl text-slate-700 italic mb-8 leading-relaxed">
                "{item.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                  {item.author.charAt(10)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{item.author}</h4>
                  <p className="text-slate-400 text-sm">Verified Parent</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
