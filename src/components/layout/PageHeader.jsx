import React from 'react';
import GradientText from '../ui/GradientText';

function PageHeader({ title, subtitle }) {
  return (
    <div className="text-center mb-8 animate-in slide-in-from-top duration-700">
      <GradientText as="h1" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        {title}
      </GradientText>
      {subtitle && (
        <p className="text-gray-400 text-base sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
}

export default PageHeader;