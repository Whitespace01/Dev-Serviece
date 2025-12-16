import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-indigo-500 uppercase tracking-widest mb-3">Client Stories</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white">
            Trusted by <br/> industry leaders.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl relative group"
            >
              <div className="absolute top-8 right-8 text-indigo-500/20 group-hover:text-indigo-500/40 transition-colors">
                <Quote size={48} className="fill-current" />
              </div>

              <div className="relative z-10">
                <p className="text-slate-300 mb-8 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-500/30">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">{testimonial.name}</h4>
                    <p className="text-indigo-400 text-xs font-medium">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
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