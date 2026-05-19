import React from 'react';

const ContentSection = ({ children, className = "" }) => {
  return (
    <div className={`bg-white/80 backdrop-blur-md border border-white rounded-[50px] p-10 shadow-xl shadow-blue-100/50 ${className}`}>
      {children}
    </div>
  );
};

export default ContentSection;