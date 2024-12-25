import React from 'react';
import clsx from 'clsx';

function GradientText({ children, className, as: Component = 'span' }) {
  return (
    <Component className={clsx(
      'bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent',
      className
    )}>
      {children}
    </Component>
  );
}

export default GradientText;