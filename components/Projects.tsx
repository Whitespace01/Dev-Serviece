import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-indigo-500 uppercase tracking-widest mb-3">Selected Works</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white">
              Projects that made <br/> a difference.
            </h3>
          </div>
          <a href="#" className="text-slate-300 hover:text-white flex items-center gap-2 border-b border-slate-700 hover:border-white pb-1 transition-all">
            View all projects <ExternalLink size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">{project.category}</span>
                  <div className="flex gap-3">
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">
                      <Github size={18} />
                    </a>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;