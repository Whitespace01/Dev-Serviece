import React, { useState } from 'react';
import { SOCIALS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-slate-800 bg-slate-950 text-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Euro Dev Agency. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            {SOCIALS.map((social) => (
              <a 
                key={social.platform}
                href={social.url}
                className="text-slate-500 hover:text-indigo-400 transition-colors"
                aria-label={social.platform}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;