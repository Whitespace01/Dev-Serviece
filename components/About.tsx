import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-sm font-bold text-indigo-500 uppercase tracking-widest mb-3">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              I don't just write code. <br/>
              <span className="text-slate-400">I solve business problems.</span>
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              With over 6 years of experience in full-stack development, I've had the privilege of working with YC startups, creative agencies, and Fortune 500 companies. My philosophy is simple: technology should serve the purpose of design, not limit it.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              I specialize in bridging the gap between design and engineering, ensuring that the final product looks exactly like the mockup—pixel perfect, responsive, and performant.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Pixel Perfect Design', 'SEO Optimized', 'Lightning Fast', 'Scalable Architecture'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-indigo-500" size={20} />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {SERVICES.map((service, idx) => (
              <div 
                key={idx} 
                className="glass-card p-6 rounded-2xl hover:bg-slate-800/50 transition-colors"
              >
                <service.icon className="text-indigo-400 mb-4" size={32} />
                <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;