import React from 'react';
import { Waves } from 'lucide-react';

const GradientSection = ({ title, children, className = "" }) => {
  return (
    <section className={`bg-gradient-to-br from-[#1678F3] to-[#4DBAE9] rounded-[50px] p-10 text-white shadow-2xl relative overflow-hidden ${className}`}>
      {/* Dekorasi Ombak di Background Section */}
      <Waves className="absolute -bottom-10 -left-10 text-white/10 scale-[4] pointer-events-none" />
      
      <div className="relative z-10">
        {title && (
          <h3 className="text-lg font-black uppercase italic tracking-tighter mb-8">
            {title}
          </h3>
        )}
        {children}
      </div>
    </section>
  );
};

export default GradientSection;