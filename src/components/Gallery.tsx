import React from 'react';
import { motion } from 'motion/react';

const Gallery = () => {
  const photos = [
    {
      url: 'https://picsum.photos/seed/school-exterior/800/600',
      caption: 'School Exterior',
      category: 'Campus',
    },
    {
      url: 'https://picsum.photos/seed/classroom-learning/800/600',
      caption: 'Modern Classrooms',
      category: 'Academics',
    },
    {
      url: 'https://picsum.photos/seed/montessori-activity/800/600',
      caption: 'Montessori Activities',
      category: 'Early Years',
    },
    {
      url: 'https://picsum.photos/seed/art-craft/800/600',
      caption: 'Art & Craft Session',
      category: 'Creative',
    },
    {
      url: 'https://picsum.photos/seed/sports-day/800/600',
      caption: 'Sports Activities',
      category: 'Physical Education',
    },
    {
      url: 'https://picsum.photos/seed/school-assembly/800/600',
      caption: 'Morning Assembly',
      category: 'Daily Life',
    },
    {
      url: 'https://picsum.photos/seed/students-uniform/800/600',
      caption: 'Students in Uniform',
      category: 'Campus',
    },
    {
      url: 'https://picsum.photos/seed/annual-function/800/600',
      caption: 'Annual Function',
      category: 'Events',
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4"
          >
            Our Gallery
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
          >
            Life at <span className="text-primary">The Grammar School</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            A glimpse into the vibrant environment where our students learn, play, and grow every day.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer"
            >
              <img 
                src={photo.url} 
                alt={photo.caption} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                <span className="text-accent text-xs font-bold uppercase tracking-widest mb-2">{photo.category}</span>
                <h4 className="text-white font-bold text-lg">{photo.caption}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
