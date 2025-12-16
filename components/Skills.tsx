import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-950/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-indigo-500 uppercase tracking-widest mb-3">Technical Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white">
            The tools I use to build <br/> the future.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl group hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-slate-800 rounded-lg text-indigo-400 group-hover:text-indigo-300 group-hover:bg-indigo-900/20 transition-colors">
                  <skill.icon size={28} />
                </div>
                <span className="text-xs font-semibold text-slate-500 border border-slate-700 px-2 py-1 rounded">
                  {skill.category}
                </span>
              </div>
              
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-xl font-bold text-white">{skill.name}</h4>
                <span className="text-sm text-slate-400 font-medium">{skill.level}%</span>
              </div>
              
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;